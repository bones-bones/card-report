import { sampleFilters } from './sampleFilters';

const USE_LOCAL_DATA = true;
export const fetchFilters = async (): Promise<typeof sampleFilters> => {
    if (USE_LOCAL_DATA) {
        return sampleFilters;
    }

    const repsonse = await fetch(`https://www.17lands.com/data/filters`);
    const respAsJson = await repsonse.json();
    return respAsJson;
};
