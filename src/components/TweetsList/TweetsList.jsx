import TweetsItem from 'components/TweetsItem/TweetsItem';
import { useSelector } from 'react-redux';
import { getTweets } from 'redux/selectors';
import { StyledList, StyledListItem } from './TweetsList.styles';

const TweetsList = () => {
  const tweets = useSelector(getTweets);
  console.log(tweets);

  return (
    <>
      <StyledList>
        {tweets.map(tweet => (
          <StyledListItem key={tweet.id}>
            <TweetsItem {...tweet} />
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default TweetsList;
