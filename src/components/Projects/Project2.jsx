import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';                           
import { BsFillLightningChargeFill } from 'react-icons/bs';            
import ProjectTwo from '../../assets/projects img/project2.png' ;
import { FaReact } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Project2(){

    const[t] = useTranslation("global");

    return(
        <article>
            <div>

                <div className="project-wrapper">

                    <div className="img-wrapper">
                        <div className="projects-wrapper-img">
                            <img loading='lazy'
                                 className="projects-imgs" 
                                 src={ProjectTwo} 
                                 alt="Imagen de proyecto" />
                        </div>
                    </div>

                        <div className="info-wrapper">
                            <div className="information">
                                    <h2 className="projects-title">{t("projectTwo.title")} <span className="red"> {t("projectTwo.titleSpan")}</span></h2>
                                    <div className="projects-card-langes">
                                        <span title="HTML5" className="langes-html"><AiFillHtml5/></span>
                                        <span title="CSS3" className="langes-css"><BiLogoCss3/></span>
                                        <span title="JavaScript" className="langes-js"><BiLogoJavascript/></span>
                                        <span title="React" className="langes-react"><FaReact/></span>
                                    </div>
                                    <p className="projects-text">

                                    {t("projectTwo.description")}

                                     <span className="oranje"> {t("projectTwo.descriptionSpan")} </span> 

                                     {t("projectTwo.descriptionContinue")}                                     
                                     </p>

                                    <div className="projects-btn">
                                        <button className="btnP btn-github"><a href="https://github.com/Said00510/ToDoApp/" target='_blank'>{t("projects-sec.btnCode")} <AiFillGithub/></a></button>
                                        <button className="btnP btn-demo"><a href="https://to-do-app-said00510.vercel.app/" target='_blank'>{t("projects-sec.btnDemo")} <BsFillLightningChargeFill/></a></button>
                                    </div>
                            </div>
                        </div>

                </div>

            </div>
        </article>

    )
}

export default Project2