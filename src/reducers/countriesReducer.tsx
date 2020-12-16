const initState = {
    countries: [],
};

const gamesReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES':
            return {
                ...state,
                countries: action.payload.countries,
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;
