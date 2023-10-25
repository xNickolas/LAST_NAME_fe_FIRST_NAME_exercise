import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: 20px;
    width: 90%;
    max-width: 100%;

    @media (max-width: 480px) {
        width: 90%;
    }
`;
