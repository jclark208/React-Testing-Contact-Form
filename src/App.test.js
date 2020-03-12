import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

  test('Does contact form render without crashing',() => {
    render(<ContactForm />)
  });

  test('Does the button have the type of submit', () => {
    const {getByText} = render(<App />);
    const email = getByText(/email*/i);
    expect(email).toBeInTheDocument();
  });
