
export const fetchAllCharacters = async () => {
    const fetchedData = await fetch(`https://www.breakingbadapi.com/api/characters`);
    return fetchedData.json();
  };
  
  
  export const fetchCharacterDetailsInfo = async (id) => {
    const fetchedData = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);

    return fetchedData.json();
  };

  export const fetchCharacterDetailsInfoByName = async (name) => {
    const characterName = name.replace(' ', '+');
    const fetchedData = await fetch(`https://www.breakingbadapi.com/api/characters/name=${characterName}`);

    return fetchedData.json();
  };