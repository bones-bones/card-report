import { sampleData } from './sampleData';
import { CardEntry } from './types';
const USE_LOCAL_DATA = false;
export const fetchCardData = async (
    expansion: string
): Promise<CardEntry[]> => {
    if (USE_LOCAL_DATA) {
        return sampleData;
    }

    const repsonse = await fetch(
        `https://www.17lands.com/card_ratings/data?expansion=${expansion}&format=PremierDraft&start_date=2021-12-02&end_date=2022-04-02`
    );
    const respAsJson = await repsonse.json();
    return respAsJson;
};
