import React from 'react';
import {render, screen} from '@testing-library/react';
import List from '..';

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => jest.fn(),
}));

describe('List', () => {

    // Ensure the component behaves correctly when there are no items. It should render no cards or the spinner if isLoading is true.
    it('should not render any cards when there are no items', () => {
        render(<List isLoading={false} items={[]} />);
        expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
    });

    // Check if the spinner is displayed when the component is loading, even if no items are provided.
    it('should render the spinner when it is loading and there are no items', () => {
        render(<List isLoading items={[]} />);
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
        expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
    });

    // Ensure that the rendered cards contain the correct content based on the provided items.
    it('should render cards with correct content', () => {
        const items = [
          {
            id: '1',
            columns: [
              {
                key: 'columnKey1',
                value: 'columnValue1',
              },
            ],
          },
        ];
        render(<List isLoading={false} items={items} />);
        expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
        expect(screen.getByText('columnKey1')).toBeInTheDocument();
        expect(screen.getByText('columnValue1')).toBeInTheDocument();
    });

    it('should render spinner and not render items when it is loading', () => {
        const items = [
            {
                id: '1',
                columns: [
                    {
                        key: 'columnKey1',
                        value: 'columnValue1',
                    },
                ],
            },
        ];
        render(<List isLoading items={items} />);

        expect(screen.getByTestId('spinner')).toBeInTheDocument();
        expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
    });

    it('should not render spinner and render items when it is not loading', () => {
        const items = [
            {
                id: '1',
                columns: [
                    {
                        key: 'columnKey1',
                        value: 'columnValue1',
                    },
                ],
            },
        ];
        render(<List isLoading={false} items={items} />);

        expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
        expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
    });

    it('should render multiple card when multiple items', () => {
        const items = [
            {
                id: '1',
                columns: [
                    {
                        key: 'columnKey1',
                        value: 'columnValue1',
                    },
                ],
            },
            {
                id: '2',
                columns: [
                    {
                        key: 'columnKey2',
                        value: 'columnValue2',
                    },
                ],
            },
        ];
        render(<List isLoading={false} items={items} />);

        expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
        expect(screen.getByTestId('cardContainer-2')).toBeInTheDocument();
    });
});
