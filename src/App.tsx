import { AuthProvider } from "@asgardeo/auth-react";
import { SecureRoute } from "@asgardeo/auth-react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { default as authConfig } from "./config.json";

import './App.css';

function App() {
  return (
    <AuthProvider config={authConfig}>
      <AppRouter />
    </AuthProvider>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <SecureRoute
                    path="/sample"
                    component={ LandingPage } 
                    callback={ HomePage}
                />    
      </Switch>
    </BrowserRouter>
  );
}
export default App;
