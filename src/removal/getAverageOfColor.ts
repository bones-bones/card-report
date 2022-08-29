import { CardEntry } from '../data-fetch';

export const getAverageOfColor = (list: CardEntry[]) => {
    const reduced = list.reduce((previous, current) => {
        if (!previous[current.color]) {
            previous[current.color] = {
                url: '',
                count: 1,
                color: current.color,
                name: 'Average Non-Removal',
                win_rate: current.win_rate,
            };
        } else {
            const average =
                (previous[current.color].count *
                    previous[current.color].win_rate +
                    current.win_rate) /
                (previous[current.color].count + 1);
            previous[current.color].count += 1;
            previous[current.color].win_rate = average;
        }
        return previous;
    }, {} as Record<string, { url: string; count: number; color: string; name: string; win_rate: number }>);

    return Object.values(reduced) as any as CardEntry[];
};
