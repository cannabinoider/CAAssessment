import { Route, Routes } from "react-router";
import Home from "./Pages/Homepage/homepage";
import Login from "./Pages/SignIn/signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App;