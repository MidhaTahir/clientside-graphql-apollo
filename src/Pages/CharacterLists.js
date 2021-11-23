import { useQuery, gql } from "@apollo/client";
import { useCharacters } from "../hooks/useCharacters";

const CharacterLists = () => {
  const { error, data, loading } = useCharacters();
  console.log(data);

  if (loading) return "Loading...";
  if (error) return <div>something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => (
        <div>
          {/* <p>{JSON.stringify(character, null, 2)}</p> */}
          <img src={character.image} alt="character" />
          <h1>{character.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default CharacterLists;
