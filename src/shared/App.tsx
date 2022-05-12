import * as React from "react";

export const App = ({ serverData }: { serverData: any }) => {
  return <pre>{JSON.stringify(serverData, null, 2)}</pre>;
};
