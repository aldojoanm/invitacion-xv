import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Lottie from 'lottie-react';
import corbatinAnimation from '../assets/lottie/corbatin.json';
import './Photos.css';

const images = [
  '/photos/photo1.jpg',
  '/photos/photo2.jpg',
  '/photos/photo3.jpg',
  '/photos/photo4.jpg',
  '/photos/photo5.jpg',
];

export default function Photos() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [showForm, setShowForm] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    // Aseguramos que files no sea null, si es null enviamos array vacío
    const files = e.target.files ? Array.from(e.target.files).slice(0, 10) : [];
    setSelectedFiles(files);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Se han seleccionado ${selectedFiles.length} fotos para subir.`);
    setShowForm(false);
    setSelectedFiles([]);
  }

  return (
    <section className="photos">
      <div className="double-border-container">
        <img src={currentImage} alt="Foto aleatoria" />
      </div>

      <div className="lottie-wrapper">
        <Lottie animationData={corbatinAnimation} loop={true} />
      </div>

      <p className="invite-text">
        Te invitamos a compartir los momentos especiales de nuestro evento a través de tus fotografías.
        Apreciamos que capturen y compartan sus recuerdos para que todos podamos revivir esta ocasión tan especial.
      </p>

      <button className="share-button" onClick={() => setShowForm(true)}>
        COMPARTIR FOTOGRAFÍAS
      </button>

      {showForm && (
        <form className="upload-form" onSubmit={handleSubmit}>
          <label>
            Selecciona hasta 10 fotos:
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </label>
          <div>
            <button type="submit" disabled={selectedFiles.length === 0}>
              Subir Fotos
            </button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
