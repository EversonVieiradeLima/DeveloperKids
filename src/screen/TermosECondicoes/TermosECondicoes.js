import React from "react";

import { Container } from "../../StylesGlobal/Documentos/Container";
import { Header } from "../../StylesGlobal/Documentos/Header";
import logo from "../img/logo-developer-kids.png";
import { Main } from "../../StylesGlobal/Documentos/Main";
import { ContFinal } from "./styled/ContFinal";
import Rodape from "../../StylesGlobal/Rodape/Rodape";

export default function TermosECondicoes() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Developer Kids" />
      </Header>

      <Main>
        <h1>Termos e Condições da Developer Kids</h1>

        <div>
          <p>
            Bem-vindo(a) à Developer Kids! Antes de utilizar nossos serviços, é
            importante que você leia e concorde com estes Termos e Condições. Ao
            acessar ou usar nossa plataforma, você estará concordando com estes
            termos e se comprometendo a cumpri-los. Se você não concordar com
            estes Termos e Condições, não poderá utilizar nossa plataforma.
          </p>

          <section>
            <h2>1. Cadastro e Acesso</h2>
            <p>
              1.1. Para utilizar nossa plataforma, é necessário ter um cadastro
              válido. O acesso à plataforma é gratuito, mas somente usuários
              cadastrados poderão utilizá-la.
            </p>
            <p>
              1.2. Ao se cadastrar, os pais ou responsáveis legais concordam em
              fornecer informações precisas, atualizadas e completas sobre a
              criança. Os pais ou responsáveis são responsáveis por manter a
              confidencialidade das informações de login e senha da criança e
              são responsáveis por todas as atividades realizadas em sua conta.
            </p>
            <p>
              1.3. Ao se cadastrar, os pais ou responsáveis legais estão dando
              sua autorização para que a criança utilize a plataforma e forneçam
              as informações necessárias para cumprir as obrigações de
              conformidade com as leis de proteção de dados aplicáveis, como a
              Lei Geral de Proteção de Dados (LGPD).
            </p>

            <h2>2. Uso da Plataforma</h2>
            <p>
              2.1. Nossa plataforma é projetada para ensinar programação a
              crianças entre 7 e 16 anos por meio de gamificação e cursos
              divertidos.
            </p>
            <p>
              2.2. A plataforma foi desenvolvida levando em consideração as
              diretrizes de privacidade e segurança para proteger os dados das
              crianças, conforme estabelecido pelas leis de proteção de dados
              aplicáveis, como a LGPD.
            </p>
            <p>
              2.3. Os pais ou responsáveis legais são os responsáveis por
              supervisionar o uso da plataforma pela criança e garantir que ela
              esteja em conformidade com a idade e habilidades adequadas da
              criança.
            </p>
            <p>
              2.4. Você pode utilizar a plataforma livremente, escolhendo os
              cursos que deseja fazer ou seguindo uma trilha sugerida para
              melhorar sua evolução.
            </p>
            <p>
              2.5. Durante o uso da plataforma, você terá acesso a jogos e
              desafios de lógica de programação, além de provas para avaliar seu
              progresso.
            </p>
            <p>
              2.6. Nós nos reservamos o direito de fazer alterações na
              plataforma, incluindo a adição, remoção ou modificação de cursos,
              jogos e recursos, a qualquer momento e sem aviso prévio.
            </p>

            <h2>3. Propriedade Intelectual</h2>
            <p>
              3.1. Todo o conteúdo disponível na plataforma, incluindo textos,
              vídeos, jogos e materiais didáticos, é protegido por direitos
              autorais e pertence aos seus respectivos proprietários.
            </p>
            <p>
              3.2. Você não tem permissão para copiar, modificar, distribuir,
              transmitir, exibir ou explorar comercialmente qualquer conteúdo da
              plataforma sem autorização prévia por escrito dos proprietários
              dos direitos autorais.
            </p>

            <h2>4. Privacidade e Proteção de Dados</h2>
            <p>
              4.1. Valorizamos a privacidade das crianças e cumprimos todas as
              obrigações legais relacionadas à coleta, uso e processamento de
              dados pessoais de crianças.
            </p>
            <p>
              4.2. Coletamos apenas as informações estritamente necessárias para
              o funcionamento da plataforma e para o monitoramento do progresso
              da criança nos cursos. Todas as informações coletadas são tratadas
              de acordo com nossa Política de Privacidade, que está em
              conformidade com as leis de proteção de dados aplicáveis.
            </p>
            <p>
              4.3. Os pais ou responsáveis legais têm o direito de acessar,
              revisar e solicitar a exclusão dos dados pessoais da criança,
              conforme permitido pelas leis de proteção de dados aplicáveis.
            </p>

            <h2>5. Limitação de Responsabilidade</h2>
            <p>
              5.1. Nós nos esforçamos para fornecer uma plataforma de alta
              qualidade, mas não garantimos que ela estará sempre livre de
              erros, interrupções ou falhas técnicas.
            </p>
            <p>
              5.2. Não nos responsabilizamos por qualquer dano ou prejuízo
              decorrente do uso ou incapacidade de uso da plataforma, incluindo
              danos diretos, indiretos, incidentais, consequenciais ou
              punitivos.
            </p>
            <p>
              5.3. Os pais ou responsáveis legais concordam em supervisionar e
              monitorar o uso da plataforma pela criança, assumindo a
              responsabilidade por qualquer dano ou prejuízo causado pelo uso
              inadequado da plataforma.
            </p>

            <h2>6. Encerramento de Conta</h2>
            <p>
              6.1. Reservamo-nos o direito de encerrar sua conta e restringir ou
              proibir seu acesso à plataforma, a qualquer momento e por qualquer
              motivo, sem aviso prévio.
            </p>
            <p>
              6.2. Em caso de encerramento da conta, as informações pessoais da
              criança serão tratadas de acordo com nossa Política de
              Privacidade.
            </p>

            <h2>7. Disposições Gerais</h2>
            <p>
              7.1. Estes Termos e Condições representam o acordo integral entre
              os pais ou responsáveis legais e nós em relação ao uso da
              plataforma e substituem quaisquer acordos anteriores.
            </p>
            <p>
              7.2. Caso qualquer disposição destes Termos e Condições seja
              considerada inválida ou inexequível, as demais disposições
              permanecerão em pleno vigor e efeito.
            </p>
            <p>
              7.3. Estes Termos e Condições são regidos pelas leis da República
              Federativa do Brasil e quaisquer disputas serão submetidas à
              jurisdição exclusiva dos tribunais competentes nessa localidade.
            </p>
          </section>

          <ContFinal>
            Se você tiver alguma dúvida ou preocupação sobre estes Termos e
            Condições, entre em contato conosco pelo e-mail
            contato.developerkids@gmail.com@gmail.com.
          </ContFinal>
        </div>
      </Main>
      <Rodape />
    </Container>
  );
}
