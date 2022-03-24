/** @format */

import React from "react";
import * as ReactRoute from "react-router-dom";
import Route from "./PrivateRoute";

const MyDesk = React.lazy(() => import("../screens/MyDesk"));
const Login = React.lazy(() => import("../screens/Login"));

export default function Routes() {
  return (
    <React.Suspense fallback="">
      <ReactRoute.Switch>
        <Route component={Login} exact path="/" isAuth />

        <Route component={MyDesk} exact path="/my-desk" />

        {/* <Route component={NotFound} ispublic /> */}
      </ReactRoute.Switch>
    </React.Suspense>
  );
}
