import styled from '@emotion/styled';

export const Container = styled.div`
  height: 640px;
  margin: 20px auto;
  padding: 5px 10px;
  border: 7px solid rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 320px) {
    width: 300px;
  }
`;
