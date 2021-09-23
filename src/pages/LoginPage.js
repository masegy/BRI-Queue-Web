import React, { Component } from "react";
import Button from "elements/Button";
import { Link } from "react-router-dom";
import BrandIcon from "parts/IconText";

export default class LoginPage extends Component {
  render() {
    return (
      <section className="auth">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="card card-shadow">
                <div className="card-body border rounded">
                  <div className="text-center pb-4 pt-4">
                    <BrandIcon />
                  </div>
                  <form>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group pb-4">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <Link
                      className="d-flex justify-content-center card pb-3"
                      to="/booking-antrian"
                    >
                      <Button
                        className="rounded"
                        type="btn px-5"
                        hasShadow
                        isPrimary
                      >
                        Login
                      </Button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
