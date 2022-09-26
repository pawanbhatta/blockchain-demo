import { Button, Input, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  documentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notarize: (event: React.MouseEvent<HTMLButtonElement>) => void;
  check: (event: React.MouseEvent<HTMLButtonElement>) => void;
  connectZil: (event: React.MouseEvent<HTMLButtonElement>) => void;
  getContractDetails: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DAppView: React.FC<IProps> = ({
  documentChange,
  notarize,
  check,
  connectZil,
  getContractDetails,
}) => {
  return (
    <div className="container" style={{ height: "50vh" }}>
      <Text fontSize={"4xl"} as="b">
        Document Notarizer
      </Text>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Button onClick={connectZil} colorScheme={"blue"} id="btnConnectZilPay">
          Connect ZilPay
        </Button>
        <Button
          onClick={getContractDetails}
          colorScheme={"blue"}
          id="btnGetContractDetails"
        >
          Get Contract Details
        </Button>
      </div>
      <label htmlFor="document">Enter a string below</label>
      <Input variant={"filled"} type="text" onChange={documentChange} />
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Button onClick={notarize} colorScheme={"blue"} id="btnNotarize">
          Notarize
        </Button>
        <Button onClick={check} colorScheme={"blue"} id="btnCheck">
          Check
        </Button>
      </div>
    </div>
  );
};

export default DAppView;
