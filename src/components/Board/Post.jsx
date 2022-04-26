import React, { useState } from "react";
import styled from "styled-components";

const Post = ({ onSaveData }) => {
  const [form, setForm] = useState({
    title: "",
    username: "",
    content: "",
    editdate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 이동 방지
    onSaveData(form);
    console.log(form);
    setForm({
      title: "",
      username: "",
      content: "",
      editdate: "",
    });
  };

  return (
    <Section>
      <h3>게시글 등록</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="title" className="">
            제목
            <input
              className=""
              required
              placeholder="제목을 입력해주세요."
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="username" className="">
            작성자
            <input
              className=""
              required
              placeholder="작성자"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="content" className="">
            내용
            <input
              className=""
              required
              placeholder="내용을 입력해주세요"
              type="text"
              name="content"
              value={form.content}
              onChange={handleChange}
            />
          </label>
          <div>수정일: 220422</div>
        </div>
        <div className="">
          <button className="newPostBtn" type="submit">
            작성
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Post;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  .form {
    display: flex;
    flex-direction: column;
  }

  .newPostBtn {
    float: right;
    margin-right: 1rem;
    background-color: #5d8de6;
    padding: 0.5rem 2rem 0.5rem 2rem;
    font-size: 1rem;
    font-family: "Gowun Batang", serif;
    color: white;
    border-radius: 0.5rem;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;
