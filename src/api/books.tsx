import { googleBooksApi } from "./googleApi";

export const getBooks = () => {
  return googleBooksApi.get("volumes?q=flowers&maxResults=30");
};

export const getBooksByAuthor = (author) => {
  return googleBooksApi.get(
    "volumes?q=flowers+inauthor:" + author + "&maxResults=30"
  );
};

export const getBooksByTitle = (title) => {
  return googleBooksApi.get(
    "volumes?q=flowers+intitle:" + title + "&maxResults=30"
  );
};
