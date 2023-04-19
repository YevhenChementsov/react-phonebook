import PropTypes from 'prop-types';
import { ButtonIcon } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => (
  <ButtonIcon type="button" onClick={onClick} {...allyProps}>
    {children}
  </ButtonIcon>
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
