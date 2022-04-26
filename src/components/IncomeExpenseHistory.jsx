import React, { useState, useRef } from "react";
import styled from "styled-components";
import { cardStyle } from "./CardStyles";

import { FaPen } from "react-icons/fa";
import Modal from "./Modal";
import InexPost from "./IncomeExpensePost";

export default function IncomeExpenseHistory() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      date: "01.30",
      category: "교통/차량",
      content: "버스비",
      account: "-4,000",
      inex: "지출",
      memo: "버스비",
    },
    {
      id: 2,
      date: "01.31",
      category: "식비",
      content: "외식비",
      account: "12,000",
      inex: "지출",
      memo: "외식",
    },
  ]);
  const nextId = useRef(3);

  const handleSave = (data) => {
    if (data.id) {
      setData(
        data.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                date: data.date,
                category: data.category,
                content: data.content,
                account: data.account,
                inex: "지출",
                memo: "dk",
              }
            : row,
        ),
      );
    } else {
      setData((info) =>
        info.concat({
          id: data.id,
          date: data.date,
          category: data.category,
          content: data.content,
          account: data.account,
          inex: "지출",
          memo: "dk",
        }),
      );
      nextId.current += 1;
    }
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Section>
      <div className="title">
        <h2>입출금 내역</h2>
        <FaPen onClick={openModal} />
        {modalIsOpen && (
          <Modal visible={modalIsOpen} closable={true} maskClosable={true} onClose={closeModal}>
            <InexPost onSaveData={handleSave} closeModal={closeModal} />
          </Modal>
        )}
      </div>
      <div className="historyContainer">
        {data.map((data, index) => {
          return (
            <div className="history" key={index}>
              <div className="infoTable">
                <table class="table">
                  <tbody>
                    <tr>
                      <td id="date">{data.date}</td>
                      <td id="category">{data.category}</td>
                      <td id="inex">{data.inex}</td>
                      <td id="content">{data.content}</td>
                      <td id="account">{data.account}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle}
  .title {
    display: flex;
    justify-content: space-between;
    svg {
      cursor: pointer;
    }
    h2 {
      color: #3c76e0;
      font-family: "Gowun Batang", serif;
      letter-spacing: 0.3rem;
    }
  }

  .ex {
    color: ${(props) => props.color};
  }

  .historyContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    .history {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .infoTable {
        display: flex;
        justify-content: space-evenly;
        gap: 2rem;
        align-items: center;
        .table {
          text-align: center;
          line-height: 1.5;
          td {
            width: 20vh;
            vertical-align: center;
          }
        }
      }
      &:nth-of-type(2),
      &:nth-of-type(4),
      &:nth-of-type(6),
      &:nth-of-type(8),
      &:nth-of-type(10) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .info {
      gap: 0rem;
    }
  }
`;
