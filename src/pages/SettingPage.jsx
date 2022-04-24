import React from "react";
import styled from "styled-components";

import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdPermIdentity } from "react-icons/md";

export default function SettingPage() {
  return (
    // 유저 페이지로 이동, 반응형으로 수정
    <Section>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">내 정보</h1>
          <button className="userInfoEditButton">수정</button>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://cdn.pixabay.com/photo/2022/03/01/09/15/salad-7040875_960_720.jpg"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">김인하</span>
                <span className="uerShowUserTitle">Have a nice day!</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <MdPermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">inha99</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <BsPhone className="userShowIcon" />
                <span className="userShowInfoTitle">010-1234-1234</span>
              </div>
              <div className="userShowInfo">
                <AiOutlineMail className="userShowIcon" />
                <span className="userShowInfoTitle">inha@naver.com</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="hani99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="hani99@naver.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="010-2223-1242"
                  className="userUpdateInput"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  .user {
    flex: 4;
    padding: 0 30px;
  }

  .userTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .userInfoEditButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: rgb(37, 189, 174);
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
  }

  .userContainer {
    display: flex;
    margin-top: 20px;
  }

  .userShow {
    flex: 1;
    padding: 50px;
    margin-left: 10px;
    background-color: white;

    -webkit-box-shadow: 2px 4px 15px -2px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 4px 15px -2px rgba(0, 0, 0, 0.57);
  }

  .userUpdate {
    flex: 2;
    padding: 50px;
    background-color: white;

    -webkit-box-shadow: 2px 4px 15px -2px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 4px 15px -2px rgba(0, 0, 0, 0.57);

    margin-left: 20px;
  }

  .userShowTop {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .userShowImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .userShowTopTitle {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .userShowUsername {
    font-weight: 600;
  }

  .userShowUserTitle {
    font-weight: 300;
  }

  .userShowTitle {
    font-size: 14px;
    font-weight: 600;
    color: rgb(179, 175, 175);
  }

  .userShowInfo {
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: rgb(97, 96, 96);
  }

  .userShowIcon {
    font-size: 16px !important;
  }

  .userShowInfoTitle {
    margin-left: 10px;
  }

  .userUpdateImg {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 15px;
  }

  .userUpdateForm {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-direction: column;
  }

  .userUpdateItem {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .userUpdateItem > label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  .userUpdateInput {
    border: none;
    width: 300px;
    height: 30px;
    border-bottom: 1px solid gray;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;

    .userContainer {
      flex-direction: column;
      margin: 0.5rem 0.5rem;
    }

    .userShow {
      margin-bottom: 2rem;
    }

    .userUpdate {
    }

    .userUpdateInput {
      width: 20vh;
      height: 30px;
    }

    .userUpdateForm {
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
