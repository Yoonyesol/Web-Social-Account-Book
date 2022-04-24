import React from "react";
import styled from "styled-components";
import CommunityBoard from "../components/Board/CommunityBoard";

export default function CommunityPage() {
  const boards = [
    {
      brdno: 1,
      brdwriterid: 1,
      brdtitle: "소셜가계부",
      brddate: new Date(),
      brdhit: "",
    },
  ];

  return (
    <Section>
      <CommunityBoard />
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;
