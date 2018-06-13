interface IPortfolio {
  projects: IMenuItem[];
}

interface IMenuItem {
  name: string;
  title?: string;
  subtitle?: string;
  description:string;

  company?: ILinkedContent;
  teamSize?: number;
  role?: string;
  details?: string[];

  logo_image: string;
  youtube?: string;
  images?: string[];
  component: string;
}

interface ILinkedContent {
  name: string;
  url: string;
}

export {
  IPortfolio,
  IMenuItem,
  ILinkedContent
};