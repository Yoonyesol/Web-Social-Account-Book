import client from "./client";

//POST 글 저장
export const write = ({ userId, postType, category, title, content, rentalPrice, date, writer, images }) => {
  if (postType === "빌려주세요") {
    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("postType", postType);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("writer", writer);

    client.post("/post-service/write", formData);
  } else {
    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("category", category);
    formData.append("images", images);
    formData.append("postType", postType);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("rentalPrice", Number(rentalPrice));
    formData.append("date", date);
    formData.append("writer", writer);
    images.forEach((image) => formData.append("images", image));

    client.post("/post-service/write", formData);
  }
};

//GET 전체 게시글 리스트 가져오기
export const readAllPosts = () => client.get("/post-service/");

export const readPostsByStatus = (status) => client.get(`/post-service/posts/status/${status}`);

//한 개의 게시글에 대한 상세 정보를 불러오는 요청
export const readPostById = (id) => client.get(`/post-service/post/${id}`);

//유저가 작성한 게시글을 불러오는 요청
export const readPostsByUserId = (userId) => client.get(`/post-service/${userId}/posts`);

//카테고리별로 데이터를 볼 수 있게 게시글을 불러오는 요청
export const readPostsByCategory = (category) => client.get(`/post-service/category/${category}`);

export const readPostsByKeyword = (keyword) => client.get(`/post-service/keyword/${keyword}`);

export const deletePost = (id) => client.post(`/post-service/${id}/delete`);

export const writeComment = ({ postId, writer, comment }) =>
  client.post(`/post-service/comments`, {
    postId,
    writer,
    comment,
  });

export const deleteComment = (id) => client.delete(`/post-service/${id}/comments`);

export const createRental = ({ postId, owner, borrower, price, startDate, endDate }) =>
  client.post("/post-service/rental", {
    postId,
    owner,
    borrower,
    price,
    startDate,
    endDate,
  });

export const rollbackStatus = (postId) => client.post(`/post-service/rollback/${postId}`);
