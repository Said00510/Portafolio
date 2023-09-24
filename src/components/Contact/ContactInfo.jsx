import {GrLocation} from 'react-icons/gr';
import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephone} from 'react-icons/bs';
import { useTranslation } from "react-i18next";

function Info(){

    const[t] = useTranslation("global");

    return(
        <div className="contact infoContact">
            <h2>{t("contact.Information")}</h2>
            <div className="info-box container">
                <div>
                    <span><GrLocation/></span>
                    <p style={{margin: 0}}>{t("contact.street")} 212, Saboromdon <br />Ecuador - Quito</p>
                </div>

                <div className='gmail-info'>
                    <span><HiOutlineMail/></span>
                    <a href="mailto:dylanrivas200206@gmail.com">ttecladito@gmail.com</a>
                </div>

                <div>
                    <span><BsTelephone/></span>
                    <a href="tel:+593 96 378 9235">+593 96 378 9235</a>
                </div>
            </div>
        </div>
    )
}

export default Info