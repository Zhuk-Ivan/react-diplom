import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { Accordion } from 'react-bootstrap';
import {
  fetchCharacterDetails,
  selectCharacterDetails,
  selectCharacterDetailsLoading,
  selectCharacterDetailsError
} from "../../../store/characterDetails";

import Spinner from "../../UI/Spinner";
import { CharacterDeath } from './CharacterDeath';
import { CharacterQuotes } from "./CharacterQuotes";
import './CharacterDetails.scss';

export const CharacterDetails = () => {
  const dispatch = useDispatch();
  const param = useParams()
  const character = useSelector(selectCharacterDetails);
  const loading = useSelector(selectCharacterDetailsLoading);
  const error = useSelector(selectCharacterDetailsError);

  useEffect(() => {
    dispatch(fetchCharacterDetails(param));
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Sorry, we can't load the data</div>;
  }

  return (
    <section className='character_details'>
      <div className="character_details_img">
        <img src={character.img} alt={character.name} />
      </div>
      <div className="character_details_info">
        <h1 className='character_name'>{character.name}</h1>
        <ul className='characters_info_list'>
          <li>
            <strong>Actor Name:</strong> {character.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {character.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {character.birthday}
          </li>
          <li>
            <strong>Appearance:</strong> {character.appearance}
          </li>
        </ul>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Current character status</Accordion.Header>
            <Accordion.Body>
              {character.dead ? <CharacterDeath name={character.name} /> : character.status === 'Presumed dead' ? <h4>Presumed dead</h4> : <h4>Character is alive</h4>}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Character quotes</Accordion.Header>
            <Accordion.Body>
              <CharacterQuotes name={character.name} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default CharacterDetails;