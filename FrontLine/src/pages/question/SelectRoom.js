// 페이지 이동 처리를 위한 의존성.
import { Link } from "react-router-dom";

// 부분 컴포넌트 의존성.
import { NoticeBox } from "../../component/Container/BoxContainer";
import { ProtecterX } from "../../component/Container/XContainer";
import { AuthManagement } from "../../util/Management";
import { useState } from "react";

/**
 * @description 주제 선택 창
 */
export default function SelectRoom() {
  const [rooms, setRooms] = useState(AuthManagement.rooms)

  return (
    <ProtecterX query={() => AuthManagement.isLogined} rejectedRedirect="/login">
      <NoticeBox img="/img/question.png" title="방 선택">
        먼저 입장하고자 하는 채팅방을 선택해주세요.
      </NoticeBox>
      {rooms ? rooms.map(room => <Link to={`${room}/first`}>{room}</Link>) : ""}
      <input type="button" onClick={async () => setRooms(await AuthManagement.makeRoom())}></input>
    </ProtecterX>
  )
}