import React from 'react';
import { useSelector } from 'react-redux';

const ChatView = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=random"
            alt="John Doe"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Mock messages - replace with actual messages */}
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-2">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=random"
              alt="John Doe"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-white p-3 rounded-lg rounded-bl-none max-w-[70%] shadow-sm">
              <p>Hey, how are you?</p>
              <span className="text-xs text-gray-500 mt-1">12:30 PM</span>
            </div>
          </div>

          <div className="flex items-end gap-2 flex-row-reverse">
            <img
              src={user?.image || `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=random`}
              alt={user?.firstName}
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-blue-500 text-white p-3 rounded-lg rounded-br-none max-w-[70%] shadow-sm">
              <p>I'm good, thanks! How about you?</p>
              <span className="text-xs text-white/80 mt-1">12:31 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView; 