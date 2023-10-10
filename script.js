window.addEventListener('load', () => {
  const img = document.getElementById('img');
  img.src = "golden-retriever.jpg";

  const canvas = document.getElementById('canvas');
  const canvasImage = new Image();
  canvasImage.src = "golden-retriever.jpg"

  const ctx = canvas.getContext('2d');
  ctx.drawImage(canvasImage, 0, 0, 320, 257);
});
