import React from "react";
import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ChattingSidebar() {
  const html = document.querySelector("html");
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <span>채팅목록</span>
          </div>
          <div className="toggle"></div>
          <div className="links"></div>
          <ul>
            <li>
              <Link to="/">
                <span> 대시보드</span>
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  flex: 1;
  margin-right: 2rem;
  background-color: #efecf5;
  height: 93vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  padding: 2rem 1rem;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      span {
        font-size: 2rem;
        color: #3c76e0;
        font-family: "Gowun Batang", serif;
      }
      &:hover {
        cursor: pointer;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          border-bottom: 0.01rem solid #6c6e6e;
          &:hover {
            background-color: #6369bd;
            a {
              color: white;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #6369bd;
          a {
            color: white;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-bottom: 2rem;
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: black;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links {
      display: none;
    }
  }
`;
