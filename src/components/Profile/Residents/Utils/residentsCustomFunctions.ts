export const getResidents = async (location: string) => {
    const response = await fetch(location);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};