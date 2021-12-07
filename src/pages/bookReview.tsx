import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { StarRating } from "../component/starRating";
import { useGetBookById } from "../hooks/getBookbyId";

const Container = styled.div`
  margin-left: 6%;
  margin-right: 6%;
`;
function BookReview() {
  let location = useLocation();
  const id = location.state.id;

  const bookInfo = useGetBookById(id);

  return (
    <Container>
      {bookInfo && (
        <div>
          <div>
            <img src={bookInfo?.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>
          <div>
            <h2>{bookInfo?.volumeInfo.title}</h2>
            <div>
              <label>
                Authors:
                {bookInfo?.volumeInfo.authors}
              </label>
            </div>
            <div>
              <label>
                Language:
                {bookInfo?.volumeInfo.language}
              </label>
            </div>
            <div>
              <label>
                Published date:
                {bookInfo?.volumeInfo.publishedDate}
              </label>
            </div>
            <div>
              <h3> Review</h3>
              <textarea cols={31} rows={5} />
              <div>
                <label>
                  Signature:
                  <input type="text" name="name" />
                  <StarRating />
                </label>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default BookReview;
