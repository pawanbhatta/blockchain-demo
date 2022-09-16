import { Zilliqa } from "@zilliqa-js/zilliqa";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await axios.post("https://api.zilliqa.com/", {
        id: "1",
        jsonrpc: "2.0",
        method: "GetRecentTransactions",
        params: [""],
      });

      setTransactions(data?.result?.TxnHashes);

      const zilliqa = new Zilliqa("https://api.zilliqa.com");
      const txn = await zilliqa?.blockchain?.getTransaction(
        "cd8727674bc05e0ede405597a218164e1c13c7103b9d0ba43586785f3d8cede5"
      );
      console.log(txn.id);
    };

    fetchTransactions();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div
            className="col-sm "
            style={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            <h1> Transactions</h1>
            <hr
              style={{
                backgroundColor: "yellow",
                height: "4px",
                marginTop: "10px",
                textAlign: "center",
              }}
            />
            <ul className="list-group">
              {transactions.map((t) => {
                return (
                  <li key={t} className="list-group-item">
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
