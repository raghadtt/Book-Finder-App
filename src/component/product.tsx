import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getBookInfo } from "../api/books";

const ProductBlock = styled.div`
  flex: 1 1 30%;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 0.5%;
  width: 100%;
  height: 40vh;
  margin-bottom: 3%;
  object-fit: contain;
`;

const HoverText = styled.div`
  display: none;
  position: absolute;
  margin-top: -18%;
  font-size: 1.3vw;
  align-items: center;
  background-color: white;
  width: 100%;
`;

const SubTitle = styled.p`
  color: #8b0000;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vw;
  font-weight: bold;
`;
const Title = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5vw;
`;

const ImageBlock = styled.div`
  position: relative;
  &:hover ${HoverText} {
    display: block;
    cursor: pointer;
  }

  &:hover ${Image} {
    opacity: 0.5;
    cursor: pointer;
  }
`;

function Product(props) {
  const [bookInfo, setBookInfo] = useState([]);

  const getBookById = useCallback(async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { data } = await getBookInfo(id);
    setBookInfo(data);
  }, []);

  useEffect(() => {
    getBookById(props.id);
  }, [props.id, getBookById]);

  return (
    <div>
      {bookInfo.length !== 0 && (
        <ProductBlock>
          <ImageBlock>
            <Link
              state={{
                id: bookInfo["id"],
              }}
              to={{
                pathname: "/bookReview",
              }}
            >
              <Image
                src={bookInfo["volumeInfo"]["imageLinks"]["thumbnail"]}
                alt=""
                className="Image"
              />
              <HoverText>
                <p>Review</p>
              </HoverText>
            </Link>
          </ImageBlock>
          <div>
            <Title>{bookInfo["volumeInfo"]["title"]}</Title>
          </div>
        </ProductBlock>
      )}
    </div>
  );
}

export default Product;
