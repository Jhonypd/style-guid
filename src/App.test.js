/** @format */

import { render } from "@testing-library/react";
import App from "./App.js";

test("teste titulo", () => {
  render(<App />);
  const testCase = document.querySelector(".App h1");
  expect(testCase).toHaveTextContent(/Painel de controle/i);
});
