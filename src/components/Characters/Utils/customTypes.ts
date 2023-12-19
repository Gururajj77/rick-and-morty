type Origin = {
    name: string;
    url: string;
};

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
};


type Page = {
    results: Character[];
};

export type CharacterCardProps = {
    characterCard: {
        pages: Page[];
    };
    onNavigate: (id: number) => void;
};