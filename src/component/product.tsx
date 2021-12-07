import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetBookById } from "../hooks/getBookbyId";
import { ProductProps } from "./props/ProductProps";

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

const Product: React.FC<ProductProps> = ({ id }) => {
  const bookInfo = useGetBookById(id);

  return (
    <div>
      {bookInfo && (
        <ProductBlock>
          <ImageBlock>
            <Link
              state={{
                id: bookInfo?.id,
              }}
              to={{
                pathname: "/bookReview",
              }}
            >
              <Image
                src={bookInfo?.volumeInfo.imageLinks.thumbnail}
                alt=""
                className="Image"
              />
              <HoverText>
                <p>Review</p>
              </HoverText>
            </Link>
          </ImageBlock>
          <div>
            <Title>{bookInfo?.volumeInfo.title}</Title>
          </div>
        </ProductBlock>
      )}
    </div>
  );
};

export default Product;
