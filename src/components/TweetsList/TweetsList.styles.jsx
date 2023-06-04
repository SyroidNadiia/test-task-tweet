import styled from 'styled-components';
import { List, ListItem } from '@mui/material';

export const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;

export const StyledListItem = styled(ListItem)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 380px;
    height: 460px;
  }
`;
