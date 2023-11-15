import UsersIcon from "../../assets/pessoa-usuaria-icon.svg";
import Header from "../../Componentes/Header";
import Footer from "../../Componentes/Footer";
import {
  Container,
  Paragraph,
  Title,
  ParagraphContainer,
} from "../../styles/GenericComponentsStyles/components";

export default function Users() {
  return (
    <Container>
      <Header />
      <main>
        <section>
          <Title>Pessoa Usuária</Title>
          <ParagraphContainer>
            <Paragraph>
              A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por
              profissionais de qualidade e que atendam às suas necessidades de forma segura e
              acolhedora.
            </Paragraph>
          </ParagraphContainer>
        </section>
        <img src={UsersIcon} alt="Pessoas usando celular" />
      </main>
      <Footer />
    </Container>
  );
}