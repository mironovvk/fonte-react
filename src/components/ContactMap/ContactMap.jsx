import './ContactMap.scss';

const ContactMap = ({ mapSrc, text, mapHeight = 300 }) => {
  return (
    <div className="contact-map">
      <iframe
        className="contact-map__iframe"
        src={mapSrc}
        width="100%"
        height={mapHeight}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {text && <p className="contact-map__text">{text}</p>}
    </div>
  );
};

export default ContactMap;
