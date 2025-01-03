import React from "react";


const Table = () => {
    return(
        <table className={"table table-striped table-striped-columns text-center"}>
            <thead>
            <tr>
                <th scope={"col"}>Denomination</th>
                <th scope={"col"}>Count</th>
                <th scope={"col"}>Total Value</th>
            </tr>
            <tr>
                <td>
                    0.01 $
                </td>
                <td>
                    5 Coins
                </td>
                <td> 0.05</td>
            </tr>
            </thead>
        </table>
    )
}


export default Table;