import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  selectCharacters,
  selectCharactersLoading,
  selectCharactersError
} from "../../../store/characters";
import { useNavigate  } from "react-router-dom";
import Pagination from "../../UI/Pagination";
import CharactersList from "./CharactersList";


export const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const loading = useSelector(selectCharactersLoading);
  const error = useSelector(selectCharactersError);

  const navigate = useNavigate ();

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let pageNumber = params.get('page') !== null ? params.get('page') : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const [charactersPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = pageNumber=> {
    setCurrentPage(pageNumber)
    navigate('/characters?page=' + pageNumber, { replace: true })
}

  return (
    <div>
        <CharactersList characters={currentCharacters} loading={loading} error={error} ></CharactersList>
        <Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={paginate}></Pagination>
    </div>
  );
};

export default Characters