import './Invitation.css';

export default function Invitation() {
  return (
    <div className="outer-bg">
      <section className="invitation">
        {/* Carpa arriba */}
        <svg className="carpa arriba" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,320 C360,240 600,80 720,160 C840,240 1080,240 1440,160 L1440,0 L0,0 Z" />
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
        <svg className="carpa abajo" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,0 C360,80 600,240 720,160 C840,80 1080,80 1440,160 L1440,320 L0,320 Z" />
        </svg>
      </section>
    </div>
  );
}
