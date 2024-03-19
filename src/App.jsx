import { Fragment } from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product"
import Bag from "./pages/Bag"


const App = () => {
  return (
    <Fragment>
      <main className="main">
        <Routes>
          <Route path="/Main-market" index element={<Home />} />
          <Route path="/Main-market/product/:id" element={<Product />} />
          <Route path="*" element={<h2 className="title-2">404</h2>} />
        <Route path="/Market/bag/" element={<Bag/>}/>
        </Routes>
      </main>
    </Fragment>
  )
}

export default App;
