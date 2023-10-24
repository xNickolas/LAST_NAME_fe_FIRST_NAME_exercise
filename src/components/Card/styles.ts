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
    min-height: 80px;
    max-height: 200px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};

    @media (min-width: 768px) {
        flex: 1 0 auto;
        width: 25%;
    }

    @media (max-width: 768px) {
        flex: 1 0 auto;
        width: 35%;
    }

    @media (max-width: 480px) {
        flex: 1 0 auto;
        width: 80%;
        min-height: 45px;
    }



    p {
        font-size: 14px;

        @media (max-width: 768px) {
            font-size: 12px; 
        }

        @media (max-width: 640px) {
            font-size: 11px; 
        }

        @media (max-width: 480px) {
            font-size: 14px; 
        }
    }
`;

