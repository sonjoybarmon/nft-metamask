import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import { Avatar } from "../..";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
      style={{
        marginTop: "25px",
        justifyContent: isUserMessage ? "flex-end" : "flex-start",
      }}
    >
      <div
        className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}
        title={message.get("username")}
        style={{
          width: "32px",
          height: "32px",
          order: 9999,
          marginLeft: "8px",
        }}
      >
        <Avatar username={message.get("username")} />
      </div>
      <div
        style={{
          background: isUserMessage ? "#406882" : "#B1D0E0",
          borderBottomRightRadius: isUserMessage ? "none" : "5px",
          borderBottomLeftRadius: isUserMessage ? "none" : "5px",
          padding: "10px 25px",
          borderRadius: "5px",
          marginRight: isUserMessage ? "10px" : "0",
          marginLeft: isUserMessage ? "0px" : "10px",
        }}
        className={`flex space-x-4 p-3 rounded-lg font-semibold ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <h1>{message.get("message")}</h1>
      </div>

      <TimeAgo
        className={`text-[10px] text-gray-400 italic  ${
          isUserMessage && "order-first pr-1"
        }`}
        style={{ order: -9999, paddingRight: "4px", fontSize: "10px" }}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-pink-300" : "text-blue-400"
        }`}
        style={{ position: "absolute", bottom: "-20px", fontSize: "12px" }}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Message;
