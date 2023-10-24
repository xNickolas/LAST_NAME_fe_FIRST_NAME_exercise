import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #FFF;
    border: 1px solid #0000000d;
    border-top: 3px solid #00bec8;
    border-radius: 5px;
    
    box-shadow: 0px 30px 40px -20px rgb(0 0 0 / 12%);
    padding: 20px;
    margin: 5px;
    height: 80px;
    max-height: 200px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};

    @media (min-width: 768px) {
        flex: 0 0 auto;
        width: 24.33333333%;
    }

    @media (max-width: 768px) {
        flex: 0 0 auto;
        width: 40%;
    }

    @media (max-width: 600px) {
        flex: 0 0 auto;
        width: 60%;
    }

    p {
        font-size: 14px;
    }
`;

