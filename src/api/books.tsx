import { googleBooksApi } from "./googleApi";
import { Book } from "./types/book";
import { Volume } from "./types/volume";

export const getBooks = (word) => {
  return googleBooksApi.get<Volume>("/volumes", {
    params: {
      q: word,
      maxResults: 30,
    },
  });
};

export const getBookInfo = (id) => {
  return googleBooksApi.get<Book>(`/volumes/${id}`);
};
