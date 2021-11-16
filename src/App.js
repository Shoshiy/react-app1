import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message.jsx";

function App() {
  const text = "somebody once";
  return <Message text={text} />;
}

export default App;
