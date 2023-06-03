import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tweetsSlice } from 'redux/tweetsSlice';
import { getIsFollowing } from 'redux/selectors';

const TweetsItem = ({ id, user, avatar, tweets, followers }) => {
  const [followersCount, setFollowersCount] = useState(followers);
  const Follow = useSelector(getIsFollowing);
  const isFollowing = Follow.includes(id);

  const dispatch = useDispatch();

  const handleFollowing = () => {
    if (isFollowing) {
      dispatch(tweetsSlice.deleteFollowing(id));
      setFollowersCount(followersCount - 1);
    } else {
      dispatch(tweetsSlice.addFollowing(id));
      setFollowersCount(followersCount + 1);
    }
  };

  return (
    <article>
      <img src={avatar} alt={user} width="100" height="120" />
      <p>{tweets} TWEETS</p>
      <p>{followersCount} FOLLOWERS</p>
      <button onClick={handleFollowing}>
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </article>
  );
};

export default TweetsItem;
