import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "@/pages/search";

describe("Search component", () => {
  it('renders with "Hello" text', () => {
    render(<Search />);
    const helloElement = screen.getByText(/Hello/i);
    expect(helloElement).toBeInTheDocument();
  });
});
