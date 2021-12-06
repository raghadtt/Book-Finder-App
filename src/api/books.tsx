import { googleBooksApi } from "./googleApi";

export const getBooks = (word) => {
  return googleBooksApi.get("volumes?q=" + word + "&maxResults=30");
};

export const getBookInfo = (id) => {
  return googleBooksApi.get("volumes/" + id);
};
