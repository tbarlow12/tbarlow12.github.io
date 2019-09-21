import React from "react";
import Terminal from "react-console-emulator";
import { RouteComponentProps, withRouter } from "react-router";
import { StructureService } from "../../../../services/structureService";

export interface MyTerminalProps extends RouteComponentProps {
  open: boolean;
  closeTerminal: () => void;
}

export interface MyTerminalState {
  open: boolean;
}

export default class MyTerminal extends React.Component<MyTerminalProps, MyTerminalState> {

  private structureService: StructureService;

  public constructor(props: MyTerminalProps) {
    super(props);
    this.structureService = new StructureService();
    this.state = {
      open: props.open
    }
  }

  public componentDidUpdate() {
    if (this.props.open !== this.state.open) {
      this.setState({
        open: this.props.open
      })
    }
  }

  commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: this.echo.bind(this)
    },
    ls: {
      description: "View available navigation options",
      usage: "ls",
      fn: this.ls.bind(this)
    },
    cd: {
      description: "Navigate to another page",
      usage: "cd <string>",
      fn: this.cd.bind(this)
    },
    kill: {
      description: "Close terminal",
      usage: "kill",
      fn: this.props.closeTerminal,
    }
  }

  render () {

    const { location } = this.props;
    
    return (
      <div className="app-main-footer">
        {this.props.open && <Terminal
          commands={this.commands}
          welcomeMessage={"Welcome to my website! Run help for available commands"}
          promptLabel={`user@TBarlow:${this.getPath(location.pathname)}`}
          promptLabelStyle={{color: "#66CCCC"}}
          noHistory={true}
        />}
      </div>
    )
  }

  ls() {
    const { pathname } = this.props.location;
    const target = arguments[0];
    return this.structureService.ls(pathname, target);
  }

  echo() {
    return `${Array.from(arguments).join(" ")}`
  }

  cd () {
    const target = arguments[0];
    const location = this.props.location;
    try {
      const path = this.structureService.transformPath(location.pathname, target);
      this.props.history.push(path)
    } catch {
      return `Invalid path: ${location.pathname + target}`
    }
  }

  getPath = (pathname: string) => {
    if (pathname === "/") {
      return "~"
    }
    return `~${pathname}`;
  }
}

export const TerminalWithRouter = withRouter(MyTerminal);