import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // appId={process.env.NEXT_PUBLIC_APP_ID}
      // serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId="IBBILVawNBuhXPRgDYefIFYlB8AfMN7TTnWB2O1u"
      serverUrl="https://mdv2vwfqnvvh.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
