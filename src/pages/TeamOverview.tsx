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
    var columns = [
      {
        key: '',
        value: <FontAwesomeIcon icon={faUser} className="icon-people" />,
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
  var columns = [
    {
      key: '',
      value: <FontAwesomeIcon icon={faUserTie} className="icon-people" />,
    },
    {
      key: 'Team Lead',
      value: '',
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
      const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);
      const teamLead = await getUserData(teamLeadId);

      const teamMembers = [];
      for (const teamMemberId of teamMemberIds) {
        const data = await getUserData(teamMemberId);
        teamMembers.push(data);
      }
      setPageData({
        teamLead,
        teamMembers,
      });
      setIsLoading(false);
    };
    getTeamUsers();
  }, [teamId]);

  const filteredUsers = pageData.teamMembers?.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <Header title={`Team ${location.state.name}`} />
      <SearchBar onSearch={setSearchText} />
      
      {!isLoading && mapTLead(pageData.teamLead)}
      {/* <List items={mapArray(pageData?.teamMembers ?? [])} isLoading={isLoading} /> */}
      <List items={mapArray(filteredUsers || [])} isLoading={isLoading} />     
      
    </Container>
  );
};

export default TeamOverview;
