import React from "react";
import styled from "styled-components";

const LoadingIndicator = (props) => {
  return (
    <Indicator>
      <div className="lds-dual-ring"></div>
    </Indicator>
  );
};

export default LoadingIndicator;

const Indicator = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #510077;
    border-color: #510077 transparent #510077 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
