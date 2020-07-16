import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const FooterWrapper = styled.div`
 color: white;
 height 100px;
 background-color: blue;
 background-image: linear-gradient(to bottom right, #00c1d5, #56efb0);
 display: flex;
 justify-content: center;
 align-items: center;

`;
function Footer() {
    return (
<div>
    <FooterWrapper>
    <FontAwesomeIcon icon={faHeart} />
<FontAwesomeIcon icon={faCoffee} />
 </FooterWrapper>



</div>

    )
}

export default Footer;