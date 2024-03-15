/**
 * 사이트 엔드포인트에 들어갈 기본 라우팅 컴포넌트.
 */

// 경로 자동 라우팅에 관련된 의존성.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 헤더 컴포넌트 의존성.
import Header from "./component/Header";

// 페이지 의존성.
import Login from "./pages/Login";
import Index from "./pages/Index";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="*" Component={Index} />
      </Routes>
    </BrowserRouter>
  );
}
