import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieCard from "@/components/common/MovieCard";

const mockMovie = {
  Title: "Test Movie",
  Year: "2000",
  imdbID: "tt0000000",
  Type: "movie",
  Poster: "https://test.poster/image.jpg",
};
const handleClick = jest.fn();
describe("MovieCard", () => {
  it("renders the component correctly", () => {
    render(<MovieCard movie={mockMovie} onClick={handleClick} />);
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("Year: 2000 | ID: tt0000000 | Type: movie")).toBeInTheDocument();
    expect(screen.getByAltText("Test Movie")).toHaveAttribute("src", "https://test.poster/image.jpg");
  });

  it("calls onClick prop when the card is clicked", () => {
    render(<MovieCard movie={mockMovie} onClick={handleClick} />);
    fireEvent.click(screen.getByText("Test Movie"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
