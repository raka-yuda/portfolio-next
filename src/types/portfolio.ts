export type Source = {
  type: string;
  link: string;
};

export type Portfolio = {
  title: string;
  image_url: string;
  description: string;
  tags: string[];
  source: Source[];
};
