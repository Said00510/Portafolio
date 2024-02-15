import "./style.css";
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import Skills from './components/About/Skills'
import ProjectsHome from './components/Projects/ProjectsHome1'
import Contact from './components/Contact/Contact'
import { Container } from "react-bootstrap";


function App() {

  return (
    <>
    <NavBar/>
    <Container>
    <Home/>
    <Skills/>
    <ProjectsHome/>
    <Contact/>
    </Container>
    <Footer/>
    </>
  )
}

export default App
