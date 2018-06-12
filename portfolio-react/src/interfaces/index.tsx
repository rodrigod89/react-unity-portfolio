interface IPortfolio {
  projects: IMenuItem[];
}

interface IMenuItem {
  name: string;
  title?: string;
  subtitle?: string;
  description:string;
  logo_image: string;
  youtube?: string;
  images?: string[];
  component: string;
}

export {
  IPortfolio,
  IMenuItem
};