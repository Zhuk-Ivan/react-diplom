
export const fetchCharacterDeathInfo = async (name) => {
    const characterName = name.replace(' ', '+');
    const fetchedData = await fetch(`https://www.breakingbadapi.com/api/death?name=${characterName}`);
    return fetchedData.json();
}