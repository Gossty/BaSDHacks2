import React, { useEffect, useState } from "react";

function ConnectButton() {
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have metamask!");
        return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });

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

    /**
     * Implement your connectWallet method here
     */
    const connectWallet = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
        } catch (error) {
        console.log(error)
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    return (
        <div display="flex" alignItems="center" borderRadius="xl" py="0">
            {!currentAccount && (
                <button onClick={connectWallet}>
                    Connect Wallet
                </button>
            )}
            {currentAccount && (
                <button
                    bg="gray.800"
                    border="1px solid transparent"
                    _hover={{
                        border: "1px",
                        borderStyle: "solid",
                        borderColor: "blue.400",
                        backgroundColor: "gray.700",
                    }}
                    borderRadius="xl"
                    m="1px"
                    px={3}
                    height="38px"
                >
                    <p color="white" fontSize="md" fontWeight="medium" mr="2">
                        {currentAccount &&
                            `${currentAccount.slice(0, 6)}...${currentAccount.slice(
                            currentAccount.length - 4,
                            currentAccount.length
                        )}`}
                    </Text>
                </Button>
            )}
        </Box>
    );
}

export default ConnectButton;