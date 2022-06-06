import client from "./client";

//POST 글 저장
export const write = ({ id, title, content, author, modifiedDate }) => {
  const formData = new FormData();

  formData.append("id", Number(id));
  formData.append("title", title);
  formData.append("content", content);
  formData.append("modifiedDate", modifiedDate);
  formData.append("author", author);

  client.post("/api/v1/posts", formData);
};

//GET 전체 게시글 리스트 조회
export const readAllPosts = () => client.get("/api/v1/posts");

//한 개의 게시글에 대한 상세 정보를 불러오는 요청
export const readPostById = (id) => client.get(`/api/v1/posts/${id}`);

//글 수정 api
export const changePost = (id) => client.put(`/api/v1/posts/${id}`);

//글 삭제 api
export const deletePost = (id) => client.delete(`/api/v1/posts/${id}`);
