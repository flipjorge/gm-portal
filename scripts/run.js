const main = async () => {
    
    const gmContractFactory = await hre.ethers.getContractFactory("GmPortal");
    const gmContract = await gmContractFactory.deploy();
    await gmContract.deployed();

    console.log("Contract deployed to:", gmContract.address);

    let gmCount;
    gmCount = await gmContract.getTotalGms();

    let sendGmTxn = await gmContract.sendGm("gm!");
    await sendGmTxn.wait();

    const [_, randomPerson] = await hre.ethers.getSigners();
    sendGmTxn = await gmContract.connect(randomPerson).sendGm("ggm.");
    await sendGmTxn.wait();

    let allGms = await gmContract.getAllGms();
    console.log(allGms);
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