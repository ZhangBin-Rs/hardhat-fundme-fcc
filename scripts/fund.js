const { ethers, getNamedAccounts } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("1"),
    });
    const transactionReceipt = await transactionResponse.wait(1);
    console.log("funded");
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
