/**
 * 사이트 엔드포인트에 들어갈 기본 라우팅 컴포넌트.
 */

// 경로 자동 라우팅에 관련된 의존성
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 상단 헤더와 관련된 의존성
import Header from "./component/header/Header";

// 각 페이지와 관련된 의존성
import Login from "./pages/Login";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/Login" Component={Login} />
        <Route path="*" Component={Landing} />
      </Routes>
    </BrowserRouter>
  );
}
