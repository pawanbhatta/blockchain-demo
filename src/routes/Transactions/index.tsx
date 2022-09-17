import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import zilliqa from "../../utils/zilliqa";
import { BlockList, TxBlockObj, MicroBlockInfoObj } from "@zilliqa-js/core";

function Transactions() {
  const [transactionList, setTransactionList] = useState<BlockList>();
  const [txnBlock, setTxnBlock] = useState<TxBlockObj | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [selectedBlk, setSelectedBlk] = useState<number | null>(null);
  const selectBlock: (blk: number) => void = (blk) => {
    setTxnBlock(undefined);
    
    setSelectedBlk(blk);
    setLoading2(true);
  };

  useEffect(() => {
    if (loading) {
      zilliqa.blockchain.getTxBlockListing(3).then((res) => {
        console.log(res.result);
        setTransactionList(res.result);
      });
    }
  }, [loading]);

  useEffect(() => {
    if (loading2 && selectedBlk) {
      zilliqa.blockchain.getTxBlock(selectedBlk).then((res) => {
        // console.log(res.result.body);
        setTxnBlock(res.result);
        setLoading2(false);
      });
    }
  }, [selectedBlk]);
  return (
    <Flex w="100vw" justifyContent={"space-around"}>
      <Box flex="1">
        <Text fontSize={"3xl"}>Transaction List</Text>
        {transactionList &&
          transactionList.data.map(
            ({ BlockNum, Hash }: { BlockNum: number; Hash: string }) => (
              <Text
                onClick={() => selectBlock(BlockNum)}
                _hover={{ bg: "red.100" }}
                // bg="red.100"
                key={BlockNum}
                fontSize={"3xs"}
              >
                {Hash}
              </Text>
            )
          )}
      </Box>
      <Box flex={"1"} maxW="50vw" padding={"2em"} overflowWrap="anywhere">
        {/* {txnBlock && <TxnBlockView txnBlock={txnBlock} />} */}
        {loading2 && !txnBlock && <Spinner />}
        {!loading2 && !txnBlock && (
          <Text fontSize={"xl"} fontWeight="bold">
            BlockHash Select a block for more info
          </Text>
        )}
      </Box>
    </Flex>
  );
}

export default Transactions;
