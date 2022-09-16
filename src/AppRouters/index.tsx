import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/Layouts/BaseLayout";
import Transactions from "../routes/Transactions";

function Approuters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="transactions" element={<Transactions />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approuters;
