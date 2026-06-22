import Login from "./modules/login"
import Dashboard from "./modules/Dashboard"
import { Routes, Route } from "react-router";
import PageNotFound from "./modules/PageNotFound";


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />;
    </Routes>
  );
}

export default App


