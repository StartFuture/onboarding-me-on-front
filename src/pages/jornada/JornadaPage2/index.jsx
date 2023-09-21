import styles from "./styles.module.scss";
import RedButton from "../../../components/RedButton";

function JornadaPage2() {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <h1>Olá, Eduardo. Boas-vindas à Jornada Gamificada da EmpresaNova.</h1>
        <h3>Agora, leia o tutorial de como conquistar suas medalhas.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lacus dui accumsan urna urna
          sed enim nec morbi blandit. Risus mi convallis neque sagittis diam in.
          Ut phasellus lacinia consequat faucibus neque enim. Arcu vitae dui
          enim et. Ullamcorper ac suspendisse porta posuere vitae turpis.
          Lobortis non malesuada sed ullamcorper dis quam et ut quam. Urna
          turpis ornare gravida ut sapien turpis risus proin. Sagittis tristique
          senectus blandit vel et quam ultrices. Erat ac lectus pharetra mi
          viverra condimentum. Non mauris et amet ultricies faucibus velit ac
          enim. Urna suspendisse a nibh cum vitae mauris urna nunc malesuada.
          Imperdiet vulputate sollicitudin molestie vitae. At molestie aliquet
          non mattis consectetur malesuada purus ipsum tempor. Dolor neque non
          scelerisque felis sed aliquam felis. Pellentesque ut fermentum
          volutpat laoreet quis turpis convallis commodo et. Laoreet amet
          suspendisse pretium egestas posuere justo pulvinar dignissim. Est
          commodo viverra sed in tellus egestas lacinia viverra vitae. Lectus
          cras et aliquet vel fermentum. Leo felis ut tincidunt ut auctor id
          ultricies ullamcorper hendrerit. Duis massa diam elit sapien diam enim
          elementum. Dictumst nisi sed magna pellentesque. Bibendum massa ac
          vitae ullamcorper. Magna consequat massa volutpat fermentum fermentum
          sit. Libero suspendisse feugiat volutpat bibendum sed tellus. A
          vulputate sit venenatis ultricies elit at eleifend lorem lacus. Duis
          ac et aliquam sed nec vivamus ipsum ut diam. Suscipit ultricies lacus
          ultrices ut massa. Sagittis ornare bibendum praesent sit tellus
          tristique in amet. Ac nisl faucibus id eu ultrices non porttitor sed.
          Convallis sit tristique duis erat elit et. Scelerisque eget magna
          lacus neque. Lorem pellentesque massa sapien duis sed. Tincidunt at
          porttitor posuere ac accumsan odio arcu. Est aliquam sed ultricies
          lectus pellentesque lacus phasellus nibh nec. Massa tellus suscipit
          ante iaculis. Feugiat vel leo dictumst viverra. Pulvinar ornare
          aliquam massa quam habitant commodo sodales. Sem pretium enim urna
          vivamus. Ac malesuada etiam consectetur dui eu.{" "}
        </p>
      </section>
      <RedButton path="/jornada/page3">Continuar</RedButton>
    </div>
  );
}

export default JornadaPage2;
