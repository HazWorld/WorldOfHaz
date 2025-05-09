import { useEffect, useRef } from 'react';

function ScrollSequence() {
  const canvasRef = useRef(null);
  const frameCount = 120;

  // Update this to match your naming pattern
  const getFrameSrc = (index) =>
    `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = new Image();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = (index) => {
      img.src = getFrameSrc(index);
      img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const scale = 0.4;
        const imgWidth = canvas.width * scale;
        const imgHeight = canvas.height * scale;
        const x = (canvas.width - imgWidth) / 2;
        const y = (canvas.height - imgHeight) / 2;

        context.drawImage(img, x, y, imgWidth, imgHeight);
      };
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => render(frameIndex + 1));
    };

    window.addEventListener('scroll', onScroll);
    render(1); // initial frame

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ height: '300vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          display: 'block',
        }}
      />
    </div>
  );
}

export default ScrollSequence;