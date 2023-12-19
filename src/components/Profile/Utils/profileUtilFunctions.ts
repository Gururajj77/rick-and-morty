const API_URL = import.meta.env.VITE_RICK_AND_MORTY_ENDPOINT;


export const fetchSingleCharacter = async (characterId: string | undefined) => {
    const response = await fetch(`${API_URL}/character/${characterId}`);
    if (!response.ok) {
        throw new Error("Something went Wrong!!!");
    }
    return response.json();
};