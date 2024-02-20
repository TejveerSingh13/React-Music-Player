import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component TEST Cases:", () => {
  test("renders Home component with Library as a default route", () => {
    //Render the component
    render(<App />);

    // Assertions
    const libraryContent = screen.getByText(/library/i);
    expect(libraryContent).toBeInTheDocument();
  });
});
