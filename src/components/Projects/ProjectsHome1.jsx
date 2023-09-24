import Project from './Project'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import { Container} from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ProjectsHome (){
    const[t] = useTranslation("global");

    return(
        <section  id='projects'  className='container' style={{paddingBottom: '100px'}}>
                <h2 className="heading-name-skills">{t("projects-sec.projectTitle")} <span className="yellow">{t("projects-sec.projectTitleSpan")}</span></h2>  
                <Container className='projects-home-container'>
                    <Project/>
                    <Project2/>
                    <Project3/>
                    <Project4/>
                </Container>
        </section>
    )
}

export default ProjectsHome