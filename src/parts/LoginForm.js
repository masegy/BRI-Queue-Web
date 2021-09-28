import React, { useState } from "react";
import Button from "elements/Button";
import { useHistory } from "react-router-dom";
import BrandIcon from "parts/IconText";
import axios from "axios";

export default function LoginForm({ setLogoutUser }) {
  const [hasAcccount, setHasAcccount] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", {
        username,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setUsername("");
        setPassword("");
        setLogoutUser(false);
        history.push("/");
      })
      .catch((error) => setError(error.response.data.message));
  };
  const onRegister = (e) => {
    if (username.length > 0 && password.length > 4) {
      if (password !== confirmPassword) {
        alert("password did not match");
        return;
      }
      e.preventDefault();
      axios
        .post("http://localhost:5000/api/auth/register", {
          username,
          password,
        })
        .then((response) => {
          console.log("response", response);
          localStorage.setItem(
            "login",
            JSON.stringify({
              userLogin: true,
              token: response.data.access_token,
            })
          );
          setError("");
          setUsername("");
          setPassword("");
          setLogoutUser(false);
        })
        .catch((error) => setError(error.response.data.message));
    }
  };

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
                {hasAcccount ? (
                  <>
                    <form onSubmit={onRegister}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group pb-4">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Confrim Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      {/* <Link
                        className=""
                        to="/"
                      > */}
                      <div className="d-flex justify-content-center card pb-3"></div>
                      <Button
                        style={{ cursor: "pointer" }}
                        className="rounded"
                        type="btn px-5"
                        hasShadow
                        isPrimary
                      >
                        Register
                      </Button>
                      {/* </Link> */}
                      <p className="akun">
                        Belum mempunyai akun ?{" "}
                        <span
                          onClick={() => setHasAcccount(!hasAcccount)}
                          style={{ cursor: "pointer" }}
                        >
                          Login
                          {/* <button className="link" component={Link} to="/register">Register</button> */}
                        </span>
                      </p>
                    </form>
                  </>
                ) : (
                  <>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleLogin}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group pb-4">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {/* <Link
                        className="d-flex justify-content-center card pb-3"
                        to="/"
                      > */}
                      <div className="d-flex justify-content-center card pb-3">
                        <Button
                          style={{ cursor: "pointer" }}
                          className="rounded"
                          type="btn px-5"
                          hasShadow
                          isPrimary
                        >
                          Login
                        </Button>
                      </div>
                      {/* </Link> */}
                      <p className="akun">
                        Belum mempunyai akun ?{" "}
                        <span
                          onClick={() => setHasAcccount(!hasAcccount)}
                          style={{ cursor: "pointer" }}
                        >
                          register
                          {/* <button className="link" component={Link} to="/register">Register</button> */}
                        </span>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
