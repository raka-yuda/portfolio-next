export type Link = {
  mobile: string;
  backend: string;
};

export type Portfolio = {
  title: string;
  image_url: string;
  description: string;
  tags: string[];
  link: Link[];
};
