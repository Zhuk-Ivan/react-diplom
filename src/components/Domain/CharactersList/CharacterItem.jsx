import React from 'react'
import { Link } from "react-router-dom";
import './CharacterListItem.scss';
const CharacterItem = ({ character }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={character.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{character.name}</h1>
          <ul className='character_occupation'>
            {character.occupation.map((occupation) => (
                <li key={occupation}>
                  <strong>{occupation}</strong>
                </li>
              ))}
          </ul>
          <Link to={`/characters/${character.char_id}`}>
            More info
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
