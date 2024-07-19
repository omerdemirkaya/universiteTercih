import Home from "./components/Home";
import Choice from "./components/Choice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharTest from "./components/CharTest";
import DepContent from "./components/DepContent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="choice" element={<Choice />} />
        <Route path="test" element={<CharTest />} />
        <Route path="depcontent/:departmentName" element={<DepContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
