import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import ProjectThree from '../../assets/projects img/project3.png';   
import React from '../../assets/tecnologias/React.png'; 
import { useTranslation } from "react-i18next";

function Project3(){

    const[t] = useTranslation("global");

    return(
        <article>
            <div>

                <div className="project-wrapper">

                    <div className="img-wrapper">
                        <div className="projects-wrapper-img">
                            <img loading='lazy'
                             className="projects-imgs" 
                             src={ProjectThree} 
                             alt="Imagen de proyecto" />
                        </div>
                    </div>

                        <div className="info-wrapper">
                            <div className="information">
                                    <h2 className="projects-title">{t("projectThree.title")} <span className="red">{t("projectThree.titleSpan")}</span></h2>
                                    <div className="projects-card-langes">
                                        <span title="HTML5" className="langes-html"><AiFillHtml5/></span>
                                        <span title="CSS3" className="langes-css"><BiLogoCss3/></span>
                                        <span title="JavaScript" className="langes-js"><BiLogoJavascript/></span>
                                    </div>
                                    <p className="projects-text">

                                    {t("projectThree.description")}

                                    <span className="oranje"> {t("projectThree.descriptionSpan")} </span>

                                    {t("projectThree.descriptionContinue")} 

                                    <span className="oranje"> {t("projectThree.descriptionSpan2")}</span>

                                    </p>
                                    
                                    <div className="projects-btn">
                                        <button className="btnP btn-github"><a href="https://github.com/Said00510/PasswordGenerator" target='_blank'>{t("projects-sec.btnCode")} <AiFillGithub/></a></button>
                                        <button className="btnP btn-demo"><a href="https://pass-gen-aradiacode.vercel.app/" target='_blank'>{t("projects-sec.btnDemo")} <BsFillLightningChargeFill/></a></button>
                                    </div>
                            </div>
                        </div>

                </div>

            </div>
        </article>
    )
}

export default Project3