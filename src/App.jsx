import AppRouter from "./router/AppRouter";
import ChatBox from "./components/chat/ChatBox";
import "./index.css";

function App() {
  return (
    <div className="font-sans">
      <AppRouter />
      <ChatBox />
    </div>
  );
}

export default App;
