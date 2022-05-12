import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "../shared/App";

ReactDOM.hydrate(
  //@ts-ignore
  <App serverData={window.__INITIAL_DATA__} />,
  document.getElementById("app")
);
