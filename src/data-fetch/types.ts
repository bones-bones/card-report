export interface CardEntry {
    seen_count: number; //291821,
    avg_seen: number; //7.24705898478862,
    pick_count: number; //29008;
    avg_pick: number; //10.78992002206288;
    game_count: number; //41740;
    win_rate: number; //0.5117153809295639;
    sideboard_game_count: number; //129096;
    sideboard_win_rate: number; //0.5456172150957427;
    opening_hand_game_count: number; // 7066;
    opening_hand_win_rate: number; // 0.5056609114067365;
    drawn_game_count: number; //10044;
    drawn_win_rate: number; //0.4982078853046595;
    ever_drawn_game_count: number; //17110;
    ever_drawn_win_rate: number; //0.5012857977790766;
    never_drawn_game_count: number; //24646;
    never_drawn_win_rate: number; //0.5188671589710298;
    drawn_improvement_win_rate: number; //-0.017581361191953193;
    name: string; //'Ancestral Katana';
    color:
        | 'WUBRG'
        | 'W'
        | 'U'
        | 'B'
        | 'R'
        | 'G'
        | 'WU'
        | 'WB'
        | 'WR'
        | 'WG'
        | 'UB'
        | 'UR'
        | 'UG'
        | 'BR'
        | 'BG'
        | 'RG'
        | 'UBG'
        | 'WUR'
        | 'WBR'
        | ''; //artifact

    rarity: 'common' | 'uncommon' | 'rare' | 'mythic' | 'basic';
    url: string;
    // 'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/9/d9b1ed43-ee6c-43a2-ba94-5bf71c63e070.jpg?1643989697';
    url_back: string; // '';
}
