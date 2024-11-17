import React, { useState } from "react";
import UserChatWidget from "./UserChatWidget"; // Đảm bảo bạn đã tạo component UserChatWidget

function ChatButton({ cls }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`chat-button-wrapper ${cls || ""}`}>
      <button
        id="chat_button"
        type="button"
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 11H13V13H11V11ZM11 7H13V9H11V7Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {isOpen && <UserChatWidget />}
    </div>
  );
}

export default ChatButton;
