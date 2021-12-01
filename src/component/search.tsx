import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import { getBooksByAuthor, getBooksByTitle } from "../api/books";

const Search = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 80%);
  display: flex;
`;

const Input = styled.input`
  font-size: 1.4vw;
`;

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [booksByAuthor, setBooksByAuthor] = useState([]);
  const [booksByTitle, setBooksByTitle] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const filterItem = async () => {
    const { data } = await getBooksByAuthor(searchInput);
    setBooksByAuthor(data.items);
    filterItembyTitle();
  };

  const filterItembyTitle = async () => {
    const { data } = await getBooksByTitle(searchInput);
    setBooksByTitle(data.items);
  };

  return (
    <Search>
      <Input
        type="text"
        placeholder="Search for books"
        onChange={(e) => searchItems(e.target.value)}
      />
      <button type="submit" onClick={filterItem}>
        <FaSearch fontSize="1.5vw" color="#8b0000" />
      </button>
    </Search>
  );
};

export default SearchBar;
