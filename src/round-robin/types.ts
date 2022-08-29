export type Player = {
    name: string;
};

export type Event = {
    players: string[];
    matches: {
        playerMatches: PlayerMatchResult[];
        tie: number;
    }[];
};

export type PlayerMatchResult = {
    playerName: string;
    win: number;
};
