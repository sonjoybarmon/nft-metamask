import React, { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfmessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  console.log(message);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfmessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <div
      style={{
        width: "50%",
        borderRadius: "5px",
        overflow: "hidden",
        position: "fixed",
        bottom: "50px",
        transform: "translate(40% , 0)",
      }}
      className="fixed flex px-6 py-4 bg-black border-4 border-blue-400 rounded-full shadow-xl bottom-5 2xl:bottom-10 opacity-80 mx-w-2xl"
    >
      <input
        type="text"
        style={{
          padding: "10px",
          border: "none",
          outline: "none",
          color: "#000",
        }}
        className="flex-grow w-full text-black bg-transparent outline-none placeholder:text-gray-500"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        type="submit"
        style={{ padding: "10px", width: "150px" }}
      >
        send
      </button>
    </div>
  );
};

export default SendMessage;
