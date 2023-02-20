import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import genreIcons from "../../assets/genres";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";

import { useGetGeneresQuery } from "../../services/TMDB";
import { useSelector, useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
const categories = [
  { label: "Popular", Value: "popular" },
  { label: "Top Rated", Value: "top_rated" },
  { label: "Upcoming", Value: "upcoming" },
];

const redLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const blueLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  const dispatch = useDispatch();

  const { data, isFetching } = useGetGeneresQuery();
  console.log("genressssskjasdfj", data);
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="filmpire logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(label))}
              button
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genereImages}
                  height={30}
                  alt="ListItemIcon"
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Generes</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(name))}
                button
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genereImages}
                    height={30}
                    alt="ListItemIcon"
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
