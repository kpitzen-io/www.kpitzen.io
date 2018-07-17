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
  bucket = "prod.kpitzen.io"
  acl    = "private"

  tags {
    Name        = "kpitzen.io"
    Environment = "Prod"
  }
}

resource "aws_s3_bucket" "dev_bucket" {
  bucket = "dev.kpitzen.io"
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
  }

  comment = "Cloudfront Distribution for prod kpitzen.io"

  enabled = true

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
  }

  comment = "Cloudfront Distribution for dev kpitzen.io"

  enabled = true

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
