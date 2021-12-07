import { useState, useCallback, useEffect } from "react";
import { getBookInfo } from "api/books";
import { Book } from "api/types/book";
import { delay } from "utils/delay";

export const useGetBookById = (id: string) => {
  const [bookInfo, setBookInfo] = useState<Book | null>(null);

  const getBookById = useCallback(async (id) => {
    await delay();
    const { data } = await getBookInfo(id);
    setBookInfo(data);
  }, []);

  useEffect(() => {
    getBookById(id);
  }, [id, getBookById]);

  return bookInfo;
};
