// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract GmPortal {
    
    uint256 totalGms;

    constructor() {
        console.log("gm");
    }

    function sendGm() public {
        totalGms += 1;
        console.log("%s says gm", msg.sender);
    }

    function getTotalGms() public view returns (uint256) {
        console.log("We have %d total gms", totalGms);
        return totalGms;
    }
}