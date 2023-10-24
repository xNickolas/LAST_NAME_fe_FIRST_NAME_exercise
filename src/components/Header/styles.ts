import styled from 'styled-components';

export const HeaderContainer = styled.div`
    max-width: 100%;
    margin: 45px 10px 45px;
    text-align: center;
    align-items: center;
`;

export const Title = styled.h1`
    color: #00325a;
    font-size: 2.50em; 
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -.05em;
    margin: 0 10px 10px;
    // text-transform: uppercase;
`;

export const NavigationHeader = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

export const BackButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px 20px;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;

    color: #00bec8;
    font-weight: 600;

    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    padding: 0.483rem 0.933rem;
    background-color: transparent;
    background-image: none;
    border-width: 2px;
    border: 2px solid #00bec8;
    border-radius: 35px;
    -webkit-appearance: button;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    span {
        color: white;
        font-size: 12px;
        background-color: #00325a;
        display: inline-block;
        height: 25px;
        line-height: 24px;
        width: 24px;
        border-radius: 50%;
        margin-right: 10px;
        transition: all 0.1s linear;
    }

    :hover {
        color: white;
        background-color: #00bec8;
        box-shadow: none;

        span {
            transform: translateX(-5px);
        }
    }
`;
