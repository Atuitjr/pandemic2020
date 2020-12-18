import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import up from '../images/up.svg';
import down from '../images/down.svg';

const Dropdown = () => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(0);

    //get data from store
    const { countries } = useSelector((state: any) => state.countries);

    return (
        <DropdownStyle>
            <DropdownTop onClick={() => setShow(!show)}>
                <h2>{countries[selected]}</h2>
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
                            className='dd-list-item'
                            style={{
                                background:
                                    selected === index
                                        ? '#f5f5f5'
                                        : 'transparent',
                            }}
                            onClick={() => {
                                setSelected(index);
                                setShow(!show);
                            }}
                        >
                            <p>{country}</p>
                        </LiStyled>
                    ))}
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
