import React from "react";

const Table = (props) => {
    const { coinCounts } = props;

    return (
        <table className={"table table-striped table-striped-columns text-center table-primary"}>
            <thead>
            <tr>
                <th scope={"col"}>Denomination</th>
                <th scope={"col"}>Count</th>
                <th scope={"col"}>Total Value</th>
            </tr>
            </thead>
            <tbody>
            {coinCounts.map((coin, index) => (
                <tr key={index}>
                    <td>{coin.denomination} $</td>
                    <td>{coin.count} Coins</td>
                    <td>{(coin.denomination * coin.count).toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;