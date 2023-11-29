import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { WishlistProvider } from "./context/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);