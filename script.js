// Frases dinámicas
const frases = [
  "Nuestro primer viaje juntos",
  "El día que me robaste un beso",
  "Nuestra primera cita",
  "Un momento inolvidable",
  "El abrazo que me dio calma",
  "Nuestra aventura en la playa",
  "El día que dijimos te amo",
  "Una locura que nos unió más",
  "Cuando descubrimos un mundo nuevo",
  "El inicio de nuestra historia",
  "Tu sonrisa, mi mejor recuerdo",
  "Nuestro aniversario especial"
];

// Mapear imágenes a videos
const hotspots = [
  { id: 1, video: "videos/video1.mp4", frase: frases[0] },
  { id: 2, video: "videos/video2.mp4", frase: frases[1] },
  { id: 3, video: "videos/video3.mp4", frase: frases[2] },
  { id: 4, video: "videos/video4.mp4", frase: frases[3] },
  { id: 5, video: "videos/video5.mp4", frase: frases[4] },
  { id: 6, video: "videos/video6.mp4", frase: frases[5] },
  { id: 7, video: "videos/video7.mp4", frase: frases[6] },
  { id: 8, video: "videos/video8.mp4", frase: frases[7] },
  { id: 9, video: "videos/video9.mp4", frase: frases[8] },
  { id: 10, video: "videos/video10.mp4", frase: frases[9] },
  { id: 11, video: "videos/video11.mp4", frase: frases[10] },
  { id: 12, video: "videos/video12.mp4", frase: frases[11] }
];

// Renderizar dinámicamente los hotspots en el collage
function renderHotspots() {
  const container = document.getElementById("collage-container");
  hotspots.forEach((h, index) => {
    let div = document.createElement("div");
    div.className = "hotspot";
    div.style.top = `${10 + index * 5}%`;   // posiciones provisionales
    div.style.left = `${15 + index * 3}%`;
    div.onclick = () => openVideo(h.video, h.frase);
    container.appendChild(div);
  });
}

function openVideo(src, frase) {
  document.getElementById("modal").classList.remove("hidden");
  let video = document.getElementById("modalVideo");
  video.src = src;
  video.play();
  document.getElementById("fraseTexto").innerText = frase;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  let video = document.getElementById("modalVideo");
  video.pause();
  video.src = "";
}

window.onload = renderHotspots;
