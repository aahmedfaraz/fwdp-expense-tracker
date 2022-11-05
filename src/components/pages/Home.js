import React from "react";
import Details from "../details/Details";
import Form from "../form/Form";
import TransactionHistory from "../history/TransactionHistory";

const Home = () => {
    return (
        <div className="page home">
            <main>
                <Details />
                <TransactionHistory />
                <Form />
            </main>
        </div>
    )
}

export default Home;