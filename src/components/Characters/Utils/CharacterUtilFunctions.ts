const API_URL = import.meta.env.VITE_RICK_AND_MORTY_ENDPOINT;

export const fetchCharacters = async (page = 1, searchQuery = '', status = '', gender = "", species = "") => {
    const queryParams = new URLSearchParams({ page: String(page) });

    if (searchQuery) {
        queryParams.set('name', searchQuery);
    }

    if (status) {
        queryParams.set('status', status);
    }

    if (gender) {
        queryParams.set('gender', gender);
    }

    if (species) {
        queryParams.set('species', species);
    }

    const response = await fetch(`${API_URL}/character?${queryParams.toString()}`);
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

