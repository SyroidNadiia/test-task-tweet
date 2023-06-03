import PropTypes from 'prop-types';

const ButtonLoadMore = ({ isLoading, onLoadMore }) => {
  return (
    <button  onClick={onLoadMore}>
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
