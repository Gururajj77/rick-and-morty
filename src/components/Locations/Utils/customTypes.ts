type LocationType = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
};

type locationPage = {
    results: LocationType[];
};

type LocationProps = {
    locationDetails: {
        pages: locationPage[];
    };
}
