import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px;
    max-width: 1140px;
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;
