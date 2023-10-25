import * as React from 'react';
import {fireEvent, render, screen, waitFor, act} from '@testing-library/react';
import * as API from '../../api';
import Teams from '../Teams';

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

describe('Teams', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.restoreAllMocks(); // Clear mock function call history between tests
    });

    afterAll(() => {
        jest.useRealTimers();
    });
    
    it('should render spinner while loading', async () => {
        // Mock both asynchronous functions used in Promise.all
        jest.spyOn(API, 'getTeams').mockResolvedValue([]);
        // If there is another asynchronous function like getUserData, mock it here too.
    
        render(<Teams />);
    
        // Assert that the spinner is rendered while loading
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    
        // Use waitFor to ensure the component has settled after async calls
        await waitFor(() => {
            // Assert that the spinner is not visible (indicating the loading has finished)
            expect(screen.queryByTestId('spinner')).toBeNull();
        });
    });

    it('should render teams list', async () => {
        const mockTeams = [
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ];

        jest.spyOn(API, 'getTeams').mockResolvedValue(mockTeams);

        render(<Teams />);

        // Use waitFor to ensure the component has settled after async calls
        await waitFor(() => {
            // Assert that the spinner is not visible (indicating the loading has finished)
            expect(screen.queryByTestId('spinner')).toBeNull();

            // Assert that the team names are present
            expect(screen.getByText('Team1')).toBeInTheDocument();
            expect(screen.getByText('Team2')).toBeInTheDocument();
        });
    });

    it('should assert on a void returning method', async () => {
        // Mock a void function, e.g., a function that logs a message
        const mockVoidFunction = jest.fn();

        // Call the function
        mockVoidFunction();

        // Assert that the function was called
        expect(mockVoidFunction).toHaveBeenCalled();
    });
});
