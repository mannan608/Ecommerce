import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/asset/css/Master.css";
import Footer from "./component/footer/Footer";
import Navbar from "./component/header/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Carts from "./pages/Carts";
import WholeSale from "./pages/WholeSale";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/wholesale" element={<WholeSale />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
