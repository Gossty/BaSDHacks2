import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { ethers } from "ethers";
import './App.css';
import abi from './utilities/WavePortal.json';

const Erc20deploy = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentTxn, setCurrentTxn] = useState("");
  const [loading, setLoading] = useState(false);
  const contractAddress = "0xC73c64968Eaeada140c2668dC53667a632105690";
  
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
        const deployTxn = await deployContract.deployNewERC20Token("GOTHAM TOKEN", "GOTHAMTOKEN", 18, 20000000, { gasLimit: 300000 });
        console.log("Mining...", waveTxn.hash);
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
        <div className="header">
        👋 Hey there!
        </div>

        {loading && (
          <div>
            <div className="loadingContainer">
              <ReactLoading type="spinningBubbles" color="#000000" height={32} width={32} />
            </div>
            <div className="loadingContainer">
              <br />
              <p>Etherscan link of txn: https://https://polygonscan.com/tx/{currentTxn}</p>
            </div>
          </div>
        )}
        {!loading && (
          <form onSubmit={wave} className="formContainer">
            <label>
              <input
                type="text"
                value={waveTxt}
                placeholder="Enter Message"
                onChange={(e) => setWaveTxt(e.target.value)}
              />
            </label>
            <input type="submit" className="waveButton" value="Wave" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Erc20deploy