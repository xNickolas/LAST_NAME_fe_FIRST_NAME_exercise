import * as React from 'react';
import styled, {keyframes} from 'styled-components';

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerBody = styled.div`
    height: 3rem;
    width: 3rem;
    border: 4px solid #c5c7c9;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: ${spinnerAnimation} 800ms linear infinite;
`;


export const Spinner = () => {
    return <SpinnerBody data-testid="spinner" />;
};
