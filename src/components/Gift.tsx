import './Gift.css';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/carta.json';

export default function Gift() {
  return (
    <section className="gift">
      <h2 className="gift-title">Regalos</h2>

      <div className="gift-box">
        <Lottie animationData={animationData} loop className="lottie-animation" />

        <p className="gift-text">
          El mejor regalo será tu presencia, pero si deseas obsequiarme algo, cualquier detalle que venga de tu corazón será bien recibido y muy valorado.
        </p>

        <h3 className="qr-title">Transferencia Qr</h3>
        <img src="/qr.png" alt="QR de regalo" className="qr-image" />
      </div>
    </section>
  );
}
