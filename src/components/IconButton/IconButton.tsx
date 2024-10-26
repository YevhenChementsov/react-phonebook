import React from 'react';

// interface IconButtonProps {
//   children: React.ReactNode;
//   onClick: () => void;
//   'aria-label': string;
// }

type IconButtonProps = React.ComponentProps<'button'>;

export function IconButton({
  children,
  onClick,
  ...allyProps
}: IconButtonProps): void {
  <button type="button" onClick={onClick} {...allyProps}>
    {children}
  </button>;
}

IconButton.defaultProps = {
  children: null,
  onClick: () => null,
};
