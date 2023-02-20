import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tmdbApi } from "../services/TMDB";
import genreOrCategory from "../features/currentGenreOrCategory";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenereOrCategory: genreOrCategory,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

setupListeners(store.dispatch);
