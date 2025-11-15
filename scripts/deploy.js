const hre = require("hardhat")
// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
async function main(){

const CrowdFunding = await hre.ethers.getContractFactory("Crowdfunding")

const crowdfunding = await CrowdFunding.deploy()

await crowdfunding.waitForDeployment();

console.log(`crowdfunding deployed to ${crowdfunding.target}`);

}

main().catch((error)=>{
    console.error(error);
    process.exitCode = 1
    
})