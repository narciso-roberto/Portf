import React from 'react'
import style from './AboutMe.module.css'
import picture from '../Fotos/pictue.jpeg'
import github from "../Fotos/icons8-github.svg"
import linkedin from "../Fotos/icons8-linkedin.svg"
import zap from "../Fotos/icons8-whatsapp.svg"


const AboutMe = () => {
  return (
    <section className={style.aboutMe}>
        <div className={style.card}>
            <div className={style.foto}>
                <img src={picture}/>
                <div className={style.infos}>
                    <p>Cursando bacharelado em SI</p>
                </div>
                <div className={style.buttons}>
                    <img src={linkedin}/>
                    <img src={zap}/>
                    <img src={github}/>

                </div>
            </div>
            <div className={style.text}>
                <div>
                    <h1>Ola, eu sou o <span className={style.destaque}>Narciso.</span></h1>
                    <span className={style.subtitle}>Full-stack | JavaScript | React | Node | Typescript</span><br/>
                    <p>
                    Sou um estudante apaixonado por tecnologia, com ênfase no desenvolvimento front-end. 
                    Tenho experiência em criar interfaces com layouts modernos e responsivos, sempre priorizando a experiência do usuário e o desempenho. 
                    </p>
                </div>
                <div className={style.preencher}></div>
            </div>

        </div>
    </section>
  )
}

export default AboutMe
