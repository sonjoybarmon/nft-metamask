import Head from "next/head";
import Login from "./Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Practices</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main>
        <h1>welcome to hame page</h1>
      </main>
    </div>
  );
}
