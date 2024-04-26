import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectName" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
