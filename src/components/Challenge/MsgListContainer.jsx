import React from "react";
import styled from "styled-components";
import MsgCard from "./MsgCard";

const MessageListContainer = () => {
  const dummyData = [
    { nickname: "test-01", createdAt: "2020-01-01", content: "test-01" },
    { nickname: "test-02", createdAt: "2020-01-01", content: "test-02" },
    { nickname: "test-03", createdAt: "2020-01-01", content: "test-03" },
    { nickname: "test-04", createdAt: "2020-01-01", content: "test-04" },
    { nickname: "test-05", createdAt: "2020-01-01", content: "test-05" },
    { nickname: "test-06", createdAt: "2020-01-01", content: "test-06" },
    { nickname: "test-07", createdAt: "2020-01-01", content: "test-07" },
    { nickname: "test-08", createdAt: "2020-01-01", content: "test-08" },
  ];

  return (
    <Section>
      <ListBox>
        {dummyData.map((item, i) => {
          return <MsgCard item={item} i={i} />;
        })}
      </ListBox>
    </Section>
  );
};

export default MessageListContainer;

const Section = styled.section`
  float: left;
  padding-top: 150px;
  width: 30%;
  height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
`;
