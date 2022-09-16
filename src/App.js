import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="login" element={<Login />} />
      <Route path="users">
        <Route
          index
          element={
            <RequireAuth>
              {" "}
              <List />
            </RequireAuth>
          }
        />
        <Route
          path=":userId"
          element={
            <RequireAuth>
              {" "}
              <Single />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <New inputs={userInputs} title="Add New User" />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="products">
        <Route
          index
          element={
            <RequireAuth>
              {" "}
              <List />
            </RequireAuth>
          }
        />
        <Route
          path=":productId"
          element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <New inputs={productInputs} title="Add New Product" />
            </RequireAuth>
          }
        />
      </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
