const baseUrl = `https://${process.env.REACT_APP_HOST}/`;

//SEARCH A COUNTRY
export const searchCountryURL = (country: string = ''): string => {
    const stringCountry = country !== '' ? `?search=${country}` : ``;
    return `${baseUrl}countries${stringCountry}`;
};

//GET STATISTICS -- WORLD IS ALL
export const getStatistics = (country: string = ''): string => {
    const stringCountry = country !== '' ? `?country=${country}` : ``;
    return `${baseUrl}statistics${stringCountry}`;
};

//GET COMPLETE DATA OF COUNTRY | ALL
export const getHistory = (country: string, date: string = ''): string => {
    const stringDate = date !== '' ? `&amp;day=${date}` : ``;
    return `${baseUrl}statistics?country=${country}${stringDate}`;
};
