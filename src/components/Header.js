import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
 color: white;
background-image: linear-gradient(to bottom right, #00c1d5, #56efb0);
`;

function Header() {

    return(
        <HeaderWrapper> 
    <h1>NASA</h1>
    <h2>Photo Of the Day</h2>
        </HeaderWrapper>
    )
}

export default Header;