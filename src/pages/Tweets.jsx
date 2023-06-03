import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Loader from 'components/Loader/Loader';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';

const Tweets = () => {
  const [page, setPage] = useState(1);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets(page));
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <h2>Tweets</h2>
      {isLoading && <Loader />}
      <TweetsList />

      <ButtonLoadMore
        isLoading={isLoading}
        onLoadMore={onLoadMore}
      ></ButtonLoadMore>
    </>
  );
};
export default Tweets;
