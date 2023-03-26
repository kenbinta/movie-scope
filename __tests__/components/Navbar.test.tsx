import { render, fireEvent, screen, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import useDarkMode from "../../hooks/useDarkMode";
import Navbar from "@/components/Navbar";
jest.mock("../../hooks/useDarkMode");
describe("Navbar", () => {
  beforeEach(() => {
    // @ts-ignore
    useDarkMode.mockImplementation(() => ["light", jest.fn()]);
  });

  it("renders the component correctly", async () => {
    await waitFor(() => {
      render(<Navbar />);
    });
    expect(screen.getByText("Movie Scope")).toBeInTheDocument();
  });

  it("toggles dark mode when the button is clicked", async () => {
    const setDarkMode = jest.fn();
    // @ts-ignore
    useDarkMode.mockImplementation(() => ["light", setDarkMode]);

    await waitFor(() => {
      render(<Navbar />);
    });

    const toggleButton = screen.getByRole("button");
    await waitFor(() => {
      fireEvent.click(toggleButton);
    });

    expect(setDarkMode).toHaveBeenCalledTimes(1);
    expect(setDarkMode).toHaveBeenCalledWith("dark");
  });
});
