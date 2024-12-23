import { Route, Routes } from "react-router";
import Home from "../src/Pages/Homepage/Homepage"
import Login from "../src/Pages/SignIn/Signin";
import YetToCome from "./Pages/YetToCome/YetToCome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/YetToCome" element={<YetToCome/>}/>
    </Routes>
  );
}

export default App;