import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import zilliqa from "../../utils/zilliqa";
import { TxList } from "@zilliqa-js/core";

function Transactions() {
  const [transactionList, setTransactionList] = useState<TxList>();
  useEffect(() => {
    console.log("sadfsadfsadf");
    zilliqa.blockchain.getRecentTransactions().then((res) => {
      console.log(res.result);
      setTransactionList(res.result);
    });
  });
  return (
    <>
      <Text fontSize={"5xl"}>Transaction Page</Text>
      {transactionList &&
        transactionList.map((tString) => (
          <Text fontSize={"3xs"}>{tString}</Text>
        ))}
    </>
  );
}

export default Transactions;
