import * as React from "react";

export const Library = ({ serverData }: { serverData: any }) => (
  <pre>{JSON.stringify(serverData, null, 2)}</pre>
);
