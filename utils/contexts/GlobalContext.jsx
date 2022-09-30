import { createContext, useState } from "react";
import nftImage from "../../assets/images/addCollectible.png";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nft, setNft] = useState({
    name: "Space Cadet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit condimentum rhoncus amet enim. Sit.",
    contractAddress: "0xax1e17et872ge1ie97241203712938209djxa",
    tokenId: 16,
    blockchain: "polygon",
    protocol: "ERC-721",
    blockchainInfo: "This NFT was minted on the Polygon Blockchain",
    image: nftImage,
    owner: {
      name: "Samantha",
    },
  });

  return (
    <GlobalContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        nft,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
