import { render, fireEvent } from "@testing-library/react";
import CustomButton from "./custom-button";

it("checkButtonRender", () => {
  const { queryByTitle } = render(<CustomButton />);
  const btn = queryByTitle("dummyButton");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<CustomButton />);
    const btn = queryByTitle("dummyButton");
    fireEvent.click(btn);
  });
});
