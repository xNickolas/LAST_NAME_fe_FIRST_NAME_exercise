import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 72%;
    max-width: 100%;
    margin: 0 0 15px;
    text-align: center;
    align-items: center;
`;

export const HeaderRow = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    align-self: stretch;
    max-height: 100%;
    justify-content: space-between;

    div:nth-child(1) {
        text-align: left;
    }

    div:nth-child(2) {
        text-align: end;
    }


    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        div {
            text-align: center !important;
        }
    }
`;


export const NavigationHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

export const Title = styled.h1`
    color: #00325a;
    font-size: 2.50em; 
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -.05em;
    margin: 0 10px 20px;
    // text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 1.50em;
    }
`;

export const Subtitle = styled.h1`
    color: #00325a;
    font-size: 1.50em; 
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -.05em;
    margin: 0 10px 0;
    // text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 1.50em;
    }
`;

export const BackButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0;

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

    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`;
