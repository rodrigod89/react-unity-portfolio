import * as React from "react";
import { IMenuItem, IPortfolio } from "../interfaces";
import MenuItem from "./MenuItem";

interface IProps {
  Portfolio: IPortfolio;
  className : string;
  onClick: (menuItem: IMenuItem) => void;
}

class NavBar extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    const projects: any = this.props.Portfolio.projects.map(project => (
      <MenuItem key={project.name} Page={project} onClick={this.onClick}/>
    ));
    return <div className={["NavBar", this.props.className].join(' ')}>{projects}</div>;
  }

  private onClick = (menuItem: IMenuItem) => {
    this.props.onClick(menuItem);
  };
}

export default NavBar;
