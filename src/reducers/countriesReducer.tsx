const initState = {
    countries: [],
    countryData: [],
};

const gamesReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES':
            return {
                ...state,
                countries: action.payload.countries,
            };
        case 'FETCH_COUNTRY_DATA':
            return {
                ...state,
                countryData: action.payload.country,
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;
