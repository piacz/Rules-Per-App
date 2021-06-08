import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Home,  ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./css/app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id='app' >
      <NavBar />
      <div className="container flex-grow-1" id='app'>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
