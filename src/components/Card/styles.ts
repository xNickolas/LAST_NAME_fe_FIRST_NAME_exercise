import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean}>`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    text-align: start;

    background-color: #FFF;
    border: 1px solid #0000000d;
    border-top: 3px solid #00bec8;
    border-radius: 30px;
    
    box-shadow: 0px 20px 40px -20px #a3a5ae;
    padding: 20px;
    margin: 0 15px 20px;
    width: 35%;
    min-height: 150px;
    max-height: 280px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};

    @media (min-width: 1280px) {
        flex: 0 0 auto;
        width: 18% !important;
    }

    @media (min-width: 867px) {
        flex: 0 0 auto;
        width: 25.33333333%;
    }

    @media (max-width: 480px) {
        flex: 1 0 auto;
        width: 80%;
        min-height: 45px;
    }

    p {
        width: 100%;
    }

    p:last-of-type {
        margin-bottom: 0.5em;
    }
`;


export const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;