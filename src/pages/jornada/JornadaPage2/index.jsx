import styles from "./styles.module.scss";
import RedButton from "../../../components/RedButton";

function JornadaPage2() {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <h1>Olá, Eduardo. Boas-vindas à Jornada Gamificada da Onboarding-me.</h1>
        <h3>Agora, leia o tutorial de como conquistar suas medalhas.</h3>
        <p>
          Bem-vindo à nossa empresa! Estamos empolgados em tê-lo a bordo e comprometidos em tornar sua jornada de integração enriquecedora. Durante este tutorial, explicaremos como essa jornada se desdobrará. Primeiro, você conhecerá nossa empresa, incluindo nossa história, missão e estrutura organizacional. Em seguida, você se aprofundará em seu conhecimento, participando de treinamentos, atividades e grupos de discussão sobre nosso setor e estratégia de negócios. Você também aprenderá a usar as ferramentas e tecnologias que são fundamentais para seu trabalho, desde sistemas internos até plataformas de comunicação. Durante todo o processo, acompanharemos seu progresso e ofereceremos suporte quando necessário. Esta jornada de integração é o primeiro passo para uma carreira bem-sucedida em nossa empresa, preparando-o para contribuir de forma significativa. Estamos ansiosos para vê-lo crescer e prosperar conosco. Boa sorte e seja bem-vindo!{" "}
        </p>
      </section>
      <RedButton path="/jornada/page3">Continuar</RedButton>
    </div>
  );
}

export default JornadaPage2;
