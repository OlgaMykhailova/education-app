import { Container } from 'components/Container/Container.styled';
import { Wrapper, Title } from './Error.styled';

export const Error = ({errorText}) => {
  return (
    <Container>
      <Wrapper>
        <Title>{errorText}</Title>
      </Wrapper>
    </Container>
  );
};
