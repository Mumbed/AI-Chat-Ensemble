/**
 * 기본적인 사이트 엔드포인트.
 */

// 리엑트 함수를 사용하기 위한 의존성
import React from "react";
import { createRoot } from "react-dom/client";

// 페이지 아래 스낵바를 구현하기 위한 의존성
import { SnackbarProvider} from "notistack";

// 사이트 레이아웃 및 각 페이지 정보를 자동으로 라우팅 해주는 기본 컴포넌트 의존성
import "./index.css";
import App from "./App";

// 기본적인 컨테이너 생성
const container = document.createElement("div");

// 컨테이너 랜더링
createRoot(container).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);

// 동적으로 페이지 내 컨테이너 요소 추가
document.body.appendChild(container);