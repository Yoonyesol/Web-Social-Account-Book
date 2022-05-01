import React from "react";
import styled from "styled-components";
import { chatBubble } from "./ChatBubble";

export default function ChattingView() {
  const html = document.querySelector("html");
  return (
    <>
      <Section>
        <div className="top">
          <h3 id="chattingname">인하대 컴퓨터공학</h3>
          <h5 id="personnel">5</h5>
        </div>
        <div className="contentContainer">
          <div className="sendMsg">말풍선</div>
          <input placeholder="메시지를 입력하세요" />
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
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  gap: 2rem;
  ${chatBubble}

  .top {
    width: 100%;
    border-radius: 0.4rem 0.4rem 0rem 0rem;
    padding: 1rem 2rem;
    background-color: #d9b6ee;
    text-align: center;
    h3 {
      margin-bottom: 0.5rem;
    }
  }

  .contentContainer {
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
  }
`;
