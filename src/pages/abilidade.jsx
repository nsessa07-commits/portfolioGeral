import img from '../assets/email_96px - Copia.png'
import './index.css'

export default function Habilidade() {

    const itens = [{
        datacat: "frontend",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        span: 'HTML5',
        small: 'Front-end'
    },

    {
        datacat: "frontend",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        span: 'CSS3',
        small: 'Front-end'
    },

    {
        datacat: "frontend",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        span: 'javaScript',
        small: 'Front-end'
    },

    {
        datacat: "frontend",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        span: 'React',
        small: 'Front-end'
    },

    {
        datacat: "backend",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        span: 'Node.js',
        small: 'Back-end'
    },

    {
        datacat: "backend",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        span: 'C#',
        small: 'Back-end'
    },

    {
        datacat: "backend",
        src: { img },
        span: 'C',
        small: 'Back-end'
    },

    {
        datacat: "basededados",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        span: 'PostgreSQL',
        small: 'Base de Dados'
    },

    {
        datacat: "basededados",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        span: 'MysQL',
        small: 'Base de Dados'
    },

    {
        datacat: "basededados",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        span: 'SQL-Server',
        small: 'Base de Dados'
    },

    {
        datacat: "basededados",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        span: 'SQLite',
        small: 'basededados'
    },]

    return (
        <>
            <section className="Cont-Habilidades" id="h">

                <div className="Minhas-Habilidades">
                    <h2>Minhas Habilidades</h2>
                </div>

                <div className="skills">

                    <div className="skills-filtros" role="group"
                        aria-label="Filtrar habilidades">
                        <button type="button" className="filtro ativo"
                            data-filtro="todos"
                            aria-pressed="true">Todos</button>
                        <button type="button" className="filtro"
                            data-filtro="frontend"
                            aria-pressed="false">Front-end</button>
                        <button type="button" className="filtro"
                            data-filtro="backend"
                            aria-pressed="false">Back-end</button>
                        <button type="button" className="filtro" data-filtro="bd"
                            aria-pressed="false">Bases de dados</button>
                    </div>

                    <p className="skills-contador" id="skills-contador"
                        aria-live="polite">11 tecnologias</p>

                 <ul className="skills-grid Ver">

                    {itens.map((u) => (
                            <li className="skill" data-cat={u.datacat}>
                                <img src={u.src} alt />
                                <h4>{u.span}</h4><h4>{u.small}</h4>
                            </li>
                    ))}
                                            </ul>

                </div>

            </section>

        </>
    )


}