export interface IBlogPost {
  key: number;
  postdate: string;
  abbText: string;
  categories: string[];
  filename: string;
  title: string;
  source: string;
}

export interface IProjectProps {
  key: number,
  name: string,
  description: string,
  moreUrl: string
}
