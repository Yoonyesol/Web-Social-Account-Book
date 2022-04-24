import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BiBlock } from "react-icons/bi";

export default function FriendsTable() {
  const [friends, setFriends] = useState([]);

  const nextId = useRef(11);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    setFriends((friends) => friends.filter((item) => item.id !== id));
  };

  return (
    <Section>
      <div className="title">
        <h2>친구 목록</h2>
      </div>
      <table className="table">
        <thead>
          <tr className="th">
            <th>Id.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Website</th>
            <th>Block</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>
                    <BiBlock onClick={() => handleRemove(item.id)} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </Section>
  );
}

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;

    h2 {
      color: #3c76e0;
      font-family: "Gowun Batang", serif;
      letter-spacing: 0.3rem;
    }
  }
  .table {
    border-collapse: collapse;
    text-align: center;
    line-height: 1.5;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 20px 10px;
    th {
      width: 150px;
      padding: 10px;
      font-weight: bold;
      vertical-align: top;
      border-bottom: 1px solid #ccc;
      background: #efefef;
    }
    td {
      width: 350px;
      padding: 10px;
      vertical-align: top;
      border-bottom: 1px solid #ccc;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: red;
    }
  }
`;
