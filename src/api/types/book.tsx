export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: object;
    publishedDate: string;
    imageLinks: {
      thumbnail: string;
    };
    language: string;
  };
}
