import React, { useState } from "react";

const EditPost = ({ selectedData, handleCancel, handleEditSubmit }) => {
  //상위 컴포넌트에서 가져온 데이터 set
  const [edited, setEdited] = useState(selectedData);

  const onCancel = () => {
    handleCancel();
  };

  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <h3 className="">글 수정하기</h3>
          <i className="" onClick={onCancel}></i>
        </div>
        <form onSubmit={onSubmitEdit}>
          <div class="">
            <div>
              작성자: <input className="" type="text" name="username" value={edited.username} onChange={onEditChange} />
            </div>
            <div>
              제목: <input className="" type="text" name="title" value={edited.title} onChange={onEditChange} />
            </div>
            <div>
              내용: <input className="" type="text" name="content" value={edited.content} onChange={onEditChange} />
            </div>
            <div>
              최종 수정일:
              <input className="" type="text" name="lastedit" value={edited.lastedit} onChange={onEditChange} />
            </div>
          </div>
          <div className="">
            <button className="" onClick={onCancel}>
              취소
            </button>
            <button type="submit" className="">
              수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
