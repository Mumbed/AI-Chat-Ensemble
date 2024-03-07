import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("없음");

  const clicked = () => {
    axios
      .get("http://127.0.0.1:8000/test", {
        params: {
          abc: "가나다", //abc에 가나다 저장
        },
      })
      .then((response) => setText(JSON.stringify(response.data)));
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={clicked}>클릭</button>
    </div>
  );
}

export default App;

//해당 url로 접속하면 장고에서는 함수 실행 