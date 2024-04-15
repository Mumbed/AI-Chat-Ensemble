// 파라미터 인식 처리를 위한 의존성.
import { useParams } from "react-router-dom"

// 페이지 이동 처리를 의한 위존성.
import { AuthManagement, QuestionManagement } from "../../util/Management";

// 부분 컴포넌트 의존성.
import { useEffect, useState } from "react";
import axios from 'axios';  // Assuming you're using axios for API calls
import { useNavigate } from 'react-router-dom';

export default function Chat() {
  const { chatRoomId } = useParams();  // Assuming the route parameter is named `chatRoomId`
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch chat room details when the component mounts
  useEffect(() => {
    const fetchChatRoomDetails = async () => {
      try {
        // You need to replace the URL with your actual API endpoint
        const response = await axios.get(`http://localhost:8000/chatrooms/${chatRoomId}`);
        setMessages(response.data.messages);  // Assuming the API returns an array of messages
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch chat room details:', error);
        setLoading(false);
      }
    };

    if (AuthManagement.isLogined()) {  // Checking if the user is logged in
      fetchChatRoomDetails();
    } else {
      // Redirect or handle unauthorized access
      window.location.href = '/login';
    }
  }, [chatRoomId]);  // Re-run the effect if `chatRoomId` changes

  if (loading) {
    return <div>Loading...</div>;  // Loading indicator
  }

  // Render the chat interface
  return (
    <div className="chat-container">
      <ChatBox messages={messages} />  // Component that displays chat messages
      <MessageBox onSend={handleSendMessage} />  // Component that lets users send messages
      <ul>테스트 중 입니다.</ul>
    </div>
  );
}

function handleSendMessage(newMessage) {
  // Implement the logic to send a new message to the backend
  console.log('Sending message:', newMessage);
  // Update the chat interface with the new message
  setMessages(prevMessages => [...prevMessages, newMessage]);
}
