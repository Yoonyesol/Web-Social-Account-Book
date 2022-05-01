import React from "react";
import styled from "styled-components";
import { cardStylePink } from "../CardStyles";

export default function AccountBookAnalytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>예산</h5>
          <h2>300,000원</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>수입</h5>
          <h2>190,000</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>지출</h5>
          <h2>30,000원</h2>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  justify-content: space-between;
  .analytic {
    ${cardStylePink}
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s ease-in-out;
    margin-bottom: 1rem;
  }
`;
