import React, { useState, useEffect } from "react";
import Details from "../details/Details";
import Form from "../form/Form";
import TransactionHistory from "../history/TransactionHistory";

const Home = () => {

    const [data, setData] = useState([
        // {
        //     description: "Income",
        //     amount: 10000,
        //     type: "income"
        // },
    ]);

    useEffect(() => {
        if(localStorage.getItem("transaction-history")) {
            setData(
                JSON.parse(localStorage.getItem("transaction-history"))
            )
        }
    }, []);

    useEffect(() => {
        if(data.length !== 0) {
            localStorage.setItem("transaction-history", JSON.stringify(data));
        }
    }, [data])

    return (
        <div className="page home">
            <main>
                <Details data={data} />
                <TransactionHistory data={data} setData={setData} />
                <Form data={data} setData={setData} />
            </main>
        </div>
    )
}

export default Home;