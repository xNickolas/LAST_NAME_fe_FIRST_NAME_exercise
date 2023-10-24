import React, {useState, useEffect} from 'react';
import {ListItem, Teams as TeamsList} from 'types';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import SearchBar from '../components/SearchField';
import {Container} from '../components/GlobalComponents';

const mapTeamsToListItems = (teams, searchText) => {
    return teams
      .filter((team) => team.name.toLowerCase().includes(searchText.toLowerCase()))
      .map((team) => {
        const columns = [
          {
            key: 'Name',
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

const Teams = () => {
    const [teams, setTeams] = React.useState<TeamsList[]>([]); 
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        const getTeams = async () => {
          const response = await fetchTeams();
          setTeams(response);
          setIsLoading(false);
        };
        getTeams();
    }, []);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <SearchBar onSearch={handleSearch} />
            <List items={mapTeamsToListItems(teams, searchText)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
