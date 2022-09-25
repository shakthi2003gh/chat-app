import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatApp from "./pages/chatPage";
import PageNotFound from "./pages/notFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatApp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
