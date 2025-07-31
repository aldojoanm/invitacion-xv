import { useState } from 'react';
import './RSVP.css';

export default function RSVP() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleEnviar = () => {
    if (!nombre.trim() || !apellido.trim()) {
      alert('Por favor, completa tu nombre y apellido.');
      return;
    }

    const numeroWhatsApp = '59170845204'; 
    const mensaje = `Hola, soy ${nombre} ${apellido} y confirmo mi asistencia a tus 15 años. ¡Gracias por invitarme! 🎉`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="rsvp">
      <h2 className="rsvp-title">¡NO FALTES!</h2>

      {!mostrarFormulario ? (
        <button className="rsvp-button" onClick={handleMostrarFormulario}>
          Confirmar asistencia
        </button>
      ) : (
        <div className="rsvp-form">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <button className="rsvp-button" onClick={handleEnviar}>
            Enviar
          </button>
        </div>
      )}

      <p className="rsvp-footer">¡TE ESPERO PARA CELEBRAR MIS 15 AÑOS!</p>
    </section>
  );
}
