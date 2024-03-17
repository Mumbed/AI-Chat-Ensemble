import React from "react"

/**
 * @description 응답 필드 컴포넌트.
 * @type {(props: {aiName: string, mainTitle: string, children: string | React.ReactElement}) => React.ReactElement}
 */
function ResponseBox({aiName, mainTitle, children}) {
  // 컴포넌트 처리
  const aiTag = {
    Chat_GPT: {
      img: "https://chat.openai.com/",
      tech: "GPT 3.5"
    },
    Gemini: {
      img: "https://gemini.google.com/",
      tech: "울트라 1.0"
    },
    Copliot: {
      img: "https://copilot.microsoft.com/",
      tech: ""
    }
  }

  // 컴포넌트 반환
  return (
    <fieldset style={{
      minHeight: "720px",
      background: "rgba(150, 150, 150, 0.1)"
    }}>
      <div className="response_title">
        <img src={`https://www.google.com/s2/favicons?domain=${aiTag[aiName].img}`}></img>
        <div>
          <h5 style={{
            fontSize: "16px",
          }}>{aiName}</h5>
          <p style={{
            fontSize: "12px",
            color: "darkgray",
          }}>@{aiTag[aiName].tech}</p>  
        </div>
      </div>
      <h3 style={{
        textAlign: "start"
      }}>{mainTitle}</h3>
      <pre>{children}</pre>
    </fieldset>
  )
}

export { ResponseBox }