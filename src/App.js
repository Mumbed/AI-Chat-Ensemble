/**
 * 사이트 엔드포인트에 들어갈 기본 라우팅 컴포넌트.
 */

// 경로 자동 라우팅에 관련된 의존성
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 각 페이지와 관련된 의존성
import Landing from "./pages/Landing";
import Header from "./component/main/Header";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="*" Component={Landing} />
      </Routes>
    </BrowserRouter>
  );
}
