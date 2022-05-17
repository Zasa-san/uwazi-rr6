import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const App = ({serverData} : any) => {
  return (
  <>
    <div className="container">
      <Routes>
        {routes.map((route) => {
          const { path, fetchInitialData, component: C } = route;

          return (
            <Route
              key={path}
              path={path}
              element={
                //@ts-ignore
                <C data={serverData} fetchInitialData={fetchInitialData} />
              }
            />
          );
        })}
      </Routes>
    </div>
  </>
);}
