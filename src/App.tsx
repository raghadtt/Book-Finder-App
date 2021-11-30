import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
