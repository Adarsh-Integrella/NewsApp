import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={<News pageSize={20} country="in" category="general" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News pageSize={20} country="in" category="sport" />}
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News pageSize={20} country="in" category="entertainment" />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={<News pageSize={20} country="in" category="science" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News pageSize={20} country="in" category="technology" />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={<News pageSize={20} country="in" category="business" />}
            ></Route>
            <Route
              exact
              path="/general"
              element={<News pageSize={20} country="in" category="general" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
