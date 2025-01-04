import { useState } from "react";
import React from "react";
import Table from "./Table";
import Notifier from "./Notifier";
import axios from "axios";
import { BACKEND_URL } from "../apis/api";

const Body = () => {
    const [amount, setAmount] = useState(0);
    const [validRange, setValidRange] = useState(false);
    const [coinData, setCoinData] = useState(null);
    const [loading, setLoading] = useState(false);

    const calculateCoins = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/calculate`, {
                targetAmount: amount
            });
            console.log(response, "Response");
            setCoinData(response.data.coinCounts);
        } catch (error) {
            console.error("Error calculating coins:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className={"col-12"}>
                        <label className={"w-100"}>Amount</label>
                    </div>
                    <div className={"col-12"}>
                        <div className={"input-group"}>
                            <div className={"col-1 text-center"}>
                                <span className={"input-group-text mx-auto"}>$</span>
                            </div>
                            <div className={"col-11"}>
                                <input
                                    type={"number"}
                                    className={"form-control"}
                                    aria-label={"Amount (to the nearest dollar)"}
                                    max={10000}
                                    value={amount}
                                    min={0}
                                    minLength={0}
                                    onChange={(e) => {
                                        if (e.target.value === "") {
                                            setAmount(0);
                                            setValidRange(false);
                                        } else {
                                            if (parseInt(e.target.value) <= 10000) {
                                                setValidRange(true);
                                                setAmount(parseInt(e.target.value));
                                            } else {
                                                setValidRange(false);
                                            }
                                        }
                                    }}
                                />
                            </div>
                            <div className={"col-12"}>
                                <span className={"form-text"}>Must be less than 10,000.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"text-center my-4"}>
                <button className={"btn btn-primary"} disabled={!validRange} onClick={calculateCoins}>
                    {loading ? "Calculating..." : "Calculate Coins Required"}
                </button>
            </div>
            {loading && (
                <div className={"text-center my-4"}>
                    <div className={"spinner-border"} role="status">
                        <span className={"visually-hidden"}>Loading...</span>
                    </div>
                </div>
            )}
            {coinData && validRange && !loading ? (
                <>
                    <Table coinCounts={coinData} />
                    <Notifier coinCounts={coinData} />
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default Body;