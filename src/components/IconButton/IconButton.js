import PropTypes from 'prop-types';

export const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  children: null,
  onClick: () => null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string,
};
