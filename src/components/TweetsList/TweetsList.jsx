import TweetsItem from 'components/TweetsItem/TweetsItem';
import { useSelector } from 'react-redux';
import { getTweets } from 'redux/selectors';

const TweetsList = () => {
  const tweets = useSelector(getTweets);
  console.log(tweets);

  return (
    <>
      <div>TweetsList</div>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>
            <TweetsItem {...tweet} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TweetsList;
