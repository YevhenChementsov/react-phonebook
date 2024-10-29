import styled from '@emotion/styled';
import { ThemeProps } from 'constants/theme';

export const SubmitFormButton = styled.button<{ theme?: ThemeProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  margin: 20px auto;

  font-size: 14px;
  font-weight: 500;
  line-height: 2.14;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  background-color: ${props => props.theme.colors.blue};
  border: ${props => `1px solid ${props.theme.colors.blue}`};
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.blue};

    background-color: ${props => props.theme.colors.white};
    border: ${props => props.theme.colors.blue};
    box-shadow: ${props => `0px 0px 10px 2px ${props.theme.colors.blue}`};
  }
`;
