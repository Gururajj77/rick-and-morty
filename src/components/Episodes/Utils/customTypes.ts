export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
};

export type episodePage = {
    results: Episode[];
};

export type EpisodeProps = {
    episodeDetails: {
        pages: episodePage[];
    };
}