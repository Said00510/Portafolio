import { Container, Row, Col } from "react-bootstrap"; //importamos varios elemento de boostrap en una sola linea
import Tilt from "react-parallax-tilt"; //Sirve para poder hacer un efecto hover chulo en la imagines
import myImg from '../../assets/avatarTryal.webp';
import { useTranslation } from "react-i18next";


function Home2(){

    const[t] = useTranslation("global");

    return(
        <Container fluid>

                <h2 id="about" className="heading-name-skills">
                    {t("header-homeTwo.Who")} 
                    <span className="yellow"> {t("header-homeTwo.AmI_span")}</span>
                </h2>  

            <Container >
                <Row className="home-card">
                    <Col md={8} className="home-aboutme">

                        <h2>
                            {t("header-homeTwo.letMeIntroduce")} 
                            <span className="yellow"> {t("header-homeTwo.letMeIntroduce_span")}</span>
                        </h2>

                        <p className="home-aboutme-info">
                            {t("header-homeTwo.programmingLove")}
                                <br />
                                <br /> 
                            {t("header-homeTwo.learnedTechnologies")}
                            <i>
                                <b className="yellow"> JavaScript, React, Html y CSS.</b>
                            </i>
                                <br />
                                <br /> 
                            {t("header-homeTwo.interestedInLearning")}
                            
                            <i>
                                <b className="yellow"> Python, PHP, NodeJs, etc. </b>
                            {t("header-homeTwo.andAlsoInterestedIn")} 
                                <b className="yellow"> {t("header-homeTwo.andAlsoInterestedIn_span")} </b> {t("header-homeTwo.and")}

                                <b className="yellow"> {t("header-homeTwo.andAlsoInterestedIn_span2")}. </b>

                            </i>
                            <br />
                            <br />
                            {t("header-homeTwo.applyKnowledge")}
                            <i>
                                <b className="yellow"> JavaScript</b> {t("header-homeTwo.and")}
                                <b className="yellow"> React.</b>
                            </i>
                        </p>

                    </Col>
                    <Col md={4} className="home-aboutme-avatar">
                        <Tilt>
                            <img loading='lazy' src={myImg} className="home-avatar-img" alt="avatar"/> 
                        </Tilt>
                    </Col>   
                </Row>
            </Container>
        </Container>
    )
}

export default Home2