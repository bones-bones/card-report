import { ScryfallCard } from './types';

export const mapByKeyword = (set: ScryfallCard[]) => {
    const map: { [key: string]: ScryfallCard[] } = set.reduce((curr, next) => {
        next.keywords.forEach((entry) => {
            curr[entry] = (curr[entry] || []).concat(next);
        });

        return curr;
    }, {} as { [key: string]: ScryfallCard[] });

    return map;
};
