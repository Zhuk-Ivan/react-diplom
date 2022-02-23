import React from 'react';
import CharacterItem from "./CharacterItem";
import Spinner from "../../UI/Spinner";

const CharactersList = ({ characters, loading, error }) => {
    
    if (loading && characters.length === 0) {
        return <Spinner />;
    }

    if (error) {
        return <div>Sorry, we can't load the data</div>;
    }
    
    return (
        <section className='cards'>
            {characters.map((character) => (
                <CharacterItem key={character.char_id} character={character}></CharacterItem>
            ))}
        </section>
  );
};

export default CharactersList;