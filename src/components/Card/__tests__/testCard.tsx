import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Teams} from 'types';
import Card from '..';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Card', () => {

    //Test how the component behaves when an empty columns array is provided.
    it('should render card with empty columns', () => {
        render(<Card columns={[]} />);
        expect(screen.queryByText('columnKey')).not.toBeInTheDocument();
        expect(screen.queryByText('columnValue')).not.toBeInTheDocument();
    });

    // Test how the component behaves when navigationProps is not provided.
    it('should not navigate when card is clicked and navigationProps is missing', () => {
        render(
          <Card
            columns={[{ key: 'columnKey', value: 'columnValue'}]}
            url="path"
          />
        );
      
        fireEvent.click(screen.getByText('columnKey'));
        expect(mockUseNavigate).not.toHaveBeenCalled();
    });

    // Test how the component handles columns with an empty string as the value.
    it('should render card with columns containing empty string values', () => {
        const columns = [
          { key: 'columnKey1', value: 'columnValue1' },
          { key: 'columnKey2', value: '' },
        ];
        render(<Card columns={columns} />);
      
        expect(screen.getByText('columnKey1')).toBeInTheDocument();
        expect(screen.getByText('columnValue1')).toBeInTheDocument();
        expect(screen.getByText('columnKey2')).toBeInTheDocument();
        expect(screen.getByText('')).toBeInTheDocument();
    });

    

    it('should render card with single column', () => {
        const columns = [{ key: 'columnKey', value: 'columnValue' }];
        render(<Card columns={columns} />);
    
        expect(screen.getByText('columnKey')).toBeInTheDocument();
        expect(screen.getByText('columnValue')).toBeInTheDocument();
    });

    it('should render card with multiple columns', () => {
        const columns = [
        { key: 'columnKey1', value: 'columnValue1' },
        { key: 'columnKey2', value: 'columnValue2' },
        { key: 'columnKey3', value: 'columnValue3' },
        { key: 'columnKey4', value: '' },
        ];
        render(<Card columns={columns} />);

        expect(screen.getByText('columnKey1')).toBeInTheDocument();
        expect(screen.getByText('columnValue1')).toBeInTheDocument();
        expect(screen.getByText('columnKey2')).toBeInTheDocument();
        expect(screen.getByText('columnValue2')).toBeInTheDocument();
        expect(screen.getByText('columnKey3')).toBeInTheDocument();
        expect(screen.getByText('columnValue3')).toBeInTheDocument();
        expect(screen.getByText('columnKey4')).toBeInTheDocument();
    });

    it('should navigate when card is clicked and navigation is enabled', () => {
        const navProps = {
            id: '1',
            name: 'Team 1',
        } as Teams;
        render(
            <Card
                columns={[{key: 'columnKey', value: 'columnValue'}]}
                url="path"
                navigationProps={navProps}
            />
        );

        fireEvent.click(screen.getByText('columnKey'));

        expect(mockUseNavigate).toHaveBeenCalledWith('path', {state: navProps});
    });

    it('should not navigate when card is clicked and navigation is disabled', () => {
        render(<Card columns={[{key: 'columnKey', value: 'columnValue'}]} hasNavigation={false} />);

        fireEvent.click(screen.getByText('columnKey'));

        expect(mockUseNavigate).not.toHaveBeenCalled();
    });
});
