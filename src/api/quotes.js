
export const fetchCharacterQuotesArray = async (name) => {
    const characterName = name.replace(' ', '+');
    const fetchedData = await fetch(`https://www.breakingbadapi.com/api/quote?author=${characterName}`);
    return fetchedData.json();
}