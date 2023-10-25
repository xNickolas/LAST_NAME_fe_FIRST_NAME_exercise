import * as React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {Teams, UserData} from 'types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {Container, Wrapper} from './styles';

interface Props {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | Teams | null; // Allow null as a value
}

const Card = ({
    id,
    columns,
    url,
    hasNavigation = true,
    navigationProps = null,
}: Props): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();

    const isTeamsOrTeamOverviewRoute =
    location.pathname === '/' || location.pathname.startsWith('/team');
    

    return (
        <Container
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={(e: React.MouseEvent) => {
                if (hasNavigation && navigationProps) { // Check if navigationProps is truthy
                    navigate(url, {
                        state: navigationProps,
                    });
                }
                e.preventDefault();
            }}
        >
            {columns.map(({key: columnKey, value}) => (
                <React.Fragment key={columnKey}>
                    <p className="title-1">{columnKey}</p>
                    <p className="title-2">{value}</p>
                </React.Fragment>
            ))}

            {isTeamsOrTeamOverviewRoute && (
                <Wrapper>
                    <div className="icon-text-container">
                        <span className="title-4">More info</span>
                        <FontAwesomeIcon icon={faEllipsis} className="icon-footer" />
                    </div>
                </Wrapper>
            )}
        </Container>
    );
};

export default Card;
