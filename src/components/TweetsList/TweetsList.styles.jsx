import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;

export const StyledListItem = styled.li`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 380px;
    height: 460px;
  }
`;
