import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/Layouts/BaseLayout";
import Blocks from "../routes/Blocks";
import DApp from "../routes/DApp";
import NoPage from "../routes/NoPagge";
import Transactions from "../routes/Transactions";

function Approuters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="transactions" element={<Transactions />}></Route>
          <Route path="blocks/:id" element={<Blocks />} />
          <Route path="blocks" element={<Blocks />} />
          <Route path="dapp" element={<DApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approuters;
