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
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";

const categories = [
  { label: "Popular", Value: "popular" },
  { label: "Top Rated", Value: "top_rated" },
  { label: "Upcoming", Value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", Value: "comedy" },
  { label: "Action", Value: "action" },
  { label: "Horror", Value: "horror" },
  { label: "Animation", Value: "animation" },
];

const redLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const blueLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
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
        {demoCategories.map(({ label, value }) => {
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genereImages}
                  height={30}
                  alt="ListItemIcon"
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>;
        })}
      </List>
    </>
  );
};

export default Sidebar;
