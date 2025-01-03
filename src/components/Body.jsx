import {useState} from "react";
import React from "react";
import Table from "./Table";
import Notifier from "./Notifier";

const Body = () => {
    const [amount,setAmount] = useState(0);
    const [validRange,setValidRange] = useState(false);
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
                                <input type={"number"} className={"form-control"}
                                       aria-label={"Amount (to the nearest dollar)"} max={10000} value={amount} min={0} minLength={0} onChange={(e) => {
                                           if(e.target.value === ""){
                                                  setAmount(0);
                                                    setValidRange(false);
                                             }
                                             else{
                                               if(parseInt(e.target.value) <=10000){
                                                   setValidRange(true);
                                                   setAmount(parseInt(e.target.value));
                                               }
                                               else{
                                                   setValidRange(false);}
                                           }



                                }}/>
                            </div>
                            <div className={"col-12"}>
                                <span className={"form-text"}>Must Be less than 10,000.</span>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
            <div className={"text-center my-4"}>
                <button className={"btn btn-primary"} disabled={!validRange}>Calculate Coins Required</button>
            </div>
            {
                validRange? <><Table/> <Notifier/></>:''
            }



        </div>
    )
}

export default Body;