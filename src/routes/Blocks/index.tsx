import { Box, Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { TxBlockObj } from "@zilliqa-js/core";
import { FormEvent, useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import zilliqa from "../../utils/zilliqa";
import { useParams } from "react-router-dom";
import { TxnBlockView } from "./TxnBlockView";

const Blocks = () => {
  const params = useParams();
  const blockId = params.id;

  const [loading, setLoading] = useState(false);
  const [txnBlock, setTxnBlock] = useState<TxBlockObj | undefined>(undefined);
  const [selectedBlk, setSelectedBlk] = useState<string>();
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const getBlock = (e: FormEvent) => {
    e.preventDefault();
    navigate("blocks", {});
  };

  useEffect(() => {
    setSelectedBlk(blockId);
    if (blockId) setLoading(true);
    setState((s) => !s);
    console.log(selectedBlk);
  }, []);

  useEffect(() => {
    console.log("hello");
    if (loading && selectedBlk) {
      zilliqa.blockchain.getTxBlock(parseInt(selectedBlk)).then((res) => {
        // console.log(res.result.body);
        setTxnBlock(res.result);
        setLoading(false);
      });
    }
  }, [state]);

  // return <Box>Blocks</Box>;
  return (
    <>
      <form onSubmit={getBlock}>
        <Flex maxW={"100vw"} m="1em">
          <Input
            type="number"
            placeholder="Block Number Eg.44521"
            mx="1em"
            name="id"
            value={selectedBlk || 0}
            onChange={(e) => setSelectedBlk(e.target.value)}
          ></Input>
          <Button></Button>
        </Flex>
      </form>
      <Box maxW="100vw" padding={"2em"} overflowWrap="anywhere">
        {txnBlock && <TxnBlockView txnBlock={txnBlock} />}
        {loading && !txnBlock && <Spinner />}
        {!loading && !txnBlock && (
          <Text fontSize={"xl"} fontWeight="bold">
            Block Value Empty
          </Text>
        )}
      </Box>
    </>
  );
};
export default Blocks;
