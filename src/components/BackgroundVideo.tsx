// src/components/BackgroundVideo.tsx
export default function BackgroundVideo() {
  return (
    <video
      className="global-background-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
}
