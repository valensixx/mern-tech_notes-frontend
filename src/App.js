import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./components/Login";
import DashLayout from "./components/DashLayout";

import(Routes)
function App() {
  return (
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />}>
          <Route path="login" element={<Login />}>
            
            <Route path="dash" element={<DashLayout/>}>
              
            </Route>
            
          </Route>
        </Route>
      </Route>
   </Routes>
  );
}

export default App;
