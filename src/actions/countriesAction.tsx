import axios from 'axios';
import { searchCountryURL, getHistory, headers } from '../api';

export const loadCountries = () => async (dispatch: any) => {
    const countriesData = await axios.get(searchCountryURL(), headers);
    dispatch({
        type: 'FETCH_COUNTRIES',
        payload: {
            countries: countriesData.data.response,
        },
    });
};

export const loadCountryData = (countryName: string) => async (
    dispatch: any
) => {
    const countryData = await axios.get(getHistory(countryName), headers);
    dispatch({
        type: 'FETCH_COUNTRY_DATA',
        payload: {
            country: countryData.data.response,
        },
    });
};
