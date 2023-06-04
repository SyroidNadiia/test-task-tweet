import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import GoBackBtn from 'components/GoBackButton/GoBackButton';
import Loader from 'components/Loader/Loader';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets, fetchTweetsByPages } from 'redux/operations';
import { getIsLoading, getTotalItems, getTweets } from 'redux/selectors';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Filter from '../components/Filter/Filter';
import { useLocation } from 'react-router-dom';
import { StyledTweet } from './sharedStyles.styles';

const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const totalItems = useSelector(getTotalItems);

  const [page, setPage] = useState(1);
  const tweets = useSelector(getTweets);
  const [isShowButton, setShowButton] = useState(true);
  const tweetsPerPage = 3;
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const totalPages = Math.ceil(totalItems / tweetsPerPage);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    dispatch(fetchTweets());
    backLink.current = '/';
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTweetsByPages({ page, limit: tweetsPerPage }));
  }, [dispatch, page]);

  useEffect(() => {
    if (tweets.length === 0 || page >= totalPages) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [page, totalPages, tweets]);

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
