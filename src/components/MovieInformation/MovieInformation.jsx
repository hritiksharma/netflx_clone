import React from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from "@mui/icons-material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const MovieInformation = () => {
  const { id } = useParams();
  console.log("movie information");
  return <div>MovieInformation - {id}</div>;
};

export default MovieInformation;
