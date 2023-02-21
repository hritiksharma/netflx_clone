import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB.js";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import { MovieList } from "../index";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenereOrCategory
  );
  const { data, error, isLoading } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
  });
  console.log("data-----------in Movies", data);
  // console.log("current genere or category name", genreIdOrCategoryName);
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h5">
          {" "}
          No Movies that match the name
          <br />
          Please search something else
        </Typography>
      </Box>
    );
  }

  if (error) {
    return "An Error has occured";
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
