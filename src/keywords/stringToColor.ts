export const stringToColor = (value: string) => {
    const fullString = (value + 'zzz').split('').reduce((prev, curr) => {
        return prev + curr.charCodeAt(0);
    }, '');
    const red = parseInt(fullString.substring(0, 3)) % 255;
    const green = parseInt(fullString.substring(3, 6)) % 255;
    const blue = parseInt(fullString.substring(6, 9)) % 255;
    return `rgb( ${(red + 255) / 2}, ${(green + 255) / 2}, ${
        (blue + 255) / 2
    })`;
};
