import { Route } from "wouter";
import CharacterLists from "./Pages/CharacterLists";
import "./App.css";
import Character from "./Pages/Character";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <CharacterLists />
      </Route>

      <Route path="/:id">
        <Character />
      </Route>
    </div>
  );
}

export default App;
