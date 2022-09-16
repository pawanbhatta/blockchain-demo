import { Box, Flex, Link } from "@chakra-ui/react";
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
          <Link as={NavLink} to="transactions">
            Transactions
          </Link>
          <Link as={NavLink} to="transactions">
            Blocks
          </Link>
          <Link as={NavLink} to="transactions">
            Blockchain
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
