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
  { id: 1, video: "videos/video (1).mp4", frase: frases[0] },
  { id: 2, video: "videos/video (2).mp4", frase: frases[1] },
  { id: 3, video: "videos/video (3).mp4", frase: frases[2] },
  { id: 4, video: "videos/video (4).mp4", frase: frases[3] },
  { id: 5, video: "videos/video (5).mp4", frase: frases[4] },
  { id: 6, video: "videos/video (6).mp4", frase: frases[5] },
  { id: 7, video: "videos/video (7).mp4", frase: frases[6] },
  { id: 8, video: "videos/video (8).mp4", frase: frases[7] },
  { id: 9, video: "videos/video (9).mp4", frase: frases[8] },
  { id: 10, video: "videos/video (10).mp4", frase: frases[9] },
  { id: 11, video: "videos/video (11).mp4", frase: frases[10] },
  { id: 12, video: "videos/video (12).mp4", frase: frases[11] }
];

// Renderizar dinámicamente los hotspots en el collage
function renderHotspots() {
  const container = document.getElementById("collage-container");
  hotspots.forEach((h, index) => {
    let div = document.createElement("div");
    div.className = "hotspot";
    div.style.top = `${10 + index * 5}%`;
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

function crearCorazones() {
  const heart = document.createElement("div");
  heart.className = "corazon";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(crearCorazones, 500);


// Reproductor de música
const canciones = [];
let indice = 0;
const audio = document.getElementById("audioPlayer");

function reproducir() {
    if (canciones.length === 0) {
        for (let index = 1; index <= 10; index++) {
            canciones.push(`music/fondo (${index}).mp3`);
        }
    }
    audio.src = canciones[indice];
    audio.play();
}

audio.addEventListener("ended", () => {
    indice = (indice + 1) % canciones.length;
    reproducir();
});

reproducir();