import { useState, useEffect } from 'react';
import style from './index.module.css'
import { Code, Code2, Menu, X, Home, Wrench, Briefcase, User, FolderGit2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const LINKS = [
    { id: 'r', nome: 'Pagina', Icone: Home },
    { id: 'h', nome: 'Habilidades', Icone: Wrench },
    { id: 'e', nome: 'Experiencias', Icone: Briefcase },
    { id: 's', nome: 'Sobre', Icone: User },
    { id: 'p', nome: 'Projectos', Icone: FolderGit2 },
]

export default function Header() {

    const [menuAberto, setMenuAberto] = useState(false)
    const [ativo, setAtivo] = useState('r')
    const [rolado, setRolado] = useState(false)
const [tema, setTema] = useState(() => {
    try { return localStorage.getItem('tema') || 'escuro' } catch { return 'escuro' }
})
const alternarTema = () => setTema(prev => prev === 'escuro' ? 'claro' : 'escuro')

// aplica o tema ao site inteiro e guarda a escolha
useEffect(() => {
    document.documentElement.dataset.tema = tema
    try { localStorage.setItem('tema', tema) } catch { /* ignora */ }
}, [tema])

const estiloIcone = {
    color: 'white',
    fontSize: '20px',
    borderRadius: '50%',
    backgroundColor: 'dimgray',
    padding: '10px',
    cursor: 'pointer',
}



















    const abrirMenu = () => setMenuAberto(prev => !prev)
    const fecharMenu = () => {
        const dentroDoIntervalo = window.matchMedia('(min-width: 300px) and (max-width: 700px)').matches
        if (dentroDoIntervalo) {
            setMenuAberto(false)
        }
    }

    // sombra no header ao fazer scroll
    useEffect(() => {
        const onScroll = () => setRolado(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // scroll spy: marca o link da secção visível
    useEffect(() => {
        const obs = new IntersectionObserver((entradas) => {
            entradas.forEach(e => {
                if (e.isIntersecting) setAtivo(e.target.id)
            })
        }, { rootMargin: '-40% 0px -55% 0px' })

        LINKS.forEach(l => {
            const el = document.getElementById(l.id)
            if (el) obs.observe(el)
        })
        return () => obs.disconnect()
    }, [])

    // Esc fecha o menu e, ao passar para desktop, também fecha
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setMenuAberto(false)
        const onResize = () => window.innerWidth > 700 && setMenuAberto(false)
        window.addEventListener('keydown', onKey)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('keydown', onKey)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    // bloqueia o scroll da página com o menu aberto
    useEffect(() => {
        document.body.style.overflow = menuAberto ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuAberto])

    return (
        <>

            <header className={rolado ? style.rolado : ''}>

                <div className={`${style.fundo} ${menuAberto ? style.aberto : ''}`} onClick={() => setMenuAberto(false)}></div>
                <div className={style.logo}>

                        <Code size={16}></Code>Nsessa Dev <Code2 size={16}></Code2>
                </div>

                <div className={`${style.Princ} ${menuAberto ? style.aberto : ''}`}>


                    <nav className={style.nav}>

                        {LINKS.map(({ id, nome, Icone }, i) => (
                            <li key={id} style={{ '--i': i }}>
                                <a
                                    className={`${style.links} ${ativo === id ? style.ativo : ''}`}
                                    href={`#${id}`}
                                    onClick={() => { setAtivo(id); fecharMenu() }}
                                >
                                    <Icone size={18} className={style.iconeLink} />
                                    <span>{nome}</span>
                                </a>
                            </li>
                        ))}

                    </nav>

                    <div className={style.outros}>

                       <span
    key={tema}
    className={style.tema}
    onClick={alternarTema}
    title={tema === 'escuro' ? 'Modo claro' : 'Modo escuro'}
    role='button'
    aria-label={tema === 'escuro' ? 'Ativar modo claro' : 'Ativar modo escuro'}
>
    {tema === 'escuro'
        ? <MdOutlineLightMode style={estiloIcone} />
        : <MdOutlineDarkMode style={estiloIcone} />
    }
</span>

                        <span className={style.social}>
                            <a href="https://github.com/..." target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
                            <a href="https://linkedin.com/in/..." target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                        </span>

                    </div>


                </div>

                <aside>
                    {menuAberto
                        ? <X key="x" onClick={abrirMenu} className={style.menu} aria-label="Fechar menu" aria-expanded="true" />
                        : <Menu key="menu" onClick={abrirMenu} className={style.menu} aria-label="Abrir menu" aria-expanded="false" />
                    }
                </aside>

            </header >


        </>
    )
}