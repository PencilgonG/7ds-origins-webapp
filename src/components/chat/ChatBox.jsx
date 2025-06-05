import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 bg-white rounded shadow-md w-80 z-50">
      <div className="bg-gray-800 text-white p-2 font-bold">Chat 7DS</div>
      <div className="p-2 h-40 overflow-y-auto text-sm">
        {messages.map((msg, i) => (
          <div key={i} className="text-gray-900 mb-1">👤 {msg}</div>
        ))}
      </div>
      <div className="flex border-t p-2">
        <input
          className="flex-1 p-1 border rounded text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tape ton message"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="ml-2 text-sm bg-blue-600 text-white px-2 py-1 rounded">
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
