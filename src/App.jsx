import "./App.css";
import { CartPage } from "./Pages/Cart/Cart.page";
import { CheckoutPage } from "./Pages/Checkout/Checkout.page";
import { HomePage } from "./Pages/Home/Home.page";
import { NotFoundPage } from "./Pages/NotFound/NotFound.page";
import { ProductsPage } from "./Pages/Products/Products.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
