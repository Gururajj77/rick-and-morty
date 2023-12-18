const API_URL = import.meta.env.VITE_RICK_AND_MORTY_ENDPOINT;

export const fetchCharacters = async (page = 1) => {
    const response = await fetch(`${API_URL}/character?page=${page}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};


export const getStatusClass = (status: string) => {
    switch (status) {
        case 'Alive':
            return 'alive';
        case 'Dead':
            return 'dead';
        default:
            return 'unknown';
    }
};
