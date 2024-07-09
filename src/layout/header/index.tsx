import Logo from '@/components/logo';
import * as S from './styles'
import { headerLinks } from './constants';
import { websiteContent } from '@/constants/webcontent';

export default function Header() {

  return (
    <S.Container>
      <Logo />

      <S.LinkGroup>
        {headerLinks.map((link) => (
          <S.LinkAnchor href={link.href} key={link.label}>
            {websiteContent.header[link.label as keyof typeof websiteContent.header]}
          </S.LinkAnchor>
        ))}
      </S.LinkGroup>

      {/* Button here */}
    </S.Container>
  );
};
