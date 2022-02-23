import React from 'react'
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap"
import './Episodes.scss';

const EpisodesItem = ({ characters, episode }) => {
  return (
      <Card className='episodes_card'>
          <Card.Header>{episode.title}</Card.Header>
          <Card.Body className='episode_card_body'>
            <Card.Subtitle className="mb-2 text-muted episode_appearance">Season {episode.season} - Episode {episode.episode}</Card.Subtitle>
            <div className='eposide_characters'>
                <h5>Characters: </h5>
                    <ul className='episode_characters_list'>{ 
                        episode.characters.map((character) => {
                            return characters.filter(x => x.name === character).length 
                                ?  <li key={character}>
                                        <Link to={`/characters/${characters.filter(x => x.name === character)[0].char_id}`}>{character}</Link> 
                                    </li>
                                : <li key={character}>{character}</li>
                        })
                        }
                </ul>
            </div>
        </Card.Body>
        <Card.Footer className="text-muted">Air date: {episode.air_date}</Card.Footer>
      </Card>
  )
}

export default EpisodesItem