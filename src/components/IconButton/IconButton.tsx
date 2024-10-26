import React from 'react';

// interface IconButtonProps {
//   children: React.ReactNode;
//   onClick: () => void;
//   'aria-label': string;
// }

type IconButtonProps = React.ComponentProps<'button'> & {
  onClick?: () => void;
};

export function IconButton({
  children,
  onClick,
  ...allyProps
}: IconButtonProps): JSX.Element {
  return (
    <button type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  children: null,
  onClick: () => null,
};
