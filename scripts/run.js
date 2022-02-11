const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const gmContractFactory = await hre.ethers.getContractFactory("GmPortal");
    const gmContract = await gmContractFactory.deploy();
    await gmContract.deployed();

    console.log("Contract deployed to:", gmContract.address);
    console.log("Contract deployed by:", owner.address);

    let gmCount;
    gmCount = await gmContract.getTotalGms();

    let sendGmTxn = await gmContract.sendGm();
    await sendGmTxn.wait();

    gmCount = await gmContract.getTotalGms();

    sendGmTxn = await gmContract.connect(randomPerson).sendGm();
    await sendGmTxn.wait();

    gmCount = await gmContract.getTotalGms();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();