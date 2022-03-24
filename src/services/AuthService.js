/** @format */

import { BehaviorSubject } from "rxjs";
import { UserData } from "../config/Constants";

const currentUserSubject = new BehaviorSubject(
  localStorage.getItem("currentUser")
);

export const AuthService = {
  login,
  logout,
  isAuthenticated,
  getUser,
  currentUser: currentUserSubject.asObservable(),
};

function login(token) {
  localStorage.setItem("currentUser", token);
  currentUserSubject.next(token);
  return token;
}

function getUser() {
  return currentUserSubject.value;
}

function isAuthenticated() {
  let token = currentUserSubject.value;
  if (token !== "" && token != null) {
    return true;
  }
  return false;
}

function logout() {
  // remove token from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
  UserData.name = "";
  UserData.email = "";
}
