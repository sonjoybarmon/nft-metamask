import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full !cursor-pointer p-0 hover:opacity-75"
      src={`https://avatars.dicebear.com/api/open-peeps/${
        username || user.get("username")
      }.svg`}
      alt="avatar"
      onClick={() => logoutOnPress && logout()}
      // layout="fill"
      width={190}
      height={190}
    />
  );
};

export default Avatar;
