import { FooterContainer, FooterSpan } from "./style";
import NavSocialMedia from "./components/navSMedia";
import NavViewsPage from "./components/navPaginas";

export default function Footer() {
  return (
    <FooterContainer>
      <NavViewsPage />
      <NavSocialMedia />
      <FooterSpan>
        <span>Desafio Front-end Lacrei</span>
      </FooterSpan>
    </FooterContainer>
  );
}