import styled from '@emotion/styled';
import { ThemeProps } from 'constants/theme';
import { ErrorMessage, Field } from 'formik';

export const InputName = styled.h3`
  margin-top: 10px;

  font-family: 'Caveat', cursive;
  font-size: 24px;
`;

export const Input = styled(Field)<{ theme?: ThemeProps }>`
  width: 260px;
  height: 38px;
  margin-top: 10px;
  padding: 4px 15px;

  font-family: 'Caveat', cursive;
  font-size: 24px;
  color: ${props => props.theme.colors.black};

  background-color: ${props => props.theme.colors.inputBgColor};
  border-radius: 15px;
  border: ${props => `2px solid ${props.theme.colors.borderColor}`};

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Error = styled(ErrorMessage)<{ theme?: ThemeProps }>`
  margin-top: 5px;
  font-size: 14px;
  color: ${props => props.theme.colors.red};
`;
