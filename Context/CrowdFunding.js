import React, { createContext, useState, useEffect } from "react"
import Web3Modal from 'web3modal'
import { ethers } from "ethers"

import { CrowdFundingABI, CrowdFundingAddress } from "./constants"

export const CrowdFundingContext = createContext()

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState("")

    const createCampaign = async (campaign) => {
        const { title, description, amount, deadline } = campaign;
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer = await provider.getSigner();

        const contract = fetchContract(signer);
        console.log(currentAccount);
        
        try {
            console.log(  currentAccount, 
                title,
                description,
                ethers.parseUnits(amount, 18),
                new Date(deadline).getTime());
            
            const transaction = await contract.createCampaign(
                currentAccount, 
                title,
                description,
                ethers.parseUnits(amount, 18),
                new Date(deadline).getTime()
            );
            await transaction.wait();
            console.log("contract call success", transaction);
        } catch (error) {
            console.log("contract call failure", error);
        }
    }

    const getCampaigns = async () => {
        const provider = new ethers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();
        console.log(campaigns);
        

        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.formatEther(campaign.target.toString()),
            deadline: Number(campaign.deadline),
            amountCollected: ethers.formatEther(campaign.amountCollected.toString()),
            pId: i,
        }))
        return parsedCampaigns;
    }

    const getUserCampaigns = async () => {
        const provider = new ethers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const allCampaigns = await contract.getCampaigns();
        console.log(allCampaigns);
        

        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        })
        const currentUser = accounts[0];

        const filteredCampaigns = allCampaigns.filter(
            (campaign) => 
                campaign.owner.toLowerCase() === currentUser.toLowerCase()
        )

        const userData = filteredCampaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.formatEther(campaign.target.toString()),
            deadline: Number(campaign.deadline),
            amountCollected: ethers.formatEther(campaign.amountCollected.toString()),
            pId: i
        }))
        return userData;
    }

    const donate = async (pId, amount) => {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer = await provider.getSigner();
        const contract = fetchContract(signer);

        const campaignData = await contract.donateToCampaign(pId, {
            value: ethers.parseEther(amount)
        })
        await campaignData.wait();
        location.reload();

        return campaignData;
    }

    const getDonations = async (pId) => {
        const provider = new ethers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for (let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.formatEther(donations[1][i].toString())
            })
        }
        return parsedDonations;
    }

    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum)
                return console.log("Install Metamask");
            
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            })
            
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No account found");
            }
        } catch (error) {
            console.log("Something wrong while connecting to wallet");
        }
    }

    useEffect(() => {
        checkIfWalletConnected();
    }, [])
    
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Install Metamask");
            
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            })
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("Error while connecting to wallet");
        }
    }

    return (
        <CrowdFundingContext.Provider 
            value={{
                titleData,
                currentAccount,
                createCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations,
                connectWallet
            }}
        >
            {children}
        </CrowdFundingContext.Provider>
    )
}