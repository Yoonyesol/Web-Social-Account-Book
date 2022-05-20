import React, { useState } from "react";
import styled from "styled-components";

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from "../login/constants";
import { login } from "../login/util/APIUtils";
import { Link, Redirect } from "react-router-dom";
import fbLogo from "../../public/img/fa-logo.png";
import googleLogo from "../../public/img/google-logo.png";
import githubLogo from "../../public/img/github-logo.png";
import Alert from "react-s-alert";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const _clickSnsLoginNaver = (e) => {
    let naverid = e.id; // 네이버에서 제공한 ID
  };

  const componentDidMount = (props) => {
    // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
    // Here we display the error and then remove the error query parameter from the location.
    if (props.location.state && props.location.state.error) {
      setTimeout(() => {
        Alert.error(props.location.state.error, {
          timeout: 5000,
        });
        props.history.replace({
          pathname: props.location.pathname,
          state: {},
        });
      }, 100);
    }
  };

  if (authenticated) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: props.location },
        }}
      />
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preDefault();

    const loginRequest = Object.assign({}, this.state);

    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        Alert.success("You're successfully logged in!");
        this.props.history.push("/");
      })
      .catch((error) => {
        Alert.error((error && error.message) || "Oops! Something went wrong. Please try again!");
      });
  };

  return (
    <Section>
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Login to SpringSocial</h1>
          <div className="social-login">
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
              <img src={googleLogo} alt="Google" /> Log in with Google
            </a>
            <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
              <img src={fbLogo} alt="Facebook" /> Log in with Facebook
            </a>
            <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
              <img src={githubLogo} alt="Github" /> Log in with Github
            </a>
          </div>
          <div className="or-separator">
            <span className="or-text">OR</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={form.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-item">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={form.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-item">
              <button type="submit" className="btn btn-block btn-primary">
                Login
              </button>
            </div>
          </form>
          <span className="signup-link">
            New user? <Link to="/signup">Sign up!</Link>
          </span>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; //수직
  justify-content: center; //수평

  //새로운 로그인 페이지
  .login-container {
    text-align: center;
  }

  .login-content {
    background: #fff;
    box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
    border-radius: 2px;
    width: 500px;
    display: inline-block;
    margin-top: 30px;
    vertical-align: middle;
    position: relative;
    padding: 35px;
  }

  .social-btn {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 16px;
  }

  .social-btn img {
    height: 32px;
    float: left;
    margin-top: 10px;
  }

  .social-btn.google {
    margin-top: 7px;
  }

  .social-btn.facebook img {
    height: 24px;
    margin-left: 3px;
  }

  .social-btn.github img {
    height: 24px;
    margin-left: 3px;
  }

  .signup-link {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }

  .login-title {
    font-size: 1.5em;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.65);
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    //모바일 사이즈
    margin-left: 0;
    .container {
      margin: 25vh 18vw;
    }
    .login_btn {
      max-width: 50vw;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    //태블릿 사이즈
    margin-left: 0;
    .container {
      margin: 25vh 18vw;
    }
    .login_btn {
      max-width: 30vw;
    }
  }
`;
