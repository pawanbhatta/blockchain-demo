import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box
        width={"100vw"}
        py="1em"
        background={"linear-gradient(90deg,red,yellow)"}
      >
        <Flex justifyContent={"space-evenly"}>
          <Button as={NavLink} to="transactions" background={"transparent"}>
            Transactions
          </Button>
          <Button as={NavLink} to="blocks" background={"transparent"}>
            Blocks
          </Button>
          <Button as={NavLink} to="/" background={"transparent"}>
            Blockchain
          </Button>
          <Button as={NavLink} to="/dapp" background={"transparent"}>
            DApp
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
