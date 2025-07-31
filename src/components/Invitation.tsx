import './Invitation.css';

export default function Invitation() {
  return (
    <div className="outer-bg">
      <section className="invitation">
        {/* Carpa arriba */}
        <svg
  className="carpa arriba"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="
      M0,400
      C360,120 540,30 720,250
      C900,30 1080,120 1440,320
      L1440,0
      L0,0
      Z
    "
  />
</svg>




        <div className="invitation-content">
          <p className="section-title">Festejo</p>
          <h2 className="main-invite">MIS XV AÑOS</h2>
          <p className="invite-desc">
            Me encantaría que me acompañes en esta celebración única y crear juntos recuerdos inolvidables. ¡No faltes!
          </p>

          <div className="line-section">
            <div className="line-label">Sin pases</div>
            <div className="line"></div>
            <div className="line-label">Tienes</div>
          </div>

          <p className="signature">Invitado</p>
        </div>

        {/* Carpa abajo (invertida) */}
        <svg
          className="carpa abajo"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
            M0,0 
            C480,280 720,300 720,300 
            C720,300 960,280 1440,0 
            L1440,320 L0,320 Z"
          />
        </svg>
      </section>
    </div>
  );
}
