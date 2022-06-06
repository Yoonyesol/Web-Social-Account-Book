import React from "react";
import styled from "styled-components";
import ChatCard from "./ChatCard";
import SendForm from "./SendForm";
import Setgoal from "./SetGoal";

export default function ChattingView() {
  return (
    <>
      <Section>
        <div className="top">
          <h3 id="chattingname">인하대 컴퓨터공학</h3>
          <h5 id="personnel">5</h5>
        </div>
        <Setgoal />
        <div className="contentContainer">
          <ChatCard />
        </div>
        <div className="sendContainer">
          <SendForm />
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  flex: 4;
  background-color: #8eafeb;
  height: 93vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  gap: 2rem;

  .top {
    width: 100%;
    border-radius: 0.4rem 0.4rem 0rem 0rem;
    padding: 1rem 2rem;
    background-color: #6895e9;
    text-align: center;
    h3 {
      margin-bottom: 0.5rem;
    }
  }

  .contentContainer {
    height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
      background-color: #efecf5;
      width: 0.6vw;
    }

    ::-webkit-scrollbar-thumb {
      background: #8b8fc8;
    }
  }

  .sendContainer {
    padding: 1rem;
    width: 100%;
    flex-direction: row;
    input {
      flex: 4;
      border-radius: 0.4rem;
      height: 2.5rem;
      width: 90%;
    }
    button {
      width: 10%;
      height: 40px;
      border-radius: 4px;
      background-color: #4f85e9;
      color: #ffffff;
      outline: none;
      border: none;
      &:hover {
        background-color: #3070e6;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
  }
`;
