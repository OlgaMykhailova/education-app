import { HeaderStyled, HeaderWrap, LogoLink, Logo, Slogan } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrap>
        <LogoLink to='/'>
          <Logo>WISEY</Logo>
        </LogoLink>
        <Slogan>Eliminate procrastination with your Personal Plan</Slogan>
      </HeaderWrap>
    </HeaderStyled>
  );
};
