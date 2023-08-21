import {render,screen} from '@testing-library/react'
import CardProductComponent from "./Components/CardProduct/CardProduct.component"

describe("Jest", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });
  it("should display element", () => {
    render(<CardProductComponent/>)

    screen.debug()
  })
});
