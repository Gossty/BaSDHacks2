import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { ethers } from "ethers";
import abi from '../utils/ERC20Factory.json';

const Erc20deploy = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentTxn, setCurrentTxn] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokenName, setTokenName] = useState("");
  const [tokenTicker, setTokenTicker] = useState("");
  const [initialSupply, setInitialSupply] = useState(0);
  const contractAddress = "0x7810F66182Be650572EBBbd4b9D0b4C42D20Eb34";
  
  const contractABI = abi.abi;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const deployContract = new ethers.Contract(contractAddress, contractABI, signer);
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const deployNewERC20Token = async (event) => {
    event.preventDefault();
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const deployContract = new ethers.Contract(contractAddress, contractABI, signer);

        /*
        * Execute the actual wave from your smart contract
        */
        setLoading(true);
        const deployTxn = await deployContract.deployNewERC20Token(tokenName, tokenTicker, 18, initialSupply, { gasLimit: 3000000 });
        console.log("Mining...", deployTxn.hash);
        setCurrentTxn(deployTxn.hash);

        await deployTxn.wait();
        console.log("Mined -- ", deployTxn.hash);
        setLoading(false);
        setCurrentTxn("");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  
  return (
    <div className="mainContainer">
      <div className="dataContainer">
        {loading && (
          <div>
            <div className="loadingContainer">
              <ReactLoading type="spinningBubbles" color="#000000" height={32} width={32} />
            </div>
            <div className="loadingContainer">
              <br />
              <p>Etherscan link of txn: https://polygonscan.com/tx/{currentTxn}</p>
            </div>
          </div>
        )}
        {!loading && (
          <form onSubmit={deployNewERC20Token} className="formContainer">
            <label>
              <input
                type="text"
                value={tokenName}
                placeholder="Token Name(City Name)"
                onChange={(e) => setTokenName(e.target.value)}
              />
              <input
                type="text"
                value={tokenTicker}
                placeholder="Token Ticker"
                onChange={(e) => setTokenTicker(e.target.value)}
              />
              <input
                type="number"
                value={initialSupply}
                placeholder="Initial Supply"
                onChange={(e) => setInitialSupply(e.target.value)}
              />
            </label>
            <input type="submit" className="createERC20Buttton" value="Create Token" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Erc20deploy