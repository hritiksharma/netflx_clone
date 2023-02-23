import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// let page = 1;

export const tmdbApi = createApi({
  // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // Geting generes List...
    getGeneres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    //* Get All Movies....
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // Get Movie by Category Popular, TopRated, Upcoming
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          console.log("inside the string", genreIdOrCategoryName, page);

          // console.log("inside the function");
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movie by Genere
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          console.log("inside the number", genreIdOrCategoryName, page);

          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetGeneresQuery, useGetMoviesQuery } = tmdbApi;

// tmdb api key
// dc741e56224c521993ab30b882eb0fea
