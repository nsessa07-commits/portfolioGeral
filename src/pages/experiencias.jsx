
import { Download } from 'lucide-react'
import curriculo from '../doc/Curriculo.pdf'
import './index.css'

export default function Experiencias(){

        return(<>
        
         <section className="Minhas-Experiencias" id="e">

                <h2 style={{backgroundColor:'white'}}> Minhas Experiencias</h2>

                <div className="Cards">
                    <h1>Freelancer</h1>
                    <h3>Setembro de 2026-Presente</h3>
                    <h6>É uma experiencia impactante ate agora e desafiadora
                        Trabalhar com projectos para estudantes que estão
                        prestes a terminar
                        medio é uma enorme responsabildade.</h6>

                </div>

                <div className="Cards">
                    <h1>Expositor da Expo Uíge</h1>
                    <h3>Julho de 2025-Presente</h3>
                    <h6>Foi uma experiencia impactante fizemos exposição
                        maravilhosa que na qual um dos projectos era o meu, um
                        sistema de Gestão
                        de matriculas, tive contacto com mentes brilhantes e
                        deram me varios conselhos e acatei hoje sou
                        desenvolvedor web graças a essa
                        experiencia.
                    </h6>
                </div>

                <div className="Cards">
                    <h1>CEO DA N-TECH </h1>
                    <h3>Dezembro de 2025-Presente</h3>
                    <h6>É uma startup que resolve problemas relacionados a
                        codigo com a missão tambem de impactar a sociedade com
                        ferramnetas que atendam as necessidades
                        do povo
                    </h6>
                </div>

                <div className="Cards">
                    <h1>Consultor de Marketing</h1>
                    <h3>Julho de 2026-Presente</h3>
                    <h6> Consultor de Marketing na clinica Sol Nascente do Uíge
                        é um consultorio médico e de analises clinicas </h6>
                </div>

                <a href={curriculo}
                    style={{color:'white', display:'flex' , alignItems:'center',textDecoration:'none',borderRadius:'20px',
                        padding:'10px',flexDirection:'column',  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
     boxSizing:' border-box'
                    }}>Baixar
                    curriculo <Download></Download>
                 </a>


            </section>

        
        </>)
     
}