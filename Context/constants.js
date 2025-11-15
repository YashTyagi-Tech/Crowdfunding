import crowdFunding from './Crowdfunding.json'

const envAddress = process.env.NEXT_PUBLIC_CROWDFUNDING_ADDRESS
const envAbi = process.env.NEXT_PUBLIC_CROWDFUNDING_ABI

export const CrowdFundingAddress = envAddress || "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
export const CrowdFundingABI = envAbi ? JSON.parse(envAbi) : crowdFunding.abi