import React from "react";
import styled from "styled-components";

const SendForm = () => {
  return (
    <SendContainer>
      <input placeholder="메시지를 입력하세요" />
      <button>전송</button>
    </SendContainer>
  );
};

export default SendForm;

const SendContainer = styled.div``;
