import { Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
`;

export const StyledTweet = styled.div`
  padding: 20px 0;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
`;

export const StyledImg = styled.img`
  max-width: 500px;
  max-height: 500px;
`;
