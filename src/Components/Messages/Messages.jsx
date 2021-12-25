import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;

const Messages = () => {
  const { user } = useMoralis();
  const endOfmessagesRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 10000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  console.log(data);

  return (
    <div className="pb-5">
      <div style={{ margin: "20px 0" }}>
        <ByMoralis variant="dark" style={{ margin: "0 auto" }} />
      </div>
      <div className="p-4 space-y-5">
        {/* Each Message */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div style={{ margin: "20px 0" }}>
        <SendMessage endOfmessagesRef={endOfmessagesRef} />
      </div>
      <div ref={endOfmessagesRef} className="flex justify-center">
        <p>You're up to date {user.getUsername()}👨‍💻</p>
      </div>
    </div>
  );
};

export default Messages;
