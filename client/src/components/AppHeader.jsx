import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
function AppHeader() {
  const ContextText = useContext(MessageContext)
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {ContextText.username}</h2>
    </div>
  );
}

export default AppHeader;
