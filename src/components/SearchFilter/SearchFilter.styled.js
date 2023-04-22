import styled from '@emotion/styled';
import { IconButton } from 'components/IconButton/IconButton';

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  font-family: 'Caveat', cursive;
  font-size: 24px;
  color: black;
  padding: 4px 34px;
  border-radius: 15px;
  width: 270px;
  height: 36px;
  border: ${props => `2px solid ${props.theme.colors.borderColor}`};
  background-color: ${props => props.theme.colors.inputBgColor};

  &::placeholder {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: #00000066;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const SortButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  cursor: pointer;

  background-color: transparent;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    fill: #00000066;
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.black};
    }
  }
`;

export const SerchBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  svg {
    fill: #00000066;
  }
`;
