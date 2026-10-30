
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import style from './footer.module.css'

export default function Footer() {


    return (

        <>

            <footer id='rodape' className={style.footer}>


                <div className={style.info}>

                    <div className={style.topo}>

                        <div className={style.cta}>

                           
                            <span className={style.rotulo}>Contacto</span>
                            <h2 className={style.titulo}>Vamos conversar sobre o que precisa.</h2>

                            <a className={style.botao} href=''>
                                Fale connosco <ArrowRight size={16} />
                            </a>

                        </div>


                        <div className={style.colunas}>

                            <div className={style.coluna}>
                                <span className={style.colTitulo}>Solucoes</span>
                                <a href="">Marketing</a>
                                <a href="">T.I</a>
                                <a href="">Desenvolvimento web</a>
                                <a href="">Gestao de Redes Socias</a>
                            </div>

                        </div>

                    </div>


                    <div className={style.base}>

                        <span className={style.copy}>© {new Date().getFullYear()}.NsessaSebastião Todos os direitos reservados.</span>

                        <div className={style.sociais}>
                            <a href="mailto:nsessa07@gmail.com" aria-label="Email"><Mail size={18} /></a>
                            <a href="tel:+244975074442" aria-label="Telefone"><Phone size={18} /></a>
                            <a href="#rodape" aria-label="Localização"><MapPin size={18} /></a>
                        </div>

                    </div>

                </div>

            </footer>

        </>

    )


}