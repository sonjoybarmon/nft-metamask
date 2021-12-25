import React from "react";
import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(`Enter your new username: ${user.getUsername()}`);
    if (!username) return;
    setUserData({ username });
  };
  return (
    <button
      disabled={isUserUpdating}
      onClick={setUsername}
      className="!hover:text-[#406882] text-sm"
    >
      Change Username
    </button>
  );
};

export default ChangeUsername;
