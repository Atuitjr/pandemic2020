import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadCountryData } from '../actions/countriesAction';

import up from '../images/up.svg';
import down from '../images/down.svg';

const Dropdown = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(0);

    //get data from store
    const { countries } = useSelector((state: any) => state.countries);

    const liClicked = (position: number) => {
        const countryName = position >= 0 ? countries[position] : 'ALL';
        setSelected(position);
        setShow(!show);
        dispatch(loadCountryData(countryName));
    };

    return (
        <DropdownStyle>
            <DropdownTop onClick={() => setShow(!show)}>
                <h2>{selected >= 0 ? countries[selected] : 'World'}</h2>
                {show ? (
                    <img src={up} alt='UP' />
                ) : (
                    <img src={down} alt='DOWN' />
                )}
            </DropdownTop>
            {show && (
                <ul>
                    {countries.map((country: string, index: number) => (
                        <LiStyled
                            key={`li${index}`}
                            style={{
                                background:
                                    selected === index
                                        ? '#f5f5f5'
                                        : 'transparent',
                            }}
                            onClick={() => liClicked(index)}
                        >
                            <p>{country}</p>
                        </LiStyled>
                    ))}
                    <LiStyled
                        style={{
                            background:
                                selected === -1 ? '#f5f5f5' : 'transparent',
                        }}
                        onClick={() => liClicked(-1)}
                    >
                        <p>World</p>
                    </LiStyled>
                </ul>
            )}
        </DropdownStyle>
    );
};

const DropdownStyle = styled.div`
    width: 15rem;
    border-radius: 1rem;
    margin: 1rem 5rem;
    ul {
        list-style-type: none;
    }
`;

const DropdownTop = styled.div`
    display: flex;
    justify-content: center;
    border: thin solid #696969;
    h2 {
        padding: 0;
        margin: 0;
        font-size: 1.25rem;
    }
    img {
        width: 2rem;
        height: 2rem;
    }
`;

const LiStyled = styled.li`
    cursor: pointer;
    border-bottom: thin solid #696969;
    border-left: thin solid #696969;
    border-right: thin solid #696969;
    padding: 0rem 2rem;
`;

export default Dropdown;
