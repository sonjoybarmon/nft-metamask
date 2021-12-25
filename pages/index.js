import Head from "next/head";
import Login from "./Login";
import { useMoralis } from "react-moralis";
import { Header, Messages } from "../src";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-[#1A374D] text-[#B1D0E0]">
      <Head>
        <title>Metaverse Practices</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        <Header />

        <Messages />
      </div>
    </div>
  );
}
