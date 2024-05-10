import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

const ChatRoom = () => {
    const [user, setUser] = useState(null);
    const [gptInputValue, setGptInputValue] = useState('');
    const [geminiInputValue, setGeminiInputValue] = useState('');
    const [chats, setChats] = useState([]);
    const [chatRooms, setChatRooms] = useState([]);
    const navigate = useNavigate();
    const { chatRoomId } = useParams();

    useEffect(() => {
        fetchUserAndChatRooms();
        fetchChatRooms(); // Fetch chat rooms when the component mounts
        if (chatRoomId) {
            fetchChatHistory(chatRoomId);
        }
    }, [chatRoomId]);

    const fetchUserAndChatRooms = async () => {
        const tokens = localStorage.getItem('tokens');
        if (!tokens) {
            console.error('No tokens found. Redirecting to login.');
            navigate('/login');
            return;
        }
        const accessToken = JSON.parse(tokens).access;
        try {
            const userResponse = await axios.get('http://localhost:8000/get_user_info/', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setUser(userResponse.data);
        } catch (error) {
            console.error('Failed to fetch user information:', error);
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                navigate('/login');
            }
        }
    };

    const fetchChatRooms = async () => {
        const tokens = localStorage.getItem('tokens');
        if (!tokens) {
            console.log('No tokens found. User must log in.');
            navigate('/login'); // Redirect or handle appropriately
            return; // Exit the function if no tokens found
        }
        const accessToken = JSON.parse(tokens).access;
    
        try {
            const response = await axios.get('http://localhost:8000/list_chat_rooms/', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setChatRooms(response.data);
        } catch (error) {
            console.error('Failed to fetch chat rooms:', error);
        }
    };

    const fetchChatHistory = async (roomId) => {
        const accessToken = JSON.parse(localStorage.getItem('tokens')).access;
        try {
            const response = await axios.get(`http://localhost:8000/fetch_chat_history/${roomId}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setChats(response.data);
        } catch (error) {
            console.error('Failed to fetch chat history:', error);
        }
    };

    const handleSendMessage = async (source, inputValue) => {
        if (!inputValue.trim()) return;
        const accessToken = JSON.parse(localStorage.getItem('tokens')).access;
        try {
            const response = await axios.post(`http://localhost:8000/chat/${chatRoomId}/`, {
                question: inputValue,
                source
            }, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setChats([...chats, { question: inputValue, response: response.data.response, source }]);
            source === 'gpt' ? setGptInputValue('') : setGeminiInputValue('');
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '20%', padding: '10px', borderRight: '1px solid #ccc' }}>
    <h3>Chat Rooms</h3>
    {chatRooms.map(room => (
        <div key={room.chat_room_id} onClick={() => navigate(`/chat/${room.chat_room_id}`)} style={{ cursor: 'pointer', padding: '5px' }}>
            {room.chat_room_id} ({room.messages_count})
        </div>
    ))}
</div>
            <div style={{ width: '80%', padding: '10px' }}>
                {user && (
                    <>
                        <div>Email: {user.email}</div>
                        <div>Name: {user.name}</div>
                        <button onClick={() => navigate('/logout')}>Logout</button>
                    </>
                )}
                <Link to="/createRoom">Create new chat room</Link>
                <Link to="/">Back to home</Link>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', paddingTop: '20px', backgroundColor: '#FAFAFA' }}>
                    {chats.map((chat, index) => (
                        <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#FFFFFF', borderRadius: '5px', color: '#000000' }}>
                            <strong>Question ({chat.source.toUpperCase()}):</strong> {chat.question}
                            <div><strong>Response:</strong> {chat.response}</div>
                        </div>
                    ))}
                    <div>
                        <input
                            type="text"
                            value={gptInputValue}
                            onChange={(e) => setGptInputValue(e.target.value)}
                            placeholder="Message to GPT"
                            style={{ width: 'calc(100% - 20px)', padding: '8px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', color: '#000', marginBottom: '10px' }}
                        />
                        <button onClick={() => handleSendMessage('gpt', gptInputValue)}>Send to GPT</button>
                        <input
                            type="text"
                            value={geminiInputValue}
                            onChange={(e) => setGeminiInputValue(e.target.value)}
                            placeholder="Message to Gemini"
                            style={{ width: 'calc(100% - 20px)', padding: '8px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', color: '#000', marginBottom: '10px' }}
                        />
                        <button onClick={() => handleSendMessage('gemini', geminiInputValue)}>Send to Gemini</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
