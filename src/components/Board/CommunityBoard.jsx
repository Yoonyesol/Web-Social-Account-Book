import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Post from "./Post";
import Modal from "../Modal";

import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import EditPost from "./EditPost";

export default function CommunityBoard() {
  const [board, setBoard] = useState([
    {
      id: 1,
      title: "인하대 종설",
      username: "김인하",
      content: "게시판",
      lastedit: "22.04.20",
    },
  ]);
  // const [currentPage, setCurrentPage] = useState(1); //현재 페이지수
  // const [postsPerPage] = useState(20); //한 페이지당 게시물 수
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(2);

  //페이지 이동
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = board.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //더미 데이터 호출
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setBoard(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSave = (data) => {
    //데이터 수정
    if (data.id) {
      //수정데이터에는 id존재
      setBoard(
        board.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                title: data.title,
                username: data.username,
                content: data.content,
                lastedit: "22.04.20",
              }
            : row,
        ),
      );
    } else {
      //id 존재하지 않을 시, 데이터 추가
      setBoard((item) =>
        item.concat({
          id: nextId.current,
          title: data.title,
          username: data.username,
          content: data.content,
          lastedit: "22.04.20",
        }),
      );
      nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setBoard((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      title: item.title,
      username: item.username,
      content: item.content,
      lastedit: item.lastedit,
    };
    setSelected(selectedData);
  };

  const handleEditSubmit = (item) => {
    handleSave(item);
    setModalOn(false);
  };

  function closeModal() {
    setModalOn(false);
  }

  return (
    <Section>
      <div className="title">
        <h2>커뮤니티</h2>
      </div>
      <div className="board">
        <table className="table">
          <thead>
            <tr>
              <th>Id.</th>
              <th>제목</th>
              <th>작성자</th>
              <th>최종 수정일</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {board.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.username}</td>
                  <td>{item.lastedit}</td>
                  <td>
                    <FaPen onClick={() => handleEdit(item.id)} />
                  </td>
                  <td>
                    <FaTrashAlt onClick={() => handleRemove(item.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Post onSaveData={handleSave} />
        {modalOn && (
          <Modal visible={modalOn} closable={true} maskClosable={true} onClose={closeModal}>
            <EditPost selectedData={selected} handleCancel={closeModal} handleEditSubmit={handleEditSubmit} />
          </Modal>
        )}
      </div>
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

  .board {
    display: flex;
    flex-direction: column;
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
      width: 1rem;
      height: 1rem;
      cursor: pointer;
    }
  }
`;
