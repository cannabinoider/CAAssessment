import { Route, Routes } from "react-router";
import Home from "./Pages/Homepage/homepage";
import Login from "./Pages/SignIn/signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;