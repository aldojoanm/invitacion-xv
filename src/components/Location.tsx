import './Location.css';
import Lottie from 'lottie-react';
import corbatinAnimation from '../assets/lottie/corbatin.json';

export default function ReceptionLocation() {
  return (
    <section className="reception-section">
      <div className="reception-content">
        <div className="reception-left">
          <img 
            src="lostajibos.jpg" 
            alt="Los Tajibos" 
            className="reception-image"
          />
          <h2 className="reception-title">Recepción Social</h2>
          <div className="reception-info">
            <div className="reception-time">19:30 h</div>
            <div className="reception-location">
              <strong>LOS TAJIBOS</strong><br />
              Salón<br />
              Karumbe
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/YYAjg7LZPN8Jnnkv9"
            className="reception-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            VER UBICACIÓN
          </a>
        </div>

        <div className="reception-right">
          {/* Reemplazamos el emoji con la animación Lottie */}
          <div className="dress-icon">
            <Lottie animationData={corbatinAnimation} loop={true} style={{ width: 80, height: 80, margin: '0 auto 0.5rem' }} />
          </div>
          <h3 className="dress-title">Vestimenta</h3>
          <p className="dress-type">SEMI FORMAL<br />Colores Reservados</p>
          <div className="dress-colors">
            <span className="color blue1" />
            <span className="color blue2" />
            <span className="color blue3" />
            <span className="color blue4" />
          </div>
          <p className="dress-note">Serán de uso exclusivo para la quinceañera</p>
        </div>
      </div>
    </section>
  );
}
