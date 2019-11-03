import styled from '@emotion/styled';

import SocialLinks from './SocialLinks';

export default ({ links, action }) => (
  <Container>
    <Text>Или войдите через соц сети</Text>
    <LinksContainer>
      <SocialLinks action={action} links={links} />
    </LinksContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 230px;
  width: 100%;
  margin-top: 20px;
`;
