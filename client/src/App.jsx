import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./pages/Home";


export default function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="123admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>


  )
}
