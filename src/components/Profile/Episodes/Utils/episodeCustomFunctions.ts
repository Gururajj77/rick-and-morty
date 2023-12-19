
export const getEpisodeDetails = async (episodeUrl: string) => {
    const response = await fetch(episodeUrl);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};
