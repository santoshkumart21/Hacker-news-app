import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./common/Headers";
import ShowStories from "./pages/Stories";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              return !["top", "new", "best"].includes(type) ? (
                <Redirect to="/" />
              ) : (
                <ShowStories type={type} />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
