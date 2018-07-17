provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "kpitzen-ci"
    key    = "kpitzen.io.tf"
    region = "us-east-1"
  }
}

resource "aws_s3_bucket" "prod_bucket" {
  bucket = "prod-kpitzen.io"
  acl    = "private"

  tags {
    Name        = "kpitzen.io"
    Environment = "Prod"
  }
}

resource "aws_s3_bucket" "dev_bucket" {
  bucket = "dev-kpitzen.io"
  acl    = "private"

  tags {
    Name        = "kpitzen.io"
    Environment = "Dev"
  }
}

locals {
  s3_prod_origin_id = "kpitzen_s3_prod_origin"
  s3_dev_origin_id  = "kpitzen_s3_dev_origin"
}

resource "aws_cloudfront_distribution" "prod_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.prod_bucket.bucket_regional_domain_name}"
    origin_id   = "${local.s3_prod_origin_id}"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.prod_identity.cloudfront_access_identity_path}"
    }
  }

  comment = "Cloudfront Distribution for prod kpitzen.io"

  enabled = true

  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "${local.s3_prod_origin_id}"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      cookies {
        forward = "all"
      }

      query_string = true
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  tags {
    Name        = "kpitzen.io"
    Environment = "Prod"
  }
}

resource "aws_cloudfront_distribution" "dev_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.dev_bucket.bucket_regional_domain_name}"
    origin_id   = "${local.s3_dev_origin_id}"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.dev_identity.cloudfront_access_identity_path}"
    }
  }

  comment = "Cloudfront Distribution for dev kpitzen.io"

  enabled = true

  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "${local.s3_dev_origin_id}"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      cookies {
        forward = "all"
      }

      query_string = true
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
  }

  tags {
    Name        = "kpitzen.io"
    Environment = "Dev"
  }
}

resource "aws_cloudfront_origin_access_identity" "prod_identity" {
  comment = "Prod Access Identity"
}

resource "aws_cloudfront_origin_access_identity" "dev_identity" {
  comment = "Dev Access Identity"
}

data "aws_iam_policy_document" "s3_prod_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.prod_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.prod_identity.iam_arn}"]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = ["${aws_s3_bucket.prod_bucket.arn}"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.prod_identity.iam_arn}"]
    }
  }
}

resource "aws_s3_bucket_policy" "prod_bucket_policy" {
  bucket = "${aws_s3_bucket.prod_bucket.id}"
  policy = "${data.aws_iam_policy_document.s3_prod_policy.json}"
}

data "aws_iam_policy_document" "s3_dev_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.dev_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.dev_identity.iam_arn}"]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = ["${aws_s3_bucket.dev_bucket.arn}"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.dev_identity.iam_arn}"]
    }
  }
}

resource "aws_s3_bucket_policy" "dev_bucket_policy" {
  bucket = "${aws_s3_bucket.dev_bucket.id}"
  policy = "${data.aws_iam_policy_document.s3_dev_policy.json}"
}