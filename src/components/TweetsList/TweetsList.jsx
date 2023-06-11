import { useSelector } from 'react-redux';
import TweetsItem from 'components/TweetsItem/TweetsItem';
import { selectVisibleTweets } from 'redux/selectors';
import { StyledList, StyledListItem } from './TweetsList.styles';

const TweetsList = () => {
  const visibleTweets = useSelector(selectVisibleTweets);
 
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
