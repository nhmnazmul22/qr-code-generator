import { Route, Routes } from "react-router-dom";
import NumberToQr from "./pages/NumberToQr";
import UrlToQr from "./pages/UrlToQr";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UrlToQr />} />
      <Route path="/urlToQR" element={<UrlToQr />} />
      <Route path="/numberToQR" element={<NumberToQr />} />
      <Route path="/addressToQR" element={<UrlToQr />} />
    </Routes>
  );
}

export default App;
