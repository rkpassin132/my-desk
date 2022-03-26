/** @format */

import React from "react";
import * as ReactRoute from "react-router-dom";
import Route from "./PrivateRoute";

const Login = React.lazy(() => import("../screens/Login"));
const Notes = React.lazy(() => import("../screens/Notes"));
const Todo = React.lazy(() => import("../screens/Todo"));
const Profile = React.lazy(() => import("../screens/Profile"));

export default function Routes() {
  return (
    <React.Suspense fallback="">
      <ReactRoute.Switch>
        <Route component={Login} exact path="/" isAuth />

        <Route component={Notes} exact path="/notes" />
        <Route component={Todo} exact path="/todo" />
        <Route component={Profile} exact path="/profile" />

        {/* <Route component={NotFound} ispublic /> */}
      </ReactRoute.Switch>
    </React.Suspense>
  );
}
