import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./home/Home";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import BookList from "./book/BookList";
import './style.css'
import Cart from "./cart/Cart";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/cart/:id">
            <Cart />
          </Route>
          <Route path="/books/:categoryId/:subCategoryId">
            <BookList />
          </Route>
          <Route path="/books/:categoryId">
            <BookList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
