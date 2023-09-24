import { Container, Row, Col } from "react-bootstrap";
import { FiDownload } from 'react-icons/fi';
import { BsFillSendFill } from 'react-icons/bs';
import Home2 from "./Home2";
import myimg from '../../../public/favicon.png';
import { useTranslation } from "react-i18next";

function Home(){

    const[t] = useTranslation("global");

    return(
    <section className="section1" id="home">
        <Container>
            <Container  className="wrapper">
                <Row>
                    <Col md={12} className="home-content">
                        <img className="img-home" src={myimg} alt="imagen del logo" />
                    </Col>
                </Row>

                <Row className="home-row">
                    <Col md={12} className="home-content">
                        <h1 className="heading-name">
                            <strong>ARADIA</strong>
                        </h1>

                        <div className="home-type">
                                <p>{t("header-homeOne.description")}</p>
                        </div>

                        <div className="home-wrapper-btns">
                            <button>
                                <a className="btn-home btn1" href="../../../public/downloads/CV.pdf" download>
                                    {t("header-homeOne.Download")} <FiDownload/>
                                </a>
                            </button>

                            <button>
                                <a className="btn-home btn2" href="mailto:ttecladito@gmail.com">
                                    {t("header-homeOne.Contact")} <BsFillSendFill/>
                                </a>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        < Home2/>
    </section>
    )
}

export default Home