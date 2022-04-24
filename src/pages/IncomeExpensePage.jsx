import React from "react";
import styled from "styled-components";
import { cardStyle } from "../components/CardStyles";

import IncomeExpenseHistory from "../components/IncomeExpenseHistory";

export default function IncomeExpensePage() {
  return (
    <Section>
      <div className="container">
        <div className="grid">
          <div className="row__one">
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
          </div>
          <div className="row__two">
            <IncomeExpenseHistory />
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

  .container {
    margin: 5vw 18vw;
  }
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      height: 50%;
      gap: 1rem;
      .analytic {
        ${cardStyle}
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.5s ease-in-out;
      }
    }
    .row__two {
      display: grid;
      height: 50%;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .container {
      margin: 0;
    }
  }
`;
