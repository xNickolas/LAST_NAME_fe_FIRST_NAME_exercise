import * as React from 'react';
import {ListItem, Teams as TeamsList} from 'types';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import {Container} from '../components/GlobalComponents';

const mapTeamsToListItems = (teams: TeamsList[]): ListItem[] => {
    return teams.map(team => {
        const columns = [
            {   
                key: 'Name:',
                value: team.name,
            },
        ];
        return {
            id: team.id,
            url: `/team/${team.id}`,
            columns,
            navigationProps: team,
        };
    });
};

const Teams = () => {
    const [teams, setTeams] = React.useState<TeamsList[]>([]); // Use explicit typing for state
    const [isLoading, setIsLoading] = React.useState<boolean>(true); // Use boolean for isLoading

    React.useEffect(() => {
        const fetchAndSetTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };
        fetchAndSetTeams();
    }, []);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <List items={mapTeamsToListItems(teams)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
