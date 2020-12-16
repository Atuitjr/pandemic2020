import axios from 'axios';
import { searchCountryURL, headers } from '../api';

export const loadCountries = () => async (dispatch: any) => {
    const countriesData = await axios.get(searchCountryURL(), headers);
    dispatch({
        type: 'FETCH_COUNTRIES',
        payload: {
            countries: countriesData.data.response,
        },
    });
};
