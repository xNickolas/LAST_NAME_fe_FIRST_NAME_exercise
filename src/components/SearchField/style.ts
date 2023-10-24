import styled from 'styled-components';

export const Container = styled.div`
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    padding: 0 15px;
    box-shadow: 0px 0px 8px #ddd;
    background-color: white;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    background-color: transparent;
    border: none;
    height: 100%;
    font-size: 1rem;
    width: 100%;
    margin-left: 5px;

    &::focus {
        outline: none;
    }
`;

export const IconWrapper = styled.div`
  margin-right: 10px; 
  color: #00bec8;
`;