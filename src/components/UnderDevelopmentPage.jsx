import heroImage from '../images/rn.png';
import brandIcon from '../images/rn (1).png';
import { FaWhatsapp } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

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
        href="https://wa.me/?text=Hola%20REALINOV%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={brandIcon} alt="REALINOV icon" className="footer-icon" />
          <span>REALINOV</span>
        </div>
        <span>© {currentYear}</span>
      </footer>
    </div>
  );
}
