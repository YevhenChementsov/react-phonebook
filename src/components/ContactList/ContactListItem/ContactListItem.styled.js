import styled from '@emotion/styled';
import { IconButton } from 'components/IconButton/IconButton';

export const Name = styled.p`
  width: 234px;
  font-family: 'Dancing Script', cursive;
  font-size: 20px;
  overflow-wrap: break-word;
`;

export const PhoneNumber = styled.p`
  width: 234px;
  font-family: 'Dancing Script', cursive;
  font-size: 16px;
`;

export const ContactListButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/3;
  grid-column: 2/3;
  padding: 10px;

  cursor: pointer;

  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    fill: ${props => props.theme.colors.white};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.red};
    }
  }
`;
