import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {ListItem, Teams as TeamsList} from 'types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser, faEllipsis} from '@fortawesome/free-solid-svg-icons';
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
          key: <span className='title-3'>Team Name</span>,
          value: team.name,
        },
        {
          key: '',
          value: (
            <div className="icon-container">
              <FontAwesomeIcon icon={faCircleUser} className="icon-teams" />
              {Array(2).fill(
                <FontAwesomeIcon icon={faCircleUser} className="icon-teams" />
              )}
            </div>
          ),
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
    const [visibleCards, setVisibleCards] = useState(16); // Number of cards to display initially
    const [totalCards, setTotalCards] = useState(0); // Total number of cards available



    useEffect(() => {
      const fetchTeamsAndUsers = async () => {
        try {
          const [teamsResponse] = await Promise.all([fetchTeams()]);
          setTotalCards(teamsResponse.length);
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

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      if (scrollY + windowHeight >= documentHeight && visibleCards < totalCards) {
        // Load more cards
        setVisibleCards(Math.min(visibleCards + 12, totalCards));
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleCards, totalCards]);
  
    const displayedTeams = teams.slice(0, visibleCards);
    const displayItems = mapTeamsToListItems(displayedTeams, searchText);

    const filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Container>
          <NavigationHeader>
            <Header title="Teams" showBackButton={false} />
            <SearchBar onSearch={handleSearch} />
          </NavigationHeader>
          <List items={displayItems} isLoading={isLoading} />
          {isLoading && <p>Loading...</p>}
          {visibleCards < totalCards && <p>Loading more...</p>}
        </Container>
    );
};

export default Teams;
