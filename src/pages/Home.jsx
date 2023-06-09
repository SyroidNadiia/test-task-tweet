import { useEffect } from 'react';
import viralTweet from 'images/viral_tweet.png';
import { StyledHome, StyledTypography } from './sharedStyles.styles';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <StyledHome>
      <StyledTypography variant="h2">
        Welcome to the Home Page!
      </StyledTypography>
      <StyledTypography variant="body1">
        Here you will find interesting tweets from users all around the world.
        Explore the Tweets page to discover the latest updates, trending topics,
        and engaging conversations.
      </StyledTypography>
      <img src={viralTweet} alt="Viral Tweet" width={500} height={500} />
    </StyledHome>
  );
}
