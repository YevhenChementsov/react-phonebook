import styled from '@emotion/styled';
import { IconButton } from 'components/IconButton/IconButton';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 110px 460px 50px;
  height: 640px;
  padding: 5px 10px;
  margin: 25px auto;

  background-image: linear-gradient(
    250deg,
    #3a5dae 20%,
    #b4c5f4 40%,
    #fef5da 60%,
    #4d4c49 80%,
    #3a668c 100%
  );
  border: 5px solid #000000cc;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 10px #0000004d;

  @media screen and (min-width: 320px) {
    max-width: 300px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.main`
  /* overflow: auto; */
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Caveat', cursive;
  font-size: 32px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonIcon = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  font: inherit;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props =>
      props.disabled ? props.theme.colors.red : props.theme.colors.green};
    background-color: ${props => props.theme.colors.white};
    border: ${props =>
      props.disabled ? props.theme.colors.red : props.theme.colors.green};
    box-shadow: ${props =>
      `0px 0px 10px 2px ${
        props.disabled ? props.theme.colors.red : props.theme.colors.green
      }`};
  }
`;
