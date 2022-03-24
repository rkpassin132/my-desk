/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { AuthService } from "../services/AuthService";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isPublic,
  isAuth,
  ...rest
}) {
  const signed = AuthService.isAuthenticated();
  console.log("signed", signed);
  if(isAuth){
    if(!signed) return <Route {...rest} component={Component} />;
    else return <Redirect to="/my-desk" />;
  }

  if(isPrivate && !isPublic){
    if(signed) return <Route {...rest} component={Component} />;
    else return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  // component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  //   .isRequired,
  component: PropTypes.any.isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isPublic: false,
  isAuth: false
};
