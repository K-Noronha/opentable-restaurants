import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("check for all intitial content", () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(<App />);

  const title = getByText("Find A Restaurant");
  const inputCityHolder = getByPlaceholderText("Search by City");
  const inputAddressHolder = getByPlaceholderText("Search by Address");
  const inputAreaHolder = getByPlaceholderText("Search by Area");
  const submitButton = getByTestId("submit-button");

  expect(title).toBeInTheDocument();
  expect(inputCityHolder).toBeInTheDocument();
  expect(inputAddressHolder).toBeInTheDocument();
  expect(inputAreaHolder).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
