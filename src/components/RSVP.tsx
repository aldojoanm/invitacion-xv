import './RSVP.css';
import Lottie from 'lottie-react';
import arrowsDown from '../assets/lottie/carta2.json'; // ajusta ruta si es necesario

export default function RSVP() {
  return (
    <section className="rsvp">
      <h2 className="rsvp-title">¡NO FALTES!</h2>

      <div className="arrow-lottie">
        <Lottie animationData={arrowsDown} loop autoplay />
      </div>

      <a
        className="rsvp-button"
        href="https://docs.google.com/forms/tu-formulario" // cambia por tu enlace real
        target="_blank"
        rel="noopener noreferrer"
      >
        Confirmar asistencia
      </a>

      <p className="rsvp-footer">¡TE ESPERO PARA CELEBRAR MIS 15 AÑOS!</p>
    </section>
  );
}
