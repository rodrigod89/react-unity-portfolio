import * as React from "react";
import NavBar from "./component/NavBar";

import "./App.css";
import PortfolioData from "./PortfolioData";

import Unity, { UnityEvent } from "react-unity-webgl";
import SideBar from "./component/SideBar";
import { IMenuItem } from "./interfaces";

interface IState {
  progression : number,
  loading: boolean,
  changePageEvent: UnityEvent,
  selectedMenuItem? : IMenuItem
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      progression: 0,
      loading: true,
      changePageEvent: new UnityEvent("Control", "SetPage"),
      selectedMenuItem: PortfolioData.projects[0]
    };
  }

  public render() {
    return (
      <div className="Fullscreen">
        <SideBar MenuItem={this.state.selectedMenuItem} />
        <NavBar
          Portfolio={PortfolioData}
          className={this.state.loading ? "" : "NavBarAnimation"}
          onClick={this.onPageChange}
        />
        <Unity
          src="Build/Webgl.json"
          loader="Build/UnityLoader.js"
          onProgress={this.onProgress}
        />
        {this.state.progression < 1.0 && (
          <progress
            value={this.state.progression}
            data-label={`${Math.abs(this.state.progression * 100)}%`}
          />
        )}
      </div>
    );
  }
  
  private onProgress = (progression: number) => {
    if (progression === 1) {
      this.setState({ loading: false });
    }
    this.setState({ progression });
  };

  private onPageChange = (selectedMenuItem: IMenuItem) => {
    this.state.changePageEvent.emit(selectedMenuItem.name);
    this.setState({selectedMenuItem});
  };
}

export default App;
