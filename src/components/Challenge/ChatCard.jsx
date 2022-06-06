import React from "react";
import styled from "styled-components";

const ChatCard = () => {
  return (
    <>
      <Card>
        <ReceiverName>정인하</ReceiverName>
        <ReceiverCard>소셜가계부</ReceiverCard>
        <ReceiverDate>2020-01-01</ReceiverDate>
      </Card>
      <Card>
        <ReceiverName>정인하</ReceiverName>
        <ReceiverCard>소셜가계부</ReceiverCard>
        <ReceiverDate>2020-01-01</ReceiverDate>
      </Card>
      <Card>
        <SenderCard>김인하</SenderCard>
        <SenderDate>2020-01-02</SenderDate>
      </Card>
      <Card>
        <ReceiverName>정인하</ReceiverName>
        <ReceiverCard>소셜가계부</ReceiverCard>
        <ReceiverDate>2020-01-01</ReceiverDate>
      </Card>
      <Card>
        <SenderCard>김인하</SenderCard>
        <SenderDate>2020-01-02</SenderDate>
      </Card>
      <Card>
        <ReceiverName>정인하</ReceiverName>
        <ReceiverCard>소셜가계부</ReceiverCard>
        <ReceiverDate>2020-01-01</ReceiverDate>
      </Card>
      <Card>
        <SenderCard>김인하</SenderCard>
        <SenderDate>2020-01-02</SenderDate>
      </Card>
      <Card>
        <ReceiverName>정인하</ReceiverName>
        <ReceiverCard>소셜가계부</ReceiverCard>
        <ReceiverDate>2020-01-01</ReceiverDate>
      </Card>
      <Card>
        <SenderCard>김인하</SenderCard>
        <SenderDate>2020-01-02</SenderDate>
      </Card>
      <Card>
        <ReceiverName>정인하</ReceiverName>
        <ReceiverCard>소셜가계부</ReceiverCard>
        <ReceiverDate>2020-01-01</ReceiverDate>
      </Card>
      <Card>
        <SenderCard>김인하</SenderCard>
        <SenderDate>2020-01-02</SenderDate>
      </Card>
    </>
  );
};

export default ChatCard;

const Card = styled.div`
  width: 100%;
`;

const SenderDate = styled.span`
  float: left;
  width: 98.5%;
  text-align: right;
  margin-bottom: 1rem;
  font-size: 15px;
`;

const ReceiverDate = styled.span`
  float: left;
  font-size: 15px;
  width: 100%;
  padding-left: 15px;
  margin-bottom: 1rem;
`;

const ReceiverName = styled.span`
  float: left;
  font-size: 15px;
  width: 100%;
  padding-left: 15px;
`;

const SenderCard = styled.div`
  float: right;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 5px 10px;
  background-color: yellow;
  color: black;
  border-radius: 10px;
`;

const ReceiverCard = styled.div`
  float: left;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 5px 10px;
  background-color: white;
  border-radius: 10px;
`;
