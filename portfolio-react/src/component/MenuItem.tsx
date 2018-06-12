import * as React from "react";
import { IMenuItem } from "../interfaces";

interface IProps {
  key: string;
  Page: IMenuItem;
  onClick: (pageNamge: IMenuItem) => void;
}

class MenuItem extends React.Component<IProps, any> {

  public render() {
    return (
      <img
        className="MenuItem hvr-grow"
        src={this.props.Page.logo_image}
        onClick={this.onClick}
      />
    );
  }

  private onClick = (event: React.SyntheticEvent) => {
    this.props.onClick(this.props.Page);
  };
}

export default MenuItem;
