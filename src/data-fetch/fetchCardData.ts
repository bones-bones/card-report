import { sampleData } from './sampleData';
import { CardEntry } from './types';
export const fetchCardData = async (
    expansion: string
): Promise<CardEntry[]> => {
    if (process.env.LOCAL_DATA) {
        return sampleData;
    }

    const today = new Date();
    // const aWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const response = await fetch(
        `https://www.17lands.com/card_ratings/data?expansion=${expansion}&format=PremierDraft&start_date=${
            '2020-01-01' //  aWeekAgo.toISOString().split('T')[0]
        }&end_date=${today.toISOString().split('T')[0]}`
    );
    const respAsJson = await response.json();
    return respAsJson;
};

// const setReleaseMappings = {
//     SNC: '2022-04-28',
//     DMU: '2022-09-01',
//     HBG: '2022-07-07',
// };
