export const fetchEpisodesArray = async () => {
    const fetchedData = await fetch(`https://www.breakingbadapi.com/api/episodes`);
    return fetchedData.json();
}