import React from "react";
import { Grid } from "@mui/material";
import { Movie } from "../index";
import useStyles from "./styles";

const MovieList = ({ movies }) => {
  const classes = useStyles();
  console.log("movies------- in MovieList>>>>", movies);
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
