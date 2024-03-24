import { useLocation } from "react-router-dom";
import { QuestionManagement } from "../../Management";
import { ProtecterX, SpliterX } from "../../component/Container/XContainer";
import { ResponseBox } from "../../component/Container/BoxContainer";

export default function PrintResponse() {
  const { pathname } = useLocation();

  return (
    <ProtecterX query={() => QuestionManagement.chatdata.length != 0} rejectedRedirect={pathname.replaceAll("main", "first")}>
      {QuestionManagement.chatdata.map(data => 
        <SpliterX length="3">
          {data.map(parsing => 
            <ResponseBox aiName={parsing.name}>
              {parsing.response}
            </ResponseBox>
          )}
        </SpliterX>
      )}
    </ProtecterX>
  )
}