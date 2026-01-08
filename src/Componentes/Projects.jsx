import React from "react";
import style from "./projects.module.css";
import Pdogs from "../Fotos/Gemini_Generated_Image_sihbz3sihbz3sihb.jpg";
import Pbike from "../Fotos/Screenshot from 2025-12-31 11-45-17.jpg";
import Pestoque from "../Fotos/Screenshot from 2025-12-31 11-48-09.jpg";

export default function Projects() {
  return (
    <div className={style.container} id='projetos'>

    <div className={style.title}>
        <h1>Principais Projetos.</h1>
        <div className={style.row}>
            <span></span>
        </div>
    </div>
      
      <ul className={style.listProject}>
        <li>
          <a target="_blank" href="https://github.com/narciso-roberto/Bikcraft">
            <img src={Pdogs} />
          </a>
          <h1>Dogs — Rede Social (Clone Inspirado no Instagram)</h1>
          <p>
            Desenvolvimento de uma aplicação web completa inspirada no
            Instagram, criada totalmente do zero utilizando React.
          </p>
          <a className="button" target="_blank" href="https://github.com/narciso-roberto/Dogs">
            Acessar
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/narciso-roberto/Bikcraft">
            <img src={Pbike} />
          </a>
          <h1>Bikcraft — Site para Venda de Bicicletas Personalizadas</h1>
          <p>
            Projeto focado na criação de um site profissional utilizando HTML,
            CSS.
          </p>
          <a className="button" target="_blank" href="https://github.com/narciso-roberto/Bikcraft">
            Acessar
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/narciso-roberto/Trabalho-2-persistencia">
            <img src={Pestoque}/>
          </a>
          <h1>
            Sistema de Estoque com FastAPI e Banco de dados
            assíncrono
          </h1>
          <p>
            Projeto de uma API desenvolvida durante a faculdade, utilizando
            FASTAPI/ SQLModel/ Alembic além de uma ORM.
          </p>
          <a className="button" target="_blank" href="https://github.com/narciso-roberto/Trabalho-2-persistencia">
            Acessar
          </a>
        </li>
      </ul>
    </div>
  );
}
