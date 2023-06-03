import { Typography } from '@mui/material';
import { StyledHome } from './sharedStyles.styles';

export default function Home() {
  return (
    <StyledHome>
      <Typography variant="h2">Welcome to the Home Page!</Typography>
      <Typography variant="body1">
        Here you will find interesting tweets from users all around the world.
        Explore the Tweets page to discover the latest updates, trending topics,
        and engaging conversations.
      </Typography>
    </StyledHome>
  );
}
