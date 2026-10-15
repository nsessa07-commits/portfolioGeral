
import { useState,useEffect } from 'react'
import img from '../assets/Gemini_Generated_Image_niknhtniknhtnikn.png'
import git from '../assets/github_48px.png'
import mail from '../assets/gmail_48px.png'
import linkdin from '../assets/linkedin_48px.png'
import './index.css'

export default function Main() {


    const welcome = 'Programador Full-Stack';
    const [h1, setH1] = useState('');

useEffect(() => {
    let i = 0;

    const intervalo = setInterval(() => {
        i++;
        setH1(welcome.slice(0, i));

        if (i >= welcome.length) clearInterval(intervalo);
    }, 200);

    return () => clearInterval(intervalo);
}, []);



    return (
        <>
            <main>

                <section className="cont-Receber" id="r">

                    <div className="Recepcao">

                        <div className="Ver">
                            <h3 style={{backgroundColor:' rgb(8, 8, 8)'
                             }}>Olá, eu sou NsessaDev</h3>
                            <h3 className="Ponteiro" style={{ fontWeight: 'bold',backgroundColor:' rgb(8, 8, 8)' }} >{h1}</h3>

                            <h3 style={{backgroundColor:' rgb(8, 8, 8)'
                             }}>
                                Sou um desenvolvedor Full-Stack com experiencia em
                                desenvolvimento web e desktop Atualmente trabalho
                                como Freelancer na Academia e consultoria Franuel
                            </h3>

                        </div>

                        <div className="links Ver">
                            <a target="_blank" href="https://www.linkedin.com/in/nsessa-sebasti%C3%A3o-7a89683a2/">
                                <img src={linkdin} /> </a>
                            <a target="_blank"
                                href="https://github.com/nsessa07-commits"> <img
                                    src={git} /></a>
                            <a target="_blank" href="mailto:nsessa07@gmail.com"><img
                                src={mail} /></a>

                        </div>

                    </div>

                    <div className="imagem">

                        <img className="Ver" src={img} />

                    </div>

                </section>

            </main>

        </>
    )


}