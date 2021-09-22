import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import BookingPage from "pages/BookingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/booking-antrian" component={BookingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
