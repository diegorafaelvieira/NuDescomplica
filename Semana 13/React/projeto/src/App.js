import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { HomePage } from "./pages/Home/HomePage";
import { MinhasPastas } from "./pages/MinhasPastas/MinhasPastasPage";
import { AppContext } from "./store/AppContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/minhas-pastas" element={<MinhasPastas />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
