import React from "react";
import styled from "styled-components";
import ChattingSidebar from "./ChattingSidebar";
import ChattingView from "./ChattingView";
export default function ChattingMain() {
  return (
    <Section>
      <ChattingSidebar />
      <ChattingView />
    </Section>
  );
}

const Section = styled.section`
  display: flex;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
