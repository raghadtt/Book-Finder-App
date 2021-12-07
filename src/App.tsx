import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main";
import BookReview from "./pages/bookReview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookReview" element={<BookReview />} />
      </Routes>
    </Router>
  );
}

export default App;
