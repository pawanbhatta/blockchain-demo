import { Flex, Spacer, Text } from "@chakra-ui/react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default BaseLayout;
