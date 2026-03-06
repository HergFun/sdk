// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HergGame {

    address public owner;
    uint public entryFee = 0.01 ether;

    address[] public players;
    address public winner;

    constructor() {
        owner = msg.sender;
    }

    function enterGame() public payable {
        require(msg.value >= entryFee, "Entry fee required");
        players.push(msg.sender);
    }

    function pickWinner() public {
        require(msg.sender == owner, "Only owner");

        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, players.length)
            )
        );

        uint index = random % players.length;
        winner = players[index];

        payable(winner).transfer(address(this).balance);

        delete players;
    }

    function getPlayers() public view returns(address[] memory){
        return players;
    }
}
