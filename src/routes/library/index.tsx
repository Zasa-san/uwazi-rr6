import * as React from "react";

export const Library = (data: any) =>
(
  <div>{JSON.stringify(data.data[0])}</div>
);
