import { HeaderStyled, HeaderWrap, Logo, Slogan } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrap>
        <Logo>WISEY</Logo>
        <Slogan>Eliminate procrastination with your Personal Plan</Slogan>
      </HeaderWrap>
    </HeaderStyled>
  );
};
