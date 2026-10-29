import './index.css'
import { useState, useEffect, useRef } from 'react'
import projeto1 from '../assets/SGVFRANUEL.PNG'
import projecto3 from '../assets/Captura de Tela (211).png'

import projecto2 from '../assets/Captura de Tela (149).png'
import { FaGithub } from 'react-icons/fa'
import { SiJavascript, SiMysql, SiNodedotjs, SiProgress, SiReact, SiSupabase, SiVercel } from 'react-icons/si'
import { MdOpenInNew } from 'react-icons/md'
import csharp from '../assets/c_sharp_logo_48px.png'

const Projectos = [
    {
        img: [projeto1],
        desc: 'Sistema de Gestão',
        text: 'É um sistema de gestão de interno para Academia e Consultoria Franuel permite fazer Login inserir formandos formações e funcionarios e emitir relatorios e ter controlo atraves de um dashboard interativo.',
        icons: [
            { nome: 'MySQL', el: <SiMysql size={20} /> },
            { nome: 'C#', el: <img src={csharp} alt="C#" style={{ width: '20px' }} /> },
        ],
        github: 'https://github.com/...',
        abrir: '',
    },
    {
        img: [projecto2],
        desc: 'Ecommerce de Reservas de Produtos',
        text: 'É um ecommerce de Reservas de produtos com um dashboard gerencial e que notifica os clientes quando ha novos produtos que permite ver acesso ao site por sexo e fazer a gestao de vendas.',
        icons: [
            { nome: 'Progress', el: <SiProgress size={20} /> },
            { nome: 'React', el: <SiReact size={20} /> },
            { nome: 'Node.js', el: <SiNodedotjs size={20} /> },
            { nome: 'JavaScript', el: <SiJavascript size={20} /> },
            { nome: 'Supabase', el: <SiSupabase size={20} /> },
            { nome: 'Vercel', el: <SiVercel size={20} /> },

        ],
        github: 'https://github.com/Manzambi07/Ecommerce',
        abrir: '',
    },
    
    {
        img: [projecto3],
        desc: 'Planilha Gestora',
        text: 'O Planilha Gestora é um sistema de gestão de produtos, stock e faturação para pequenas e médias empresas. Este documento explica como instalar, configurar e utilizar o sistema e descreve o seu funcionamento técnico, para consulta dos utilizadores e da Administração Geral Tributária (AGT).',
        icons: [
            { nome: 'Progress', el: <SiProgress size={20} /> },
            { nome: 'React', el: <SiReact size={20} /> },
            { nome: 'Node.js', el: <SiNodedotjs size={20} /> },
            { nome: 'JavaScript', el: <SiJavascript size={20} /> },
            { nome: 'Supabase', el: <SiSupabase size={20} /> },
            { nome: 'Vercel', el: <SiVercel size={20} /> },
        ],
        github: 'https://github.com/Manzambi07/Planilha-Gestora',
        abrir: '',
    },
]

function Cartao({ u, onAbrirImagem }) {
    const ref = useRef(null)
    const [visivel, setVisivel] = useState(false)
    const [expandido, setExpandido] = useState(false)

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setVisivel(true)
                obs.disconnect()
            }
        }, { threshold: 0.15 })
        obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        <div ref={ref} className={`Projectos ${visivel ? 'visivel' : ''}`}>
            <div className='imagem7' onClick={() => onAbrirImagem(u.img[0])}>
                <img src={u.img[0]} alt={u.desc} />
                <span className='zoom-dica'>Clique para ampliar</span>
            </div>

            <div className='Descricao'>
                <h1>{u.desc}</h1>
                <span className={expandido ? 'texto aberto' : 'texto'}>{u.text}</span>
                <button className='ver-mais' onClick={() => setExpandido(!expandido)}>
                    {expandido ? 'Ver menos' : 'Ver mais'}
                </button>
            </div>

            <div className='ferramentas'>
                {u.icons.map((i) => (
                    <span key={i.nome} className='icone' data-nome={i.nome}>
                        {i.el}
                    </span>
                ))}
            </div>

            <div className='Abrir'>
                <a href={u.github} target='_blank' rel='noreferrer' title='Ver no GitHub'>
                    <FaGithub size={22} color='#fff' />
                </a>
            </div>

            {u.abrir !== undefined && u.abrir !== null && u.id !== 0 && u.abrir !== '' && (
                <div className='open'>
                    <a href={u.abrir} target='_blank' rel='noreferrer'>
                        <MdOpenInNew />
                    </a>
                    <span style={{ marginLeft: '10px', marginBottom: '4px' }}>Abrir em tempo real</span>
                </div>
            )}
        </div>
    )
}

export default function ProjectosSection() {
    const [imagemAberta, setImagemAberta] = useState(null)

    useEffect(() => {
        const fechar = (e) => e.key === 'Escape' && setImagemAberta(null)
        window.addEventListener('keydown', fechar)
        return () => window.removeEventListener('keydown', fechar)
    }, [])

    return (
        <>
            <section id="p" className='Projectos-container'>
                <h1>Meus Projectos</h1>

                <div className='Projectos-grid'>
                    {Projectos.map((u) => (
                        <Cartao key={u.desc} u={u} onAbrirImagem={setImagemAberta} />
                    ))}
                </div>
            </section>

            {imagemAberta && (
                <div className='lightbox' onClick={() => setImagemAberta(null)}>
                    <img src={imagemAberta} alt='Projecto ampliado' />
                </div>
            )}
        </>
    )
}