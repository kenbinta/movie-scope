import api from "@/utils/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Movie } from "../../types/Movie";
const mock = new MockAdapter(axios);
describe("OMDB API", () => {
  afterEach(() => {
    mock.reset();
  });

  it("should create an axios instance with the correct base URL and apikey", async () => {
    const expectedBaseURL = "http://www.omdbapi.com/";
    const expectedApiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
    expect(api.defaults.baseURL).toBe(expectedBaseURL);
    expect(api.defaults.params.apikey).toBe(expectedApiKey);
  });

  it("should successfully fetch data from the OMDB API", async () => {
    const query = "Matrix";
    const mockResponse = {
      Search: [
        {
          Title: "The Matrix",
          Year: "1999",
        },
      ],
    };
    mock.onGet().reply(200, { Search: [...mockResponse.Search] });
    const response = await api.get("", { params: { s: query } });
    expect(response.status).toBe(200);
    const expectedMovie = mockResponse.Search[0];
    const movieInResponse = response.data.Search.find((movie: Movie) => movie.Title === expectedMovie.Title && movie.Year === expectedMovie.Year);
    expect(movieInResponse).toBeTruthy();
  });

  it("should handle errors from the OMDB API", async () => {
    const query = "not-existing-movie";
    const mockError = {
      Response: "False",
      Error: "Movie not found!",
    };
    mock.onGet().reply(200, mockError);
    const response = await api.get("", { params: { s: query } });
    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockError);
  });
});
