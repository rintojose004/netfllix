import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main";
import LandingHeader from "./LandingHeader/LandingHeader";
import Landingmain from "./LandingMain/LandingMain";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <LandingHeader />
              <Landingmain />
            </Fragment>
          }
        />
        <Route
          path="/login"
          element={
            <Fragment>
              <Login />
            </Fragment>
          }
        />
        <Route
          path="/signup"
          element={
            <Fragment>
              <Signup />
            </Fragment>
          }
        />
        <Route
          path="/main"
          element={
            <Fragment>
              <Main />
            </Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default MainRoutes;
