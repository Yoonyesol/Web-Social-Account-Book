import React from "react";
import styled from "styled-components";
import { cardStyle } from "../components/CardStyles";

export default function LoginPage() {
  return (
    <>
      <h2>djflafjdl</h2>
      <Section>
        <div class="wrap">
          <div class="login">
            <h2>로그인</h2>
            <div class="login_sns">
              <li>
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            </div>
            <div class="login_id">
              <h4>E-mail</h4>
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div class="login_pw">
              <h4>Password</h4>
              <input type="password" name="" id="" placeholder="Password" />
            </div>
            <div class="login_etc">
              <div class="checkbox">
                <input type="checkbox" name="" id="">
                  {" "}
                  Remember Me?
                </input>
              </div>
              <div class="forgot_pw">
                <a href="">Forgot Password?</a>
              </div>
            </div>
            <div class="submit">
              <input type="submit" value="submit" />
            </div>
            <div className="signup">
              <a href="">회원가입</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
