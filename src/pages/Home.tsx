/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountries } from '../actions/countriesAction';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCountries());
    }, [dispatch]);

    //get data from store
    const { countries } = useSelector((state: any) => state.countries);

    return (
        <div className='container'>
            {countries.map((country: string) => (
                <h1>{country}</h1>
            ))}
        </div>
    );
};

export default Home;
