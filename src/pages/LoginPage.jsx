import React, { useState } from "react";
import styled from "styled-components";
import { cardStyle } from "../components/common/CardStyles";
import NaverLogin from "react-naver-login";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const _clickSnsLoginNaver = (e) => {
    let naverid = e.id; // 네이버에서 제공한 ID
  };

  return (
    <Section>
      <div className="container">
        <div className="title">
          <h2>로그인</h2>
        </div>
        <NaverLogin
          clientId={"iL_HNtxzFEwriVAcSsFc"}
          callbackUrl="http://localhost:8080"
          render={(renderProps) => (
            <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <img className="login_btn" src="img/NaverIcon/btnG_complete.png" />
            </div>
          )}
          onSuccess={(e) => _clickSnsLoginNaver(e)}
          onFailure={(result) => console.error(result)}
        />
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

  .container {
    ${cardStyle}
    margin: 35vh 18vw;
  }
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;

    h2 {
      color: #3c76e0;
      font-family: "Gowun Batang", serif;
      letter-spacing: 0.3rem;
    }
  }
  .login_btn {
    max-width: 10vw;
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
