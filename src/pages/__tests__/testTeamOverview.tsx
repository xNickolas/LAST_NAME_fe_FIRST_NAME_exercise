import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import * as API from '../../api';
import TeamOverview from '../TeamOverview';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            teamName: 'Some Team',
        },
    }),
    useNavigate: () => ({}),
    useParams: () => ({
        teamId: '1',
    }),
}));


describe('TeamOverview', () => {
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

    it('should render team overview users', async () => {
        const teamOverview = {
            id: '1',
            teamLeadId: '2',
            teamMemberIds: ['3', '4', '5'],
        };
        const userData = {
            id: '2',
            firstName: 'userData',
            lastName: 'userData',
            displayName: 'userData',
            location: '',
            avatar: '',
        };

        jest.spyOn(API, 'getTeamOverview').mockResolvedValue(teamOverview);
        jest.spyOn(API, 'getUserData').mockResolvedValue(userData);

        render(<TeamOverview />);

        await waitFor(() => {
            expect(screen.queryAllByText('userData')).toHaveLength(4);
        });
    });

    // Mock API functions to throw an error. Handling API errors gracefully.
    it('should handle API error gracefully', async () => {
        jest.spyOn(API, 'getTeamOverview').mockRejectedValue(new Error('API error'));
        jest.spyOn(API, 'getUserData').mockRejectedValue(new Error('API error'));
      
        render(<TeamOverview />);
      
        await waitFor(() => {
          expect(screen.getByText('Error: API error')).toBeInTheDocument();
        });
    });

    // Mock API functions to return expected data. 
    // Verifying that API functions are called and that a void method (setIsLoading) is also called.
    it('should call API functions and handle void methods', async () => {
        jest.spyOn(API, 'getTeamOverview').mockResolvedValue({
            id: '1',
            teamLeadId: '2',
            teamMemberIds: ['3', '4', '5'],
        });

        const mockSetIsLoading = jest.fn();
        jest.spyOn(React, 'useState').mockReturnValueOnce([false, mockSetIsLoading]);

        render(<TeamOverview />);

        // Verify that API functions were called
        await waitFor(() => {
            expect(API.getTeamOverview).toHaveBeenCalledWith('1');
            expect(API.getUserData).toHaveBeenCalledWith('2');
            expect(API.getUserData).toHaveBeenCalledWith('3');
            expect(API.getUserData).toHaveBeenCalledWith('4');
            expect(API.getUserData).toHaveBeenCalledWith('5');
        });

        // Verify that void method (setIsLoading) was called
        expect(mockSetIsLoading).toHaveBeenCalledWith(true);
        expect(mockSetIsLoading).toHaveBeenCalledWith(false);
    });
});
