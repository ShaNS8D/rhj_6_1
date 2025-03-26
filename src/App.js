import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HomePage from "./components/Pages/HomePage";
import DriftPage from "./components/Pages/DriftPage";
import TimeAttackPage from "./components/Pages/TimeAttackPage";
import ForzaPage from "./components/Pages/ForzaPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <div className="page">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />}/>
            <Route path="/forza" element={<ForzaPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
