import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFollowing, deleteFollowing } from 'redux/tweetsSlice';
import { getIsFollowing } from 'redux/selectors';
import { changeFollowers } from 'redux/operations';
import follow from 'images/picture.png';
import logo from 'images/Logo.png';
import defaultAvatar from 'images/defaultAvatar.png';
import {
  StyledArticle,
  StyledWrapper,
  StyledAvatar,
  StyledInfo,
  Count,
  BtnFollow,
  BtnFollowing,
  StyledImgFollow,
  StyledImgLogo,
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

  const handleImageError = event => {
    event.target.src = defaultAvatar;
  };

  return (
    <StyledArticle>
      <StyledImgLogo src={logo} alt="Image logo" width={76} height={22} />
      <StyledImgFollow src={follow} alt="Image follow" width={308} height={168}/>
      <StyledWrapper>
        <StyledAvatar
          alt={user}
          src={avatar}
          sx={{ width: 62, height: 62 }}
          onError={handleImageError}
        />
      </StyledWrapper>

      <StyledInfo>
        <Count variant="p">{tweets.toLocaleString('en-US')} TWEETS</Count>
        <Count variant="p">
          {followersCount.toLocaleString('en-US')} FOLLOWERS
        </Count>
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

TweetsItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
