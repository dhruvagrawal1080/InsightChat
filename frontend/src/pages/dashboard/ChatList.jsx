import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { formatTime } from '../../services/formatTime';

const ChatList = () => {  
  // This will be replaced with actual chat data from your backend
  const ChatConversations = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      unread: 2,
    },
    // Add more mock chats as needed
  ];

  return (
    <div className="h-full bg-white border-r relative">
      {/* Search Bar */}
      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-blue-500"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        </div>
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto h-[calc(100%-73px)]">
        {ChatConversations.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b"
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={`https://ui-avatars.com/api/?name=${chat.name}&background=random`}
                alt={chat.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Chat Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{chat.name}</h3>
                <span className="text-xs text-gray-500">
                  {formatTime(chat.timestamp)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList; 