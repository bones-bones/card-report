import { sampleFilters } from './sampleFilters';

export const fetchFilters = async (): Promise<typeof sampleFilters> => {
    if (process.env.LOCAL_DATA) {
        return sampleFilters;
    }

    const response = await fetch(`https://www.17lands.com/data/filters`);
    const respAsJson = await response.json();
    return respAsJson;
};
