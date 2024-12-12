export type INavLink = {
  title: string;
  href?: string;
  children?: INavLink[];
};

export type IManagement = {
  name: string;
  designation: string;
  image: string;
  quote: string;
};
