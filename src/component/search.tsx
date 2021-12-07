import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = styled.section`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 80%);
  display: flex;
`;

const Input = styled.input`
  font-size: 1.4vw;
`;

const SearchBar: React.FC<{ searchWord: Function }> = ({ searchWord }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const handleSearch = () => {
    searchWord(searchInput);
  };

  return (
    <Search>
      <Input
        type="text"
        placeholder="Search for books"
        onChange={(e) => searchItems(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        <FaSearch fontSize="1.5vw" color="#8b0000" />
      </button>
    </Search>
  );
};

export default SearchBar;
