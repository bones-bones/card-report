import { sampleData } from './sampleData';
import { CardEntry } from './types';
const USE_LOCAL_DATA = false;
export const fetchCardData = async (
    expansion: string
): Promise<CardEntry[]> => {
    if (USE_LOCAL_DATA) {
        return sampleData;
    }

    const today = new Date();
    const aWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const repsonse = await fetch(
        `https://www.17lands.com/card_ratings/data?expansion=${expansion}&format=PremierDraft&start_date=${
            aWeekAgo.toISOString().split('T')[0]
        }&end_date=${today.toISOString().split('T')[0]}`
    );
    const respAsJson = await repsonse.json();
    return respAsJson;
};
