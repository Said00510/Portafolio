import { Container, Row, Col } from "react-bootstrap";
import Astro from '../../assets/tecnologias/astro.png'
import Boostrap from '../../assets/tecnologias/Boostrap.png'
import Css from '../../assets/tecnologias/Css.png'
import Git from '../../assets/tecnologias/Git.png'
import Html from '../../assets/tecnologias/Html.png'
import Javascript from '../../assets/tecnologias/javascript.png'
import React from '../../assets/tecnologias/React.png'
import Sass from '../../assets/tecnologias/Sass.png'
import Vite from '../../assets/tecnologias/Vite.png'
import { useTranslation } from "react-i18next";


function Skills(){
    
    const[t] = useTranslation("global");

    return(
        <section style={{padding:'100px 0'}}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="heading-name-skills">
                            {t("skills-sec.skillsTitle")}
                            <span className="yellow"> {t("skills-sec.skillsTitleSpan")}</span>
                        </h2>

                        <Container className="skills">
                        <div className="skills-info">
                            <strong>HTML5</strong>
                            <span><img loading='lazy' src={Html} alt="imagen de HTML icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>CSS3</strong>
                            <span><img loading='lazy' src={Css} alt="imagen de CSS3 icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>JavaScript</strong>
                            <span><img loading='lazy' src={Javascript} alt="imagen de Javascript icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>React</strong>
                            <span><img loading='lazy' src={React} alt="imagen de React icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>Git</strong>
                            <span><img loading='lazy' src={Git} alt="imagen de Git icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>Sass</strong>
                            <span><img loading='lazy' src={Sass} alt="imagen de Sass icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>Astro</strong>
                            <span><img loading='lazy' src={Astro} alt="imagen de Astro icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>Vite</strong>
                            <span><img loading='lazy' src={Vite} alt="imagen de Vite icono" /></span>
                        </div>
                        <div className="skills-info">
                            <strong>Boostrap</strong>
                            <span><img loading='lazy' src={Boostrap} alt="imagen de Vite icono" /></span>
                        </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills