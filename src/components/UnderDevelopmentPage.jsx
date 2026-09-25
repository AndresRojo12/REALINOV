import heroImage from '../images/rn.png';
import brandIcon from '../images/rn (1).png';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const currentYear = new Date().getFullYear();
const whatsappNumber = (import.meta.env.VITE_WHATSAPP || '3106059094').replace(/\D/g, '');
const whatsappLink = `https://wa.me/${whatsappNumber.startsWith('57') ? whatsappNumber : `57${whatsappNumber}`}?text=${encodeURIComponent('Hola REALINOV, quiero más información.')}`;
const emailAddress = import.meta.env.VITE_EMAIL || 'realinovbussines@gmail.com';
const companyAddress = import.meta.env.VITE_ADDRESS || 'Santa Rosa de Osos, Antioquia';

export default function UnderDevelopmentPage() {
  return (
    <div className="under-development-page">
      <div className="content-shell">
        <img src={heroImage} alt="REALINOV" className="hero-image" />
        <h1 className="title">REALINOV</h1>
        <p className="tagline">Transformamos problemas empresariales en soluciones tecnológicas.</p>
        <p className="subtitle">Estamos preparando nuestro sitio web.</p>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <footer className="site-footer">
        <div className="footer-brand-row">
          <div className="footer-brand">
            <img src={brandIcon} alt="REALINOV icon" className="footer-icon" />
            <span>REALINOV</span>
          </div>

          <div className="footer-contact">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="footer-link">
              <FaWhatsapp />
              <span>{whatsappNumber}</span>
            </a>

            <a href={`mailto:${emailAddress}`} className="footer-link">
              <FaEnvelope />
              <span>{emailAddress}</span>
            </a>

            <span className="footer-link footer-link-static">
              <FaMapMarkerAlt />
              <span>{companyAddress}</span>
            </span>
          </div>
        </div>

        <p className="footer-tagline">Transformamos problemas empresariales en soluciones tecnológicas.</p>
        <span className="footer-copy">© {currentYear} REALINOV</span>
      </footer>
    </div>
  );
}
