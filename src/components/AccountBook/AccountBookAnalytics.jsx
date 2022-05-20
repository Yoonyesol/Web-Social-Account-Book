import React, { useState } from "react";
import styled from "styled-components";
import { cardStylePink } from "../common/CardStyles";

export default function AccountBookAnalytics() {
  const [result, setResult] = useState(300000);
  const [income, setIncome] = useState(190000);
  const [expense, setExpense] = useState(30000);

  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>예산</h5>
          <h2>{result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>수입</h5>
          <h2>{income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>지출</h5>
          <h2>{expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h2>
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
