import TweetsItem from 'components/TweetsItem/TweetsItem';
import { useSelector } from 'react-redux';
import { selectVisibleTweets } from 'redux/selectors';
import { StyledList, StyledListItem } from './TweetsList.styles';

const TweetsList = () => {
  // const tweets = useSelector(getTweets);
  const visibleTweets = useSelector(selectVisibleTweets);
  //   console.log(tweets);

  return (
    <>
      <StyledList>
        {visibleTweets.map(tweet => (
          <StyledListItem key={tweet.id}>
            <TweetsItem {...tweet} />
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default TweetsList;
