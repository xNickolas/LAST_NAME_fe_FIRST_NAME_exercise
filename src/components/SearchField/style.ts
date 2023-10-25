import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    max-width: 100%;
    margin: 0 0 15px;
    text-align: center;
    align-items: center;
    
    
    height: 2.5rem;
    display: flex;
    align-items: center;

    border: none;
    border-radius: 10px;
    padding: 0 15px;
    margin: 0 0 45px;
    box-shadow: 0px 4px 11px 2px #ddd;
    background-color: white;

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 70%;
    }
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    height: auto;
    padding: 0.375rem 0.75rem;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    margin-left: 5px;

    &::focus {
        outline: none;
    }
`;

export const IconWrapper = styled.div`
  margin-right: 10px; 
  color: #00bec8;
`;