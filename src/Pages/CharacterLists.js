import { Link } from "wouter";
import { useCharacters } from "../hooks/useCharacters";

const CharacterLists = () => {
  const { error, data, loading } = useCharacters();
  console.log(data);

  if (loading) return "Loading...";
  if (error) return <div>something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => (
        <Link to={`/${character.id}`}>
          {/* <p>{JSON.stringify(character, null, 2)}</p> */}
          <img src={character.image} alt="character" />
          <h1>{character.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default CharacterLists;
