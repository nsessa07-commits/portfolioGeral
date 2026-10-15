import './index.css'
import img from '../assets/IMG_6165.PNG'
import { useEffect, useRef, useState } from 'react'
import { MapPin, Cake, GraduationCap, Users, BookOpen, Laptop, Flame, Quote } from 'lucide-react'

const TAGLINE = 'Informática de Gestão · Engenharia de Software'

const CITACAO = 'Todo homem grande foi feito de experiências ruins que, na verdade, passaram a ser boas para ele. Valorize a sua integridade e quem a mantém de pé. A vida tem coisas belas e ruins, e muitas delas transcendem os nossos desejos. Então encontre propósito na aflição, senão ela fará de ti escravo. E não dê tudo a quem precisa aprender, senão isso matará a sua criatividade e passará a ser um lugar vazio.'

const HISTORIA = [
    {
        titulo: 'Origem',
        data: '19 de Agosto de 2004',
        Icone: MapPin,
        texto: 'Natural do Uíge, município do Uíge. Passou boa parte da infância no bairro Dunga, nas imediações das Escritas.',
    },
    {
        titulo: 'Família',
        data: 'Raízes',
        Icone: Users,
        texto: 'Filho de Suzana C. Soqui e Zola Ramiro. O pai é licenciado em Matemática/Física e a mãe em Ensino Especial, ambos pelo ISCED, Instituto Superior de Ciências de Educação do Uíge.',
    },
    {
        titulo: 'Ensino Primário',
        data: 'Primeiros passos',
        Icone: BookOpen,
        texto: 'Concluiu o primário na Escola nº 68, nas imediações da Saúde Pública do Uíge.',
    },
    {
        titulo: 'Instituto Politécnico do Kituma',
        data: 'Informática de Gestão',
        Icone: Laptop,
        texto: 'Fez o primeiro ciclo e o secundário no curso de Informática de Gestão, onde nasceu a curiosidade por tecnologia e, em especial, por Engenharia de Software.',
    },
    {
        titulo: 'Desafios',
        data: 'Código com pouco',
        Icone: Flame,
        texto: 'Um percurso com muitos desafios para transformar ideias em código, por falta de equipamentos e de acesso à Internet. Mas não se deixou abalar.',
    },
]

const CHIPS = [
    { Icone: MapPin, texto: 'Uíge, Angola' },
    { Icone: Cake, texto: 'Nascido em 2004' },
    { Icone: GraduationCap, texto: 'Informática de Gestão' },
]

// devolve [ref, visivel]: fica true quando o elemento entra no ecrã
function useVisivel(threshold = 0.2) {
    const ref = useRef(null)
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setVisivel(true)
                obs.disconnect()
            }
        }, { threshold })
        obs.observe(ref.current)
        return () => obs.disconnect()
    }, [threshold])

    return [ref, visivel]
}

// efeito de escrita
function useDigitar(texto, ativo, velocidade = 30) {
    const [saida, setSaida] = useState('')

    useEffect(() => {
        if (!ativo) return
        let i = 0
        const t = setInterval(() => {
            i++
            setSaida(texto.slice(0, i))
            if (i >= texto.length) clearInterval(t)
        }, velocidade)
        return () => clearInterval(t)
    }, [texto, ativo, velocidade])

    return saida
}

function ItemHistoria({ item, indice }) {
    const [ref, visivel] = useVisivel(0.25)
    const { titulo, data, texto, Icone } = item

    return (
        <div
            ref={ref}
            className={`hist-item ${visivel ? 'visivel' : ''}`}
            style={{ transitionDelay: `${indice * 60}ms` }}
        >
            <span className='hist-ponto'><Icone size={16} /></span>
            <div className='hist-cartao'>
                <small>{data}</small>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default function Sobre() {

    const tagline = useDigitar(TAGLINE, true, 45)

    const [refCitacao, citacaoVisivel] = useVisivel(0.3)
    const citacao = useDigitar(CITACAO, citacaoVisivel, 25)

    return (
        <>
            <section className="sobre-mim" id="s">

                <h1>Sobre mim</h1>

                <div className='perfil'>
                    <div className='foto'>
                        <img className="Ver" src={img} alt="Nsessa Sebastião Manzambi" />
                    </div>

                    <h2>Nsessa Sebastião Manzambi</h2>
                    <p className={`tagline ${tagline.length < TAGLINE.length ? 'Ponteiro' : ''}`}>{tagline}</p>

                    <div className='chips'>
                        {CHIPS.map(({ Icone, texto }) => (
                            <span key={texto} className='chip'>
                                <Icone size={14} /> {texto}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='sobreH'>
                    <div className='Ver History hist-linha'>
                        {HISTORIA.map((item, i) => (
                            <ItemHistoria key={item.titulo} item={item} indice={i} />
                        ))}
                    </div>

                    <blockquote ref={refCitacao} className={`citacao ${citacaoVisivel ? 'visivel' : ''}`}>
                        <Quote size={28} className='citacao-icone' />
                        <p className='citacao-texto'>
                            <span className='fantasma'>{CITACAO}</span>
                            <span className='digitado'>{citacao}</span>
                        </p>
                        <footer>— Nsessa Sebastião Manzambi</footer>
                    </blockquote>
                </div>

            </section>
        </>
    )
}