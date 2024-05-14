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
        fetchChatRooms();
        if (chatRoomId) {
            fetchChatHistory(chatRoomId);
        }
    }, [chatRoomId]);

    const fetchUserAndChatRooms = async () => {
        const tokens = localStorage.getItem('tokens');
        if (!tokens) {
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
            navigate('/login');
            return;
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
            <div style={{ width: '20%', padding: '10px', borderRight: '1px solid #ccc'}}>
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
                <div className="chat-container" style={{ overflowY: 'auto', maxHeight: '600px', backgroundColor: '#000' }}>
                    {chats.map((chat, index) => (
                        <div key={index} className="message" style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                            <div className="user-message" style={{ backgroundColor: '#007bff', padding: '8px 12px', borderRadius: '4px', maxWidth: '70%', alignSelf: 'flex-end' }}>
                                {chat.question}
                            </div>
                            <div className="ai-message" style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: '4px', maxWidth: '70%', alignSelf: 'flex-start' }}>
                                {chat.response}
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type="text"
                        value={gptInputValue}
                        onChange={(e) => setGptInputValue(e.target.value)}
                        placeholder="Message to GPT"
                        style={{ width: 'calc(100% - 20px)', padding: '8px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px', color: '#000' }}
                        />
                    <button onClick={() => handleSendMessage('gpt', gptInputValue)}>Send to GPT</button>
                    <input
                        type="text"
                        value={geminiInputValue}
                        onChange={(e) => setGeminiInputValue(e.target.value)}
                        placeholder="Message to Gemini"
                        style={{ width: 'calc(100% - 20px)', padding: '8px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px', color: '#000' }}
                        />
                    <button onClick={() => handleSendMessage('gemini', geminiInputValue)}>Send to Gemini</button>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
