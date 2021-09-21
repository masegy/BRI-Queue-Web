import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Hero from "parts/Hero";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero />
        <Footer />
      </>
    );
  }
}
