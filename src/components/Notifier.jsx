import React from "react";

const Notifier = ({ coinCounts, message }) => {
    // Calculate the total number of coins
    const totalCoins = coinCounts.reduce((total, coin) => total + coin.count, 0);

    return (
        <div className={"card w-100 p-3 mt-5"}>
            <p>The Minimum Coins required are: {totalCoins}</p>
            <p>{message}</p>
        </div>
    );
};

export default Notifier;