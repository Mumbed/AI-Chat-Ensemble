/**
 * 사이트 엔드포인트에 들어갈 기본 라우팅 컴포넌트.
 */

// 경로 자동 라우팅에 관련된 의존성.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 부분 컴포넌트 의존성.
import { HeaderX } from "./component/Container/XContainer";

// 페이지 의존성.
import Login from "./pages/Login";
import Index from "./pages/Index";
import Register from "./pages/Register";
import ThemeScene from "./pages/question/ThemeScene";
import DetailedScene from "./pages/question/DetailedScene";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderX></HeaderX>
      <div style={{
        position: "absolute",
        marginTop: "60px",
        width: "100%"
      }}>
        <Routes>
          <Route path="/question/:theme" Component={DetailedScene}></Route>
          <Route path="/question" Component={ThemeScene}></Route>

          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="*" Component={Index} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
