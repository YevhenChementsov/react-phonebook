import styled from '@emotion/styled';

export const Input = styled.input`
  font-family: 'Caveat', cursive;
  font-size: 24px;
  color: black;
  padding: 4px 15px;
  border-radius: 15px;
  width: 270px;
  height: 38px;
  border: none;
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
