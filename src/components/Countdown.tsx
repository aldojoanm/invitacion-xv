import { useState, useEffect } from 'react';
import './Countdown.css';

type CountdownProps = {
  targetDate: string;
};

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;
    if (distance < 0) return null;
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleAddToCalendar = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mis+XV+Años+de+Fernanda&dates=20250823T223000Z/20250824T030000Z&details=Celebración+de+mis+XV&location=Santa+Cruz+de+la+Sierra`;
    window.open(url, '_blank');
  };

  return (
    <section className="princess-section">
      <video
        className="princess-video-bg"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <h2 className="princess-title">Me gustaría que seas parte de mi día especial</h2>

      <img src="/corona.png" alt="Corona" className="crown-image" />

      <div className="date-line-container">
        <div className="date-box-with-lines">
          <div className="line" />
          <div className="date-box-label">SABADO</div>
          <div className="line" />
        </div>
        <div className="date-rectangle">
          <div className="date-middle">SCZ</div>
          <div className="date-top">23</div>
          <div className="date-bottom">2025</div>
        </div>
        <div className="date-box-with-lines">
          <div className="line" />
          <div className="date-box-label">AGOSTO</div>
          <div className="line" />
        </div>
      </div>

      <div className="countdown-wrapper">
        <div className="countdown-decorator">༺༻༺༻༺༻༺</div>
        {timeLeft ? (
          <>
            <div className="countdown-item">
              <div className="count-num">{timeLeft.days}</div>
              <div className="count-label">DÍAS</div>
            </div>
            <div className="countdown-item">
              <div className="count-num">{timeLeft.hours}</div>
              <div className="count-label">HRS</div>
            </div>
            <div className="countdown-item">
              <div className="count-num">{timeLeft.minutes}</div>
              <div className="count-label">MIN</div>
            </div>
            <div className="countdown-item">
              <div className="count-num">{timeLeft.seconds}</div>
              <div className="count-label">SEG</div>
            </div>
          </>
        ) : (
          <div>¡El evento ha comenzado!</div>
        )}
        <div className="countdown-decorator">༺༻༺༻༺༻༺</div>
      </div>

      <button className="calendar-btn" onClick={handleAddToCalendar}>
        AGENDAR EL EVENTO
      </button>
    </section>
  );
}
