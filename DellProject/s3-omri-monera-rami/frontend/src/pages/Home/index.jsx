import React, { Fragment } from "react";
import NavBar from "../../components/NavBar";
import { Route, Switch } from "react-router-dom";
import Overview from "../../components/Overview";
import Analytics from "../../components/Analytics";
import "./style.css";

export default function Home(params) {
  return (
    <Fragment>
      <NavBar />
      <div className="home-content">
        <Switch>
          <Route path="/home/overview" component={Overview} />
          <Route path="/home/analytics" component={Analytics}></Route>
        </Switch>
      </div>
    </Fragment>
  );
}
