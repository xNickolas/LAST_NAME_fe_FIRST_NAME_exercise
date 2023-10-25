import React, {useState, useEffect} from 'react';
import {ListItem, Teams as TeamsList} from 'types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import SearchBar from '../components/SearchField';
import {Container} from '../components/GlobalComponents';
import {NavigationHeader} from '../components/Header/styles';

const mapTeamsToListItems = (teams: TeamsList[], searchText: string): ListItem[] => {
  return teams
    .filter((team) => team.name.toLowerCase().includes(searchText.toLowerCase()))
    .map((team) => {
      const columns = [
        {
          key: '',
          value: <FontAwesomeIcon icon={faUsers} className="icon-info" />,
        },
        {
          key: '',
          value: <span className='title-1'>Team Name</span>,
        },
        {
          key: '',
          value: team.name,
        },
      ];
      return {
        id: team.id, 
        url: `/team/${team.id}`,
        columns,
        navigationProps: team,
      } as ListItem;
    });
};

const Teams: React.FC = () => {
    const [teams, setTeams] = React.useState<TeamsList[]>([]); 
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>('');


    useEffect(() => {
      const fetchTeamsAndUsers = async () => {
        try {
          const [teamsResponse] = await Promise.all([fetchTeams()]);
          setTeams(teamsResponse);
          setIsLoading(false);
        } catch (error) {
          // Handle errors if necessary
          console.error('Error fetching teams:', error);
          setIsLoading(false);
        }
      };
  
      fetchTeamsAndUsers();
    }, []);

    const handleSearch = (text: string) => {
        setSearchText(text);
    };

    const filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Container>
          <NavigationHeader>
            <Header title="Teams" showBackButton={false} />
            <SearchBar onSearch={handleSearch} />
          </NavigationHeader>
          <List items={mapTeamsToListItems(teams, searchText)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
