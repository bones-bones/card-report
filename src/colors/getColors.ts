export const getColor = (color: MTGColor) => {
    switch (color) {
        case 'W':
            return 'rgb(248, 231, 185)'; //rgb(249,250,244)
        case 'U':
            return 'rgb(179, 206, 234)'; //rgb(14, 104, 171)
        case 'B':
            return 'rgb(166, 159, 157)'; //rgb(21,11,0)
        case 'R':
            return 'rgb(235, 159, 130)'; //rgb(211, 32, 42)
        case 'G':
            return 'rgb(196, 211, 202)'; //rgb(0, 115, 62)
        case '':
            return '#e8dcd0'; //7a5e52
    }
};

export type MTGColor = 'W' | 'U' | 'B' | 'R' | 'G' | '';
