import { Fragment } from "react";
import { Header } from "./components/header/Header";
import { Categories } from "./pages/categories/Categories";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";

import "./App.css";
import { Products } from "./pages/products/Products";
import { Cart } from "./pages/cart/Cart";
import { ProductCard } from "./components/productCard/ProductCard";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Mapty } from "./components/map/Map";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="categories/*" element={<Categories />}/>
        <Route path="products/*" element={<Products/>}/>
        <Route path="products/:productId" element={<ProductCard/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="404" element={<ErrorPage/>}/>
      </Routes>
      <Footer />
      <Mapty/>
    </Fragment>
  );
}

export default App;
