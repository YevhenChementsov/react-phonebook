import React from 'react';

// interface IconButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   'aria-label': string;
// }

type IconButtonProps = React.ComponentProps<'button'> & {
  onClick?: () => void;
};

export function IconButton({
  children = null,
  onClick = () => null,
  ...allyProps
}: IconButtonProps): JSX.Element {
  return (
    <button type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
}
