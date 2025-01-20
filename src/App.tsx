import WormholeConnect, {
  WormholeConnectConfig,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

// wormhole connect 1.x
const config: WormholeConnectConfig = {
  network: "Mainnet",
  ui: {
    title: "Token.com",
    defaultInputs: {
      fromChain: "Base",
      toChain: "Solana",
      tokenKey: "TOKEN",
      toTokenKey: "TOKEN",
    },
    showHamburgerMenu: false,
  },
  rpcs: {
    Base: "https://base-rpc.publicnode.com",
    Solana: "https://solana-rpc.publicnode.com",
  },
  chains: ["Base", "Solana"],
  tokens: ["TOKEN"],
  tokensConfig: {
    TOKEN: {
      key: "TOKEN",
      symbol: "TOKEN",
      nativeChain: "Base",
      tokenId: {
        chain: "Base",
        address: "0x49ad42aac28a982fb5ff6a4172ba73f0ccdf73c9",
      },
      coinGeckoId: "token",
      icon: "https://assets.coingecko.com/coins/images/52923/standard/200px_200px_ticker_logo.png",
      decimals: 18,
      displayName: "Token.com",
    },
  },
  wrappedTokens: {
    TOKEN: {
      Solana: "5wE7irWFMrELXhosX3iu2xUA33t9jB18EiYNPT88WVeg",
    },
  },
};

const theme: WormholeConnectTheme = { mode: "dark" };

function App() {
  return (
    <>
      <WormholeConnect config={config} theme={theme} />
    </>
  );
}

export default App;
