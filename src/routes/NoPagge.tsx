import { Flex, Text } from "@chakra-ui/react";

function NoPage() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      flexDir={"column"}
      height="50vh"
    >
      <Text fontSize={"5xl"}>No Such Page found</Text>
      <Text fontSize={"lg"}>
        You may try looking into the URL bar if things are right or maybe check
        on AppRoutes.tsx
      </Text>
    </Flex>
  );
}

export default NoPage;
