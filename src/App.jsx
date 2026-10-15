
import  style from  './App.module.css'
import Header from './components/header'
import Main from './pages/main'
import Habilidade from './pages/abilidade'
import Experiencias from './pages/experiencias'
import Sobre from './pages/sobre'
import Projectos from './pages/projetos'
import Footer from './components/footer'
function App() {


  return (
    <>
      <div className={style.container}>
        <Header></Header>
        <Main></Main>
        <Habilidade></Habilidade>
        <Experiencias></Experiencias>
        <Sobre></Sobre>
        <Projectos></Projectos>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
