import { render, screen } from "@testing-library/react";
import CardProductComponent from "./Components/CardProduct/CardProduct.component";
import CardCheckoutComponent from "./Components/CardCheckout/CardCheckout.component";
import CardCartProductComponent from "./Components/CardCartProduct/CardCartProduct.component";
import CardSumProductsComponent from "./Components/CardSumProducts/CardsSumProducts.component";
import NavBarComponent from "./Components/NavBar/NavBar.component";
import NavBarCartComponent from "./Components/NavBarCart/NavBarCart.component";
import NavBarCheckoutComponent from "./Components/NavBarCheckout/NavBarChekout.component";
import SpaceCartProductsComponents from "./Components/SpaceCartProducts/SpaceCartProducts.components";
import SpaceProductsComponent from "./Components/SpaceProducts/SpaceProducts.component";

import { HomePage } from "./Pages/Home/Home.page";
import { NotFoundPage } from "./Pages/NotFound/NotFound.page";
import { CheckoutPage } from "./Pages/Checkout/Checkout.page";

describe("Components", () => {
  it("CardCartProductComponent", () => {
    render(<CardCartProductComponent />);
    screen.debug();
  });

  it("CardCheckoutComponent", () => {
    render(<CardCheckoutComponent />);
    screen.debug();
  });

  it("CardProductComponent", () => {
    render(<CardProductComponent />);
    screen.debug();
  });

  // it("CardSumProductsComponent", () => {
  //   render(<CardSumProductsComponent />);
  //   screen.debug();
  // });

  // it("NavBarComponent", () => {
  //   render(<NavBarComponent />);
  //   screen.debug();
  // });

  it("NavBarCartComponent", () => {
    render(<NavBarCartComponent />);
    screen.debug();
  });

  it("NavBarCheckoutComponent", () => {
    render(<NavBarCheckoutComponent />);
    screen.debug();
  });

  // it("SpaceCartProductsComponents", () => {
  //   render(<SpaceCartProductsComponents />);
  //   screen.debug();
  // });

  // it("SpaceProductsComponent", () => {
  //   render(<SpaceProductsComponent />);
  //   screen.debug();
  // });

  it("HomePage", () => {
    render(<HomePage />);
    screen.debug();
  });

  it("NotFoundPage", () => {
    render(<NotFoundPage />);
    screen.debug();
  });

  // it("CheckoutPage", () => {
  //   render(<CheckoutPage />);
  //   screen.debug();
  // });
});
