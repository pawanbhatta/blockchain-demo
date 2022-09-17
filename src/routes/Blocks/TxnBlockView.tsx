import { Container, Text } from "@chakra-ui/react";
import { TxBlockObj, MicroBlockInfoObj } from "@zilliqa-js/core";

export const TxnBlockView = ({
  txnBlock: {
    body: { BlockHash, HeaderSign, MicroBlockInfos },
  },
}: {
  txnBlock: TxBlockObj;
}): JSX.Element => {
  return (
    <>
      <Text fontSize={"xl"} fontWeight="bold">
        BlockHash
      </Text>
      <Text fontSize={"md"}> {BlockHash}</Text>
      <Text fontSize={"xl"}>HeaderSign</Text>
      <Text fontSize={"md"}> {HeaderSign}</Text>
      <Text fontSize={"xl"}>MicroBlocks</Text>
      {MicroBlockInfos.map((block: MicroBlockInfoObj, i) => (
        <Container
          key={i}
          border={"1px brown"}
          bg="yellow"
          mb=".5em"
          borderRadius="10px"
        >
          <Text fontSize={"md"}> Hash</Text>
          <Text fontSize={"xs"}>{block.MicroBlockHash}</Text>
          <Text fontSize={"md"}> ShardId</Text>
          <Text fontSize={"xs"}>{block.MicroBlockShardId}</Text>
          <Text fontSize={"md"}> RootHash</Text>
          <Text fontSize={"xs"}>{block.MicroBlockTxnRootHash}</Text>
        </Container>
      ))}
      {/* <Text fontSize={"xl"}>
               BlockHash : {BlockHash}
             </Text> */}
    </>
  );
};
