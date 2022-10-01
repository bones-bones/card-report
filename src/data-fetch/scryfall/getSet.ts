import { ScryfallCard } from './types';

export const getSet = async (setId = 'neo') => {
    const toReturn: ScryfallCard[] = [];
    let nextPage = 'https://api.scryfall.com/cards/search?q=set=' + setId;

    while (nextPage) {
        const response = await fetch(nextPage).then((resp) => resp.json());
        toReturn.push(...response.data);
        nextPage = response.next_page;
    }
    return toReturn;
};
