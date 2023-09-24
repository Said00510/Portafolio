import { Container } from "react-bootstrap";
import Info from './ContactInfo';
import Map from './ContactMap';
import { useTranslation } from "react-i18next";


function Contact (){

    const[t] = useTranslation("global");

    return(
        <section id="contact" >
            <h2 className="heading-name-skills">{t("contact.title")} <span className="yellow">{t("contact.titleSpan")}</span></h2>
            <Container className="wrapper-1">
                <Container>
                    <div className="box">
                        <div className="contact form">
                            <h2>{t("contact.titleh2")}</h2>
                            <form>
                                <div className="form-box">
                                    <div className="row50">
                                        <div className="input-box">
                                            <span>{t("contact.name")}</span>
                                            <input type="text" placeholder="Alexander" minLength={3} required/>
                                        </div>
                                        <div className="input-box">
                                            <span>{t("contact.lastname")}</span>
                                            <input type="text" placeholder={`${t("contact.lnplaceholder")}`}/>
                                        </div>
                                    </div>

                                    <div className="row50">
                                        <div className="input-box">
                                            <span>{t("contact.Mail")}</span>
                                            <input type="email" placeholder={`${t("contact.Mplaceholder")}`} required/>
                                        </div>
                                        <div className="input-box">
                                            <span>{t("contact.Number")}</span>
                                            <input type="text" placeholder={`${t("contact.Nplaceholder")}`} />
                                        </div>
                                    </div>

                                    <div className="row100">
                                        <div className="input-box">
                                            <span>{t("contact.Message")}</span>
                                            <textarea rows={7} style={{resize: 'none'}} placeholder={`${t("contact.Msplaceholder")}`}></textarea>
                                        </div>
                                    </div>

                                    <div className="row100">
                                        <div className="input-box">
                                            <input id="btn-submit" type="submit" value={`${t("contact.btnSend")}`} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Info/>
                        <Map/>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default Contact