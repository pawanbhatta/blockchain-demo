import { Button, Input, Text } from "@chakra-ui/react";
import React, { ReactEventHandler, useState } from "react";
import { checkZilPresent, getCurrentAccount } from "./utils";
import DAppView from "./View";

function DApp() {
  const [state, setState] = useState({
    status: "[STATUS]",
    document: "",
  });
  const documentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, document: e.target.value }));
  };
  const tryConnectZil = () => {
    checkZilPresent
      .then(() => {
        console.log("Zil Present");
        getCurrentAccount();
      })
      .catch(() => {
        console.log("Zil Not Present");
      });
  };
  return (
    <div className="container" style={{ height: "100vh" }}>
      <DAppView
        check={() => 0}
        connectZil={tryConnectZil}
        documentChange={documentChange}
        getContractDetails={() => 0}
        notarize={() => 0}
      />
      <h3 id="result">{state.status}</h3>
    </div>
  );
}

export default DApp;
