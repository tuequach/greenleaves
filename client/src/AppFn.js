import React from "react";
import AddProductFn from "./components/Form/AddProductFn";

import { BrowserRouter as Router, Route } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav />
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/addProduct/" component={AddProductFn} />
      </div>
    </Router>
  );
}

export default AppRouter;
