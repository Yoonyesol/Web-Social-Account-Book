require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const transactionsRoutes = require("./routes/transactions-routes");
const userRoutes = require("./routes/users-routes");
const communityRoutes = require("./routes/community-routes");
const commentRoutes = require("./routes/comments-routes");
const challengeRoutes = require("./routes/challenge-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

//cors 에러 해결
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/transactions", transactionsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/challenge", challengeRoutes);

// 앞선 라우트에게서 응답을 받지 못했을 경우에만 실행
app.use((req, res, next) => {
  throw new HttpError("라우트를 찾지 못했습니다.", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "정의되지 않은 에러 발생" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //db 연결이 성공할 경우 서버 연결
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
