import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import { Avatar, ChangeUsername } from "../..";

const Header = () => {
  const { user, logout } = useMoralis();
  return (
    <div
      style={{ background: "#406882", borderBottom: "4px solid #6998AB" }}
      className="sticky top-0 z-50 p-5 shadow-sm"
    >
      <div className="relative flex justify-between w-full">
        <div className="relative hidden w-24 h-24 mx-auto lg:inline-grid">
          <Image
            objectFit="cover"
            className="w-24 h-24 rounded-full"
            src="/sonjoy.png"
            width={90}
            height={90}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-red-400">
          {/* avatar */}
          <div
            style={{ background: "#406882", border: "4px solid #6998AB" }}
            className="relative w-48 h-48 p-0 mx-auto rounded-full"
          >
            <Avatar logoutOnPress />
          </div>
          {/* welcome message */}
          <h1 className="mt-5 text-3xl">Welcome to the SreeIT Metaverse</h1>
          {/* username */}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
        </div>
        {/* hange username component */}
        <div style={{ position: "absolute", top: "5px", right: "5px" }}>
          <ChangeUsername />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
