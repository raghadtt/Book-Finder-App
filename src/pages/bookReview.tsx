import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getBookInfo } from "../api/books";
import StarRating from "../component/starRating";

const Container = styled.div`
  margin-left: 6%;
  margin-right: 6%;
`;

function BookReview(props) {
  let location = useLocation();
  const id = location.state.id;

  const [bookInfo, setBookInfo] = useState([]);

  const getBookById = useCallback(async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { data } = await getBookInfo(id);
    setBookInfo(data);
  }, []);

  useEffect(() => {
    getBookById(id);
  }, [id, getBookById]);

  return (
    <Container>
      {bookInfo.length !== 0 && (
        <div>
          <div>
            <img
              src={bookInfo["volumeInfo"]["imageLinks"]["thumbnail"]}
              alt=""
            />
          </div>
          <div>
            <h2>{bookInfo["volumeInfo"]["title"]}</h2>
            <div>
              <label>
                Authors:
                {bookInfo["volumeInfo"]["authors"]}
              </label>
            </div>
            <div>
              <label>
                Language:
                {bookInfo["volumeInfo"]["language"]}
              </label>
            </div>
            <div>
              <label>
                Published date:
                {bookInfo["volumeInfo"]["publishedDate"]}
              </label>
            </div>
            <div>
              <h3> Review</h3>
              <textarea />

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
