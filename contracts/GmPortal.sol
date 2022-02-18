// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract GmPortal {
    
    uint256 totalGms;

    event NewGm(address indexed from, uint256 timestamp, string message);

    struct Gm {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    Gm[] gms;

    constructor() {
        console.log("gm");
    }

    function sendGm(string memory _message) public {
        totalGms += 1;
        console.log("%s says gm", msg.sender);

        gms.push(Gm(msg.sender, _message, block.timestamp));

        emit NewGm(msg.sender, block.timestamp, _message);
    }

    function getAllGms() public view returns(Gm[] memory) {
        return gms;
    }

    function getTotalGms() public view returns (uint256) {
        console.log("We have %d total gms", totalGms);
        return totalGms;
    }
}