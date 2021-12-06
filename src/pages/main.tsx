import { useState } from "react";
import styled from "styled-components";
import { getBooks } from "../api/books";

import Header from "../component/header";
import Product from "../component/product";

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 6%;
`;

function MainPage() {
  const [books, setBooks] = useState([]);

  const showBooks = () => {
    return books.map((item) => {
      return (
        <div>
          <Product key={item["id"]} id={item["id"]} />
        </div>
      );
    });
  };

  const setWord = (word) => {
    filterItem(word);
  };

  const filterItem = async (searchItem) => {
    const { data } = await getBooks(searchItem);
    setBooks(data.items);
  };

  return (
    <div>
      <Header searchWord={setWord} />
      <Block> {books.length !== 0 && showBooks()}</Block>
    </div>
  );
}
export default MainPage;
