import { Route, Switch } from "wouter";
import CharacterLists from "./Pages/CharacterLists";
import "./App.css";
import Character from "./Pages/Character";
import SearchBar from "./Pages/SearchBar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={CharacterLists} />
        <Route path="/search" component={SearchBar} />
        <Route path="/:id" component={Character} />
      </Switch>
    </div>
  );
}

export default App;
