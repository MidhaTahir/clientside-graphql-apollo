import React from "react";
import { useRoute } from "wouter";
import { useCharacter } from "../hooks/useCharacter";

const Character = () => {
  const [match, params] = useRoute("/:id");
  const { data, loading, error } = useCharacter(params.id);

  if (loading) return "Loading...";
  if (error) return <div>something went wrong</div>;

  return (
    <div className="Character">
      <img
        src={data.character.image}
        width={750}
        height={750}
        alt="characterImage"
      />

      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
