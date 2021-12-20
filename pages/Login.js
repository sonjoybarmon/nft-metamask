import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div className="relative bg-black ">
      <div className="absolute z-50 flex flex-col items-center justify-center w-full space-y-4 h-4/6">
        {/* website logo here */}
        <Image
          src="/logo.png"
          height="200"
          width="200"
          className="object-cover rounded-full "
        />
        <button
          onClick={authenticate}
          className="font-bold text-white rounded-lg bg-[#39505B] p-5 animate-pulse "
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="/psdToReact.png"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
