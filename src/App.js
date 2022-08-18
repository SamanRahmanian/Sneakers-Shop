import React from "react";
import Home from "./pages/Home/Home";
import "./style.css";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./pages/Product/ProductPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/productPage" component={ProductPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
