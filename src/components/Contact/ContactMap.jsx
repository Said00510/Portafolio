function Map (){
    return(
        <div className="contact map">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.188979736082!2d-78.49531726727412!3d-0.1862298392555981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7ce9ba8755%3A0x755f2bd0d36e70a7!2sLa%20Carolina%2C%20Quito!5e0!3m2!1ses!2sec!4v1694814624919!5m2!1ses!2sec"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            ></iframe>
        </div>
    )
}

export default Map