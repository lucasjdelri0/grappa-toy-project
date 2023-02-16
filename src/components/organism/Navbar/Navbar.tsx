import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Web3 from "web3";

const ConnectWallet = tw.button`
btn
btn-primary
w-64
rounded-full
`;

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  console.log("walletAddress", walletAddress);

  const connectAccount = async () => {
    const getWalletAddress = async (web3: Web3) => {
      try {
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        console.log(`Your wallet address is: ${address}`);
        setWalletAddress(address);
      } catch (e) {
        console.error(e);
      }
    };

    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      window.ethereum.enable().then(() => {
        getWalletAddress(web3);
      });
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Toy Project</a>
      </div>
      <div className="navbar-end">
        {walletAddress !== "" ? (
          `${walletAddress}`
        ) : (
          <ConnectWallet onClick={connectAccount}>Connect Wallet</ConnectWallet>
        )}
      </div>
    </div>
  );
};

export default Navbar;
