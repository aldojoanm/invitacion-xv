import { useState } from 'react';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Invitation from './components/Invitation';
import Countdown from './components/Countdown';
import Location from './components/Location';
import Photos from './components/Photos';
import RSVP from './components/RSVP';
import Gift from './components/Gift';
import Schedule from './components/Schedule';
import './App.css';

export default function App() {
  const [stage, setStage] = useState<'hero' | 'welcome'>('hero');

  const handleEnter = () => {
    setStage('welcome');
  };

  return (
    <>
      {stage === 'hero' ? (
        <Hero onEnter={handleEnter} />
      ) : (
        <>
          <Welcome />
          <Invitation />
          <Countdown targetDate="2025-08-23T19:30:00" />
          <Location />
          <Schedule />
          <Photos />
          <Gift />
          <RSVP />
        </>
      )}
    </>
  );
}
