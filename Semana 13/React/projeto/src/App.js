import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { HomePage } from "./pages/Home/HomePage";
import { MinhasPastas } from "./pages/MinhasPastas/MinhasPastasPage";

import { saveFolder, savePinInFolder } from './services/pinService';

function App() {
  //saveFolder('JavaScript');
  savePinInFolder("669c-15bf6", "pin123");
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MinhasPastas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
