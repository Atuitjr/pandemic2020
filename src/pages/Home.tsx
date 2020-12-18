/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCountries } from '../actions/countriesAction';

import Dropdown from '../components/Dropdown';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCountries());
    }, [dispatch]);

    return (
        <div className='container'>
            <Dropdown />
        </div>
    );
};

export default Home;
