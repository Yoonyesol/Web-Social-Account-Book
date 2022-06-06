import client from "./client";

// /login - post
// /signup - post
// /bank/write - post 가계부 저장
// /bank - get 가계부 전체 조회
// /bank/{id} - get 가계부 특정 조회
// /chl/write - post 챌린지 등록
// /chl/list - get 참여중인 챌린지 list
// /chl/list/{id} - get 챌린지 세부 조회
// /posts - post 글 저장
// /posts/{id} - put 글 수정
// /post/{id} - get 글 조회
// /posts/{id} - delete 글 삭제
// /user/me - get 현재 유저정보 확인
// /search/{id} - get 유저 검색
// /search/{id} - post 유저 친구 추가

export const login = ({ email, password }) =>
  client.post("/auth-service/login", {
    email,
    password,
  });

export const register = ({ email, password, nickname, phoneNumber }) =>
  client.post("/auth-service/register", {
    email,
    password,
    nickname,
    phoneNumber,
  });

export const getUser = (userId) =>
  client.get(`/auth-service/info/${userId}`, {
    headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
    },
  });

export const check = (userId) =>
  client.get(`/auth-service/info/${userId}/check`, {
    headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
    },
  });

export const checkNickname = (nickname) => client.get(`/auth-service/check/nickname/${nickname}`);

export const checkEmail = (email) => client.get(`/auth-service/check/email/${email}`);

export const logout = () => client.post("/auth-service/logout");
