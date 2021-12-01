import { useEffect, useState } from "react";
import { getBooks } from "../api/books";

import Header from "../component/header";

function MainPage() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const { data } = await getBooks();
    setBooks(data.items);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const showBooks = () => {
    return books.map((item) => {
      return <div>{item["volumeInfo"]["title"]}</div>;
    });
  };

  return (
    <div>
      <Header />
      {showBooks()}
    </div>
  );
}
export default MainPage;
