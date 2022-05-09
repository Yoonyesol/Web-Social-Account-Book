import React, { useState } from "react";
import styled from "styled-components";

const AccountBookEditPost = ({ selectedData, handleEditCancel, handleEditSubmit }) => {
  const [edited, setEdited] = useState(selectedData);

  const onCancel = () => {
    handleEditCancel();
  };

  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    console.log(edited);
    handleEditSubmit(edited);
  };

  return (
    <Section>
      <div className="container">
        <h3>내역 수정</h3>
        <form action="/api/v1/posts" className="form" onSubmit={onSubmitEdit}>
          <div class="formItem">
            <label htmlFor="ocr">OCR</label>
            <input
              className="formInput"
              type="file"
              name="ocr_img"
              placeholder="캡처화면을 업로드해주세요."
              value={edited.ocr_img}
              onChange={onEditChange}
            />
          </div>
          <div class="formItem">
            <label htmlFor="category">카테고리</label>
            <input className="formInput" type="text" name="category" value={edited.category} onChange={onEditChange} />
          </div>
          <div class="formItem">
            <label htmlFor="content">소비내역</label>
            <input className="formInput" type="text" name="content" value={edited.content} onChange={onEditChange} />
          </div>
          <div class="formItem">
            <label htmlFor="account">금액</label>
            <input className="formInput" type="text" name="account" value={edited.account} onChange={onEditChange} />
          </div>
          <div class="formItem">
            <label htmlFor="date">날짜</label>
            <input className="formInput" type="text" name="date" value={edited.date} onChange={onEditChange} />
          </div>
          <div class="formItem">
            <label htmlFor="memo">메모</label>
            <input className="formInput" type="text" name="memo" value={edited.memo} onChange={onEditChange} />
          </div>
          <div className="BtnContainer">
            <button type="submit" className="EditBtn" onClick={() => alert("수정되었습니다!")}>
              수정
            </button>
            <button className="CancelBtn" onClick={onCancel}>
              취소
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default AccountBookEditPost;

const Section = styled.section`
  .formItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem 0rem 1rem 0rem;
  }

  .formItem > label {
    margin-bottom: 5px;
    font-size: 20px;
    font-family: "Gowun Batang", serif;
  }

  .formItem > input[type="text"],
  .formItem > textarea[type="text"] {
    font-size: 17px;
    font-weight: 500;
    font-family: "Gowun Batang", serif;
  }

  .formInput {
    width: 100%;
    height: 30px;
    border-radius: 0.25rem;
  }

  /* .formArea {
    width: 100%;
    height: 300px;
    border-radius: 0.25rem;
  } */

  /* .BtnContainer {
    display: flex;
    align-items: center;
  } */

  .EditBtn {
    margin-right: 1rem;
    background-color: #5d8de6;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    font-family: "Gowun Batang", serif;
    color: white;
    border-radius: 0.5rem;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  .CancelBtn {
    margin-right: 1rem;
    background-color: #f75c82;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    font-family: "Gowun Batang", serif;
    color: white;
    border-radius: 0.5rem;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;
