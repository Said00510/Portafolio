
import Hamburger from './HamburgerIcon/Hamburger';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Theme from '../assets/bulb.svg'
import Logo from '../assets/sol y luna.png'
import { useTranslation } from "react-i18next";


function NavBar(){

    const[t, i18n] = useTranslation("global");


    //btn hamburger
    const [clicked, setClicked] = useState(false);
    const handleClick = () =>{
        setClicked(!clicked);
    }

    //TEMAS PARA LA WEB DIA O NOCHE
    const [isLightTheme, setIsLightTheme] = useState(false);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    
        // Agrega o quita la clase al elemento <body> del documento HTML
        const body = document.body;
        if (isLightTheme) {
          body.classList.remove('light'); // Remueve la clase si el tema es claro
        } else {
          body.classList.add('light'); // Agrega la clase si el tema es oscuro
        }
      };
     

    return(
        <header  style={{height: '80px',}}>
            <div className={`bgdiv initial ${clicked ? 'active' : ''}`}></div>
            <Navbar className="navbar" data-bs-theme="dark">

                <Container>

                    <Navbar.Brand href="#home"><img loading='lazy' src={Logo} alt="LogoTipo" className='logo-img'/></Navbar.Brand>

                    <Nav className="me-mid nav-w" >

                        <div className={`links-wrapper ${clicked ? 'active': ""}`}>

                            <Nav.Link href="#home" className='  links-hover' onClick={handleClick}>
                                {t("Navbar.Home")}
                            </Nav.Link>

                            <Nav.Link href="#about" className=' links-hover' onClick={handleClick}>
                                {t("Navbar.About")}
                            </Nav.Link>

                            <Nav.Link href="#projects" className=' links-hover' onClick={handleClick}>
                                {t("Navbar.Projects")}
                            </Nav.Link>

                            <Nav.Link href="#contact" className=' links-hover' onClick={handleClick}>
                                {t("Navbar.Contact")}
                            </Nav.Link>

                            <span href="#" className='links-hover' style={{padding: '0', fontWeight: '500'}}>

                                <NavDropdown title={`${t("Navbar.Language")}`} id="basic-nav-dropdown" >
                                    <NavDropdown.Item onClick={() => i18n.changeLanguage('es')}>
                                        {t("Navbar.Languages-es")}
                                    </NavDropdown.Item>

                                    <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>
                                        {t("Navbar.Languages-en")}
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </span>

                        </div>

                        <div id="hamburger" style={{display: 'none'}}>
                            <Hamburger clicked={clicked} handleClick={handleClick}/>
                        </div>            
                        <div className='theme-wrapper'>

                            <img loading='lazy' onClick={toggleTheme} src={Theme} alt="Thema img" className='theme-img' />

                            <small>
                                {isLightTheme ? `${t("Navbar.themeLight")}` : `${t("Navbar.themeDark")}`}
                            </small>
                        </div>
                        
                    </Nav>

                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar











