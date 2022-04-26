import React, { useState } from "react";
import styled from "styled-components";

const InexPost = ({ onSaveData, closeModal }) => {
  const [form, setForm] = useState({
    ocr_img: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    console.log(form);
    setForm({
      ocr_img: "",
      category: "",
      content: "",
      account: "",
      date: "",
      memo: "",
    });
  };

  return (
    <Section>
      <div className="title">내역 추가</div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="ocr_img" className="">
          OCR
          <input
            className=""
            placeholder="캡처화면을 업로드해주세요."
            type="file"
            name="ocr_img"
            value={form.ocr_img}
            onChange={handleOCRChange}
          />
        </label>
        <label htmlFor="category" className="">
          Category
          <input
            className=""
            required
            placeholder="카테고리를 입력해주세요"
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="content" className="">
          Content
          <input
            className=""
            required
            placeholder="소비내역을 입력해주세요"
            type="text"
            name="content"
            value={form.content}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="account" className="">
          Account
          <input
            className=""
            required
            placeholder="금액을 입력해주세요"
            type="text"
            name="account"
            value={form.account}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="date" className="">
          Date
          <input
            className=""
            required
            placeholder="날짜를 입력해주세요"
            type="text"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="memo" className="">
          Momo
          <input
            className=""
            required
            placeholder="메모를 입력해주세요"
            type="text"
            name="memo"
            value={form.memo}
            onChange={handleChange}
          />
        </label>
        <div className="">
          <button className="" type="submit" onClick={() => closeModal}>
            저장
          </button>
        </div>
      </form>
    </Section>
  );
};

export default InexPost;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  .form {
    display: flex;
    flex-direction: column;
  }
`;
