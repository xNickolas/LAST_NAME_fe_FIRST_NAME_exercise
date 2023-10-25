import * as React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {ListItem, UserData} from 'types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserTie} from '@fortawesome/free-solid-svg-icons';
import {getTeamOverview, getUserData} from '../api';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';
import List from '../components/List';
import SearchBar from '../components/SearchField'; 

const mapArray = (users: UserData[]): ListItem[] => {
  return users.map((u) => {
    const columns = [
      {
        key: '',
        value: <FontAwesomeIcon icon={faUser} className="icon-info" />,
      },
      {
        key: 'Name:',
        value: `${u.firstName} ${u.lastName}`,
      },
      {
        key: 'Display Name:',
        value: u.displayName,
      },
      {
        key: 'Location:',
        value: u.location,
      },
    ];
    
    return {
      id: u.id,
      url: `/user/${u.id}`,
      columns,
      navigationProps: u,
    };
  }) as ListItem[];
};

const mapTLead = (tlead: UserData): JSX.Element => {
  if (!tlead) {
    return null; // Return null or any other suitable default
  }
  
  const columns = [
    {
      key: <FontAwesomeIcon icon={faUserTie} className="icon-info" />,
      value: <span className='title-1'>Team Lead</span>,
    },

    {
      key: 'Name:',
      value: `${tlead.firstName} ${tlead.lastName}`,
    },
    {
      key: 'Display Name:',
      value: tlead.displayName,
    },
    {
      key: 'Location:',
      value: tlead.location,
    },
  ];
  return <Card columns={columns} url={`/user/${tlead.id}`} navigationProps={tlead} />;
};

interface PageState {
  teamLead?: UserData;
  teamMembers?: UserData[];
}

const TeamOverview = () => {
  const location = useLocation();
  const {teamId} = useParams();
  const [pageData, setPageData] = React.useState<PageState>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [searchText, setSearchText] = React.useState<string>('');

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  React.useEffect(() => {
    const getTeamUsers = async (): Promise<void> => {
      try {
        const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);
        const teamLead = await getUserData(teamLeadId);
  
        const teamMemberPromises = teamMemberIds.map((teamMemberId) => getUserData(teamMemberId));
        const teamMembers = await Promise.all(teamMemberPromises);
  
        setPageData({
          teamLead,
          teamMembers,
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching team users:', error);
        setIsLoading(false);
      }
    };
    getTeamUsers();
  }, [teamId]);

  const filteredUsers = pageData.teamMembers?.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <Header title={location.state.name} subtitle="Team" />
      
      <SearchBar onSearch={(text) => setSearchText(text)} />
      
      {!isLoading && mapTLead(pageData.teamLead)}
      {/* <List items={mapArray(pageData?.teamMembers ?? [])} isLoading={isLoading} /> */}
      <List items={mapArray(filteredUsers || [])} isLoading={isLoading} />     
      
    </Container>
  );
};

export default TeamOverview;
