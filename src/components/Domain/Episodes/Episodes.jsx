import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEpisodes,
  selectEpisodes,
  selectEpisodesLoading,
  selectEpisodesError
} from "../../../store/episodes";
import { fetchCharacters, selectCharacters } from "../../../store/characters";
import Spinner from "../../UI/Spinner";
import EpisodesItem from "./EpisodesItem";
import { Tabs, Tab } from 'react-bootstrap';
import './Episodes.scss';

export const Episodes = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(selectEpisodes);
  const characters = useSelector(selectCharacters);
  const loading = useSelector(selectEpisodesLoading);
  const error = useSelector(selectEpisodesError);

  useEffect(() => {
    dispatch(fetchEpisodes());
    dispatch(fetchCharacters());
  }, [dispatch]);
  
  if (loading && episodes.length === 0 && characters.length === 0) {
    return <Spinner />;
}

if (error) {
    return <div>Sorry, we can't load the data</div>;
}

  return (
    <Tabs defaultActiveKey="bad" id="uncontrolled-tab-example" className="mb-3 episodes_nav">
        <Tab eventKey="bad" title="Breaking Bad">
            {episodes.filter((episode) =>  episode.series === "Breaking Bad").map((episode) =>
                <EpisodesItem key={episode.char_id} characters={characters} episode={episode}></EpisodesItem>
            )}
        </Tab>
        <Tab eventKey="sol" title="Better Call Saul">
            {episodes.filter((episode) =>  episode.series === "Better Call Saul").map((episode) =>
                <EpisodesItem key={episode.char_id} characters={characters} episode={episode}></EpisodesItem>
            )}
        </Tab>
  </Tabs>
  );
};

export default Episodes