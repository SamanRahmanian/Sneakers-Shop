import React from "react";
import Home from "./pages/Home/Home";
import "./style.css";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./pages/Product/ProductPage";
import LoginPage from "./pages/Login & Register/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/productPage" component={ProductPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
