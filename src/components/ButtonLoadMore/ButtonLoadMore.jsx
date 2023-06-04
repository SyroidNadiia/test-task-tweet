import PropTypes from 'prop-types';
import { BtnLoadMore } from './ButtonLoadMore.styles';

const ButtonLoadMore = ({ isLoading, onLoadMore }) => {
  return (
    <BtnLoadMore  onClick={onLoadMore}>
      {isLoading ? 'Loading...' : 'Load More'}
    </BtnLoadMore>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
