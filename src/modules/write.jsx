import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

//액션 타입 정의하기
const INITIALIZE = "write/INITIALIZE"; //게시글 상태값 초기화
const CHANGE_FIELD = "write/CHANGE_FIELD"; //input의 변화값을 저장
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes("write/WRITE_POST"); //게시글 저장을 위한 액션 타입

//액션 생성 함수 정의하기
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(
  WRITE_POST,
  ({ userId, postType, category, rentalPrice, title, content, date, writer, images }) => ({
    userId,
    postType,
    category,
    rentalPrice,
    title,
    content,
    date,
    writer,
    images,
  }),
);

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.write);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

//초기 상태 정의
const initialState = {
  userId: "",
  postType: "",
  category: "",
  rentalPrice: null,
  title: "",
  content: "",
  date: null,
  writer: "",
  images: null,
  post: null,
  postError: null,
};

//리듀서 함수 만들기
const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;
