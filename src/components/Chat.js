// Chat.js

import React, { useState } from 'react';
import userIcon from '../img/user-icon.png';

const Chat = ({ recipientName, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() === '') return;
    const newMessage = {
      text: message,
      sender: 'user', // Assuming user is sending messages
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-center p-3 border-b border-gray-300">
        <img src={userIcon} alt="User" className="h-8 w-8 rounded-full mr-2" />
        <h3 className="font-semibold">{recipientName}</h3>
        <button onClick={onClose} className="ml-auto text-gray-500">
          X
        </button>
      </div>
      <div className="p-3 max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="bg-gray-200 py-1 px-2 rounded-lg inline-block">
              {msg.text}
            </span>
            <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-300">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
          placeholder="Type a message..."
          value={message}
          onChange={handleMessageChange}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="bg-pinkone my-4 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
