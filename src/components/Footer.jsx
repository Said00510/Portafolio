import { FaXTwitter } from 'react-icons/fa6';
import { BsYoutube } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Footer(){

    const[t] = useTranslation("global");

    return(
        <footer className='footer'>
            <Container>
                <Row style={{alignItems: 'center', gap: "7px"}}>
                    <Col md={4}>
                            <p>{t("footer.designed")} <span><a href="#">Dylan Rivas</a></span> </p>                    
                    </Col>
                    <Col md={4}>
                            <p>Copyright © 2023
                            </p>                    
                    </Col>
                        <Col md={4} className='footer-social'>
                            <a href="https://twitter.com/XAradiiaX" target='_blank'><FaXTwitter/></a>
                            <a href="#" target='_blank'><BsYoutube/></a>           
                            <a href="https://github.com/Said00510" target='_blank'><BsGithub/></a>           
                            <a href="#" target='_blank'><BsInstagram/></a>           
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer