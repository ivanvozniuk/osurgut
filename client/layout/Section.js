import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 50px;
  &:last-of-type {
    margin-bottom: 100px;
  }

  @media all and (max-width: 1200px) {
    &:last-of-type {
      margin-bottom: 60px;
    }
  }
`;

export const SectionAlone = styled(Section)`
  margin: 0;
  margin-bottom: 50px;

  @media all and (max-width: 1200px) {
    margin-bottom: 30px;
  }
`;

export const SectionSmall = styled(Section)`
  margin-top: 40px;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media all and (max-width: 1200px) {
    margin-top: 25px;
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`;
