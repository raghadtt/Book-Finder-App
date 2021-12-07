import styled from "styled-components";
import background from "assets/img/bookbg.jpg";
import SearchBar from "./search";

const Wrapper = styled.header`
  background-image: url(${background});
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
`;

const Text = styled.div`
  color: white;
  font-weight: bold;
  font-size: 5vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header: React.FC<{ searchWord: Function }> = ({ searchWord }) => {
  const setWord = (word: string) => {
    searchWord(word);
  };

  return (
    <Wrapper>
      <Text>
        Book Finder
        <SearchBar searchWord={setWord} />
      </Text>
    </Wrapper>
  );
};

export default Header;
