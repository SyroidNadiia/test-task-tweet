import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { fetchTweets, fetchTweetsByPages } from 'redux/operations';
import {  getIsFollowing, getIsLoading, getTotalItems, getTweets, selectVisibleTweets } from 'redux/selectors';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import GoBackBtn from 'components/GoBackButton/GoBackButton';
import Loader from 'components/Loader/Loader';
import TweetsList from 'components/TweetsList/TweetsList';
import Filter from 'components/Filter/Filter';
import { StyledTweet } from './sharedStyles.styles';

const Tweets = () => {
  useEffect(() => {
    document.title = 'Tweets';
  }, []);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const totalFollowing = useSelector(getIsFollowing);
  const totalItems = useSelector(getTotalItems);
  const visibleTweets = useSelector(selectVisibleTweets);

  const [page, setPage] = useState(1);
  const tweets = useSelector(getTweets);
  const [isShowButton, setShowButton] = useState(true);
  const tweetsPerPage = 3;
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const totalPages = Math.ceil(totalItems / tweetsPerPage);

  const onLoadMore = () => {
    setPage(Math.ceil(tweets.length / tweetsPerPage) + 1);
  };

  useEffect(() => {
    dispatch(fetchTweets());
    backLink.current = '/';
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTweetsByPages({ page, limit: tweetsPerPage }));
  }, [dispatch, page]);

  useEffect(() => {
    if (
      tweets.length === 0 ||
      page >= totalPages ||
      visibleTweets.length === 0 ||
      totalFollowing.length === visibleTweets.length
    ) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [page, totalPages, tweets, visibleTweets, totalFollowing]);

  return (
    <StyledTweet>
      <GoBackBtn to={backLink.current}>
        <IoIosArrowRoundBack /> Go back
      </GoBackBtn>
      <Filter />
      {isLoading && <Loader />}
      <TweetsList />

      {isShowButton && (
        <ButtonLoadMore isLoading={isLoading} onLoadMore={onLoadMore} />
      )}
    </StyledTweet>
  );
};
export default Tweets;
