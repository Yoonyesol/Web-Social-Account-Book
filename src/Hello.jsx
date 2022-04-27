import axios from "axios";
import React, { useState, useEffect } from "react";

function Hello() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/hello")
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>{message} 는 스프링의 메시지</div>;
}

export default Hello;
