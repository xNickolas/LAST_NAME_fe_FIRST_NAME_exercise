import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {HeaderContainer, NavigationHeader, HeaderRow, BackButton, Title, Subtitle} from './styles';

interface Props {
    title: string;
    subtitle?: string;
    showBackButton?: boolean;
}

const Header = ({title, showBackButton = true, subtitle}: Props) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <NavigationHeader>
                <HeaderRow>
                    <div>
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
                    </div>

                    <div>
                        {subtitle && <Subtitle>{subtitle}</Subtitle>}
                        <Title>{title}</Title>
                    </div>
                </HeaderRow>
            </NavigationHeader>
        </HeaderContainer>
    );
};

export default Header;
