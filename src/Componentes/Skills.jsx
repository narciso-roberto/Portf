import React from "react";
import style from "./skills.module.css";
import iReact from "../Fotos/icons8-react-native.svg";
import iCss from "../Fotos/icons8-css.svg";
import iHtml from "../Fotos/icons8-html-5.svg";
import iType from "../Fotos/icons8-typescript.svg";
import iPostgress from "../Fotos/postgresql-icon.svg";
import iNode from "../Fotos/icons8-node-js.svg";
import iMongo from "../Fotos/mongodb-icon.svg";

const Skills = () => {
  // <a target="_blank" href="https://icons8.com/icon/79250/university">Universidade</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>
  return (
    <section className={style.skills} id="skills">
      <div className={style.grid}>
        <div className={style.hard}>
          <h1>
            <span className={style.destaque}>&lt;</span>HardSkills
            <span className={style.destaque}>/&gt;</span>
          </h1>
          <div className={style.hardList}>
            <ul>
              <span className={style.tecName}>&lt;Front-end&gt;</span>
              <li className={style.skill}>
                <div>
                  <img
                    src={iReact}
                    alt="React para desenvolvimento front-end e aplicações web modernas"
                  />{" "}
                  React 
                </div>
                <div>
                  <img
                    src={iHtml}
                    alt="HTML5 para estruturação semântica de aplicações web"
                  />
                  <img
                    src={iCss}
                    alt="CSS3 para estilização e layout responsivo"
                  />{" "}
                  HTML / CSS
                </div>
              </li>
            </ul>
            <ul>
              <span className={style.tecName}>&lt;Back-end&gt;</span>
              <li className={style.skill}>
                <div>
                  <img
                    src={iNode}
                    alt="Node.js para desenvolvimento back-end e APIs"
                  />{" "}
                  Node.js
                </div>
                <div>
                  <img
                    src={iType}
                    alt="TypeScript para desenvolvimento back-end com tipagem estática"
                  />{" "}
                  TypeScript
                </div>
              </li>
            </ul>

            <ul>
              <span className={style.tecName}>&lt;DataBase&gt;</span>
              <li className={style.skill}>
                <div>
                  <img src={iPostgress} /> Postgresql
                </div>
                <div>
                  <img src={iMongo} /> MongoDB
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.soft}>
          <h1>
            <span>&lt;</span>Experiencias<span>/&gt;</span>
          </h1>

          <ul>
            <li>
              <h2>Monitoria Acadêmica — UFC</h2>
              <p>
                Atuei como monitor em Fundamentos da Programação,
                <span className={style.standOut}>
                  {" "}
                  desenvolvendo comunicação objetiva
                </span>{" "}
                com os alunos para esclarecer dúvidas, orientar estudos e
                fornecer apoio.
              </p>
            </li>

            <li>
              <h2>Desenvolvimento Web</h2>
              <p>
                <span className={style.standOut}>
                  Experiência prática com HTML, CSS, JavaScript e React
                </span>
                , criando aplicações completas, responsivas e focadas em
                usabilidade.
              </p>
            </li>

            <li>
              <h2>Back-end com Node e TypeScript</h2>
              <p>
                Estudo e{" "}
                <span className={style.standOut}>
                  desenvolvimento de APIs utilizando Node.js, TypeScript
                </span>
                e banco de dados SQL/PostgreSQL, com foco em organização de
                código e boas práticas.
              </p>
            </li>

            <li>
              <h2>Projetos Acadêmicos Reais</h2>
              <p>
                <span className={style.standOut}>Participação em projetos</span>{" "}
                como sistemas de estoque, redes sociais e sites profissionais,
                aplicando conceitos de lógica, estrutura de dados, versionamento
                com Git.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
