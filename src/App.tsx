import "./App.css";
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/BasketPage";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/basket" element={<Basket />} ></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
