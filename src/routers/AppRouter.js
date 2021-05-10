import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/blog" />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
};
