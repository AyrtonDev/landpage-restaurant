import Logo from '@/components/logo';
import * as S from './styles'

export default function Header() {
  return (
    <S.Container>
      <Logo />

      <S.LinkGroup>
        <S.LinkAnchor href="/about">About</S.LinkAnchor>
        <S.LinkAnchor href="/menu">Menu</S.LinkAnchor>
        <S.LinkAnchor href="/venue">Venue</S.LinkAnchor>
      </S.LinkGroup>

      {/* Button here */}
    </S.Container>
  );
};
