import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Container, Input, IconWrapper} from './style';

const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchText(value);
        onSearch(value);
    };

    return (
        <Container>
            <IconWrapper>
                <FontAwesomeIcon icon={faSearch} className="icon-style" />
            </IconWrapper>
            <Input
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={handleSearch}
            />
        </Container>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
