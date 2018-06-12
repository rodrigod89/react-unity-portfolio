import * as React from "react";
import YouTube from "react-youtube";
import { IMenuItem } from "../interfaces";

interface IProps {
  MenuItem?: IMenuItem;
}

class SideBar extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    if (this.props.MenuItem === undefined) {
      return <div />;
    }
    const page = this.props.MenuItem;
    return (
      <div className="BarLeft">
        <h1>{page.title}</h1>
        {page.subtitle !== undefined && <h2>{page.subtitle}</h2>}
        <div className="Description">
          {page.description !== undefined && <p>{page.description}</p>}
        </div>
        {page.youtube && (
          <YouTube videoId={page.youtube} opts={{ width: "340" }} />
        )}
      </div>
    );
  }
}

export default SideBar;
