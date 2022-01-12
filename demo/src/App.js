import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Note from "./pages/Note";
import Notes from "./pages/Notes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/note/:id" component={Note} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
