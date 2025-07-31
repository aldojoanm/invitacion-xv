import './Schedule.css';
import Lottie from 'lottie-react';
import cartaAnimation from '../assets/lottie/carta.json';
import celebrationAnimation from '../assets/lottie/Confetti.json';
import crownAnimation from '../assets/lottie/corbatin.json';

const events = [
  { name: "Recepción", time: "19:30", animation: cartaAnimation },
  { name: "Acto Central", time: "22:00", animation: crownAnimation },
  { name: "Fiesta", time: "22:30", animation: celebrationAnimation },
];

export default function Schedule() {
  return (
    <section className="schedule-section">
      <h2 className="schedule-title">Cronograma</h2>
      <div className="timeline-container">
        
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="animation-wrapper">
              <Lottie animationData={event.animation} loop={true} />
            </div>
            <div className="connector">
              <div className="line" />
              {index !== events.length - 1 && <div className="dot" />}
            </div>
            <div className="text-wrapper">
              <h3>{event.name}</h3>
              <p>{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
