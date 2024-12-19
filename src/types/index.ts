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

export type ITestingEquipment = {
  title: string;
  description: string;
  image: string;
};

export type ISafetyAndRegulation = {
  image: string;
  content: React.ReactNode | string;
};

export type ICertificate = {
  title: string;
  image: string;
};

export type ISlide = {
  content: React.ReactNode;
  image: string;
};
