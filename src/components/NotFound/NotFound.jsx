import { Container } from 'components/Container/Container.styled';
import NotFoundImage from '../../media/not-found.jpg';
import { Wrapper } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <img src={NotFoundImage} alt="Not found" />
      </Wrapper>
    </Container>
  );
};
