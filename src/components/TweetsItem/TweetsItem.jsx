import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFollowing, deleteFollowing } from 'redux/tweetsSlice';
import { getIsFollowing } from 'redux/selectors';
import { changeFollowers } from 'redux/operations';
import follow from '../../images/picture.png';
import {
  StyledArticle,
  StyledWrapper,
  StyledAvatar,
  StyledInfo,
  Count,
  BtnFollow,
  BtnFollowing,
  StyledImg,
} from './TweetsItem.styles';

const TweetsItem = ({ id, user, avatar, tweets, followers }) => {
  const [followersCount, setFollowersCount] = useState(followers);
  const Follow = useSelector(getIsFollowing);
  const isFollowing = Follow.includes(id);

  const dispatch = useDispatch();

  const handleFollowing = () => {
    if (isFollowing) {
      dispatch(deleteFollowing(id));
      setFollowersCount(followersCount - 1);
      dispatch(changeFollowers({ id, followers: followers - 1 }));
    } else {
      dispatch(addFollowing(id));
      setFollowersCount(followersCount + 1);
      dispatch(changeFollowers({ id, followers: followers + 1 }));
    }
  };

  return (
    <StyledArticle>
      <StyledImg src={follow} alt="Image follow" />
      <StyledWrapper className="avatar-wrapper">
        <StyledAvatar alt={user} src={avatar} sx={{ width: 62, height: 62 }} />
      </StyledWrapper>

      <StyledInfo className="user-info">
        <Count variant="p">{tweets} TWEETS</Count>
        <Count variant="p">{followersCount} FOLLOWERS</Count>
      </StyledInfo>
      {isFollowing ? (
        <BtnFollowing onClick={handleFollowing}>FOLLOWING</BtnFollowing>
      ) : (
        <BtnFollow onClick={handleFollowing}>FOLLOW</BtnFollow>
      )}
    </StyledArticle>
  );
};

export default TweetsItem;
