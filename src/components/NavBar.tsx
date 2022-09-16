import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box>
        <Flex>
          <Link as={NavLink} to="transactions">
            Transactions
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
