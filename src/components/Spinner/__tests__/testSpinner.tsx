import React from 'react';
import {render, screen} from '@testing-library/react';
import {Spinner} from '..';

describe('Spinner', () => {
    it('should render spinner', () => {
        render(<Spinner />);

        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('should not display an error message', () => {
        render(<Spinner />);
    
        const errorMessage = screen.queryByText('An error occurred');
        expect(errorMessage).not.toBeInTheDocument();
    });

});
