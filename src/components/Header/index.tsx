import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {HeaderContainer, NavigationHeader, BackButton, Title} from './styles';

interface Props {
    title: string;
    showBackButton?: boolean;
}

const Header = ({title, showBackButton = true}: Props) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <NavigationHeader>
                {showBackButton && (
                    <BackButton
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={faArrowLeft} className="icon-style" />
                        </span>
                        Back
                    </BackButton>
                )}
                <Title>{title}</Title>
            </NavigationHeader>
        </HeaderContainer>
    );
};

export default Header;
