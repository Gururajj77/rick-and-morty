const API_URL = import.meta.env.VITE_RICK_AND_MORTY_ENDPOINT;

export const fetchEpisodes = async (page = 1, searchQuery = "") => {

    const queryParams = new URLSearchParams({ page: String(page) });

    if (searchQuery) {
        queryParams.set('name', searchQuery);
    }

    const response = await fetch(`${API_URL}/episode?${queryParams.toString()}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};