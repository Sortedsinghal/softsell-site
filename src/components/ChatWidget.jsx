import React, { useState } from 'react';
import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    let reply = "I'm just a mock bot, but here's a helpful reply!";

    if (input.toLowerCase().includes('sell')) {
      reply = 'You can sell your license by filling the form at the bottom!';
    }

    setMessages([...newMessages, { from: 'bot', text: reply }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="bg-white rounded-xl shadow-lg w-80 border p-4">
          <div className="text-lg font-semibold mb-2">SoftSell Chat</div>
          <div className="h-40 overflow-y-auto mb-2 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`px-2 py-1 rounded-lg inline-block ${msg.from === 'user' ? 'bg-blue-200' : 'bg-gray-100'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              className="flex-grow border rounded-l-lg px-2 py-1 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 py-1 rounded-r-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <MessageCircle />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
