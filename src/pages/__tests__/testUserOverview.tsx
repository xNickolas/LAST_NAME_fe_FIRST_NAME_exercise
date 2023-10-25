import React from 'react';
import {render, screen} from '@testing-library/react';
import UserOverview from '../UserOverview';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
        },
    }),
    useNavigate: () => ({}),
}));

describe('UserOverview', () => {

    // Ensure user details are displayed - 
    it('should render UserOverview with user details', () => {
        render(<UserOverview />);
    
        expect(screen.getByText('Test User')).toBeInTheDocument();
        expect(screen.getByText('userName')).toBeInTheDocument();
        expect(screen.getByText('location')).toBeInTheDocument();
    });

    // Ensure no user details are displayed
    it('should render UserOverview without user details', () => {
        // Mock the useLocation hook to simulate missing user details
        jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue({
          state: undefined,
        });
    
        render(<UserOverview />);
    
        expect(screen.queryByText('Test User')).toBeNull();
        expect(screen.queryByText('userName')).toBeNull();
        expect(screen.queryByText('location')).toBeNull();
    });

    it('should not navigate when the back button is clicked', () => {
        // Mock the useNavigate hook to check if it's not called
        const mockUseNavigate = jest.fn();
        jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockUseNavigate);
    
        render(<UserOverview />);
    
        // Find the back button and simulate a click
        const backButton = screen.getByText('Back');
        backButton.click();
    
        // Assert that the useNavigate hook was not called
        expect(mockUseNavigate).not.toHaveBeenCalled();
    });

    it('should render UserOverview without the back button', () => {
        // Mock the useNavigate hook to check if it's not called
        jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue({
          state: {
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
          },
        });
    
        render(<UserOverview />);
    
        // Assert that the back button is not present
        expect(screen.queryByText('Back')).toBeNull();
    });

});
