import { sampleFilters } from './sampleFilters';

export const fetchFilters = async (): Promise<typeof sampleFilters> => {
    console.log(process.env.LOCAL_DATA,'LOCAL_DATA',process.env)
    if (process.env.LOCAL_DATA==='true') {
        return sampleFilters;
    }

    const response = await fetch(`https://www.17lands.com/data/filters`,
    {mode:'cors'});
    const respAsJson = await response.json();
    return respAsJson;
};
