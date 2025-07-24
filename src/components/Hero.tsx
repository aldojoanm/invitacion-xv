import './Hero.css';

type HeroProps = {
  onEnter: () => void;
};

export default function Hero({ onEnter }: HeroProps) {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video-bg">
        <source src="/bg.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="stars-bg"></div>
      <img src="/corona.png" alt="Corona" className="crown-image" />
      <h1 className="main-title">XV Años</h1>
      <p className="subtitle">Un capítulo nuevo que celebrar</p>
      <div className="arrow">
        <span className="down-arrows">⌄</span>
      </div>

      <button onClick={onEnter}>INGRESAR A MI INVITACION</button>
    </section>
  );
}
