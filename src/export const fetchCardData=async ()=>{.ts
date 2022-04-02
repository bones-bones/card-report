export const fetchCardData = async () => {
    const repsonse = await fetch(
        `https://www.17lands.com/card_ratings/data?expansion=NEO&format=PremierDraft&start_date=2021-12-02&end_date=2022-04-02`
    );
    const respAsJson = await repsonse.json();
};
