import React, { useState } from "react";
import styled from "styled-components";

const AccountBookPost = ({ onSaveData, handleCancel }) => {
  const [form, setForm] = useState({
    ocr_img: "",
    inex: "",
    category: "",
    content: "",
    account: "",
    date: "",
    memo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    console.log(form);
    setForm({
      ocr_img: "",
      inex: "",
      category: "",
      content: "",
      account: "",
      date: "",
      memo: "",
    });
  };

  const handleOCRChange = (e) => {
    setForm(e.target.files[0]);
  };

  //이미지 전송
  //   const onSubmit = e => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("img", content);
  //     axios
  //       .post("/upload", formData)
  //       .then(res => {
  //         const { fileName } = res.data;
  //         console.log(fileName);
  //         setUploadedImg({ fileName, filePath: `${BASE_URL}/img/${fileName}` });
  //         alert("The file is successfully uploaded");
  //       })
  //       .catch(err => {
  //         console.error(err);
  //       });
  //   };

  const onCancel = () => {
    handleCancel();
  };

  const SaveAction = () => {
    alert("입력되었습니다!");
  };

  return (
    <Section>
      <div className="container">
        <div className="title">내역 추가</div>
        <form action="/api/v1/posts" className="form" onSubmit={handleSubmit}>
          <div class="formItem">
            <label htmlFor="ocr_img">OCR</label>
            <input
              className="formInput"
              placeholder="캡처화면을 업로드해주세요."
              type="file"
              name="ocr_img"
              value={form.ocr_img}
              onChange={handleOCRChange}
            />
          </div>
          <div class="formItem">
            <label htmlFor="inex">지출/수입</label>
            <input
              className="formInput"
              required
              placeholder="유형을 선택해주세요"
              type="text"
              name="inex"
              value={form.inex}
              onChange={handleChange}
            />
          </div>
          <div class="formItem">
            <label htmlFor="category">카테고리</label>
            <input
              className="formInput"
              required
              placeholder="카테고리를 입력해주세요"
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div class="formItem">
            <label htmlFor="content">소비내역</label>
            <input
              className="formInput"
              required
              placeholder="소비내역을 입력해주세요"
              type="text"
              name="content"
              value={form.content}
              onChange={handleChange}
            />
          </div>
          <div class="formItem">
            <label htmlFor="account">금액</label>
            <input
              className="formInput"
              required
              placeholder="금액을 입력해주세요"
              type="text"
              name="account"
              value={form.account}
              onChange={handleChange}
            />
          </div>
          <div class="formItem">
            <label htmlFor="date">날짜</label>
            <input
              className="formInput"
              required
              placeholder="날짜를 입력해주세요"
              type="text"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div class="formItem">
            <label htmlFor="memo">메모</label>
            <input
              className="formInput"
              required
              placeholder="메모를 입력해주세요"
              type="text"
              name="memo"
              value={form.memo}
              onChange={handleChange}
            />
          </div>
          <div className="BtnContainer">
            <button className="SaveBtn" type="submit" onClick={SaveAction}>
              저장
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

export default AccountBookPost;

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

  .formItem > input[type="text"] {
    font-size: 15px;
    font-weight: 500;
    font-family: "Gowun Batang", serif;
  }

  .formInput {
    width: 100%;
    height: 30px;
    border-radius: 0.25rem;
  }

  .BtnContainer {
    display: flex;
    align-items: center;
  }

  .SaveBtn {
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
