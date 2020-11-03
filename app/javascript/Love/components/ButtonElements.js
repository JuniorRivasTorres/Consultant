import styled from 'styled-components';
import {Link} from 'react-scroll';


export const  Button = styled(Link)`
    border-radius: 40px;
    background: ${({primary}) => (primary ? '#AC1010' : '#AC1010')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'white' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-family: Roboto Slab;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
    }
`;