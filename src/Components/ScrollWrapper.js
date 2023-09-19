import React from 'react';
import styled from 'styled-components';

const Scroll = styled.section`
    overflow-y: scroll;
    border-radius: 15px;
    border: 1px;
    height: 750px;

    &::-webkit-scrollbar {
        display: none;
      }
`;

export const ScrollWrapper = ({children}) => {
    return (
        <Scroll>
            {children}
        </Scroll>
    );
}