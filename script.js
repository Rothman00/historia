// Frases dinámicas
const frases = [
  "Simpre juntos mi amor ❤️",
  "Una aventura a tu lado 🌍",
  "Siempre a tu lado",
  "Desde el inicio de nuestra historia",
  "Cada año cada dia cada momento juntos",
  "El amor que nos une, es eterno",
  "Juntos para siempre",
  "Una locura que nos unió más",
  "Cuando descubrimos un mundo nuevo",
  "El inicio de nuestra historia",
  "Tu sonrisa, mi mejor recuerdo",
  "Una aventura inolvidable",
];

// Mapear imágenes a videos
const hotspots = [
    {
        "top": 12.653669581774313,
        "left": 12.75,
        "video": "videos/video (1).mp4",
        "frase": frases[0]
    },
    {
        "top": 29.97293837284959,
        "left": 11.875,
        "video": "videos/video (2).mp4",
        "frase": frases[1]
    },
    {
        "top": 19.015849954006047,
        "left": 42.75,
        "video": "videos/video (3).mp4",
        "frase": frases[2]
    },
    {
        "top": 13.360578512022284,
        "left": 73,
        "video": "videos/video (4).mp4",
        "frase": frases[3]
    },
    {
        "top": 29.97293837284959,
        "left": 69.875,
        "video": "videos/video (5).mp4",
        "frase": frases[4]
    },
    {
        "top": 47.203843547643864,
        "left": 16.375,
        "video": "videos/video (6).mp4",
        "frase": frases[5]
    },
    {
        "top": 48.17584332673482,
        "left": 65.5,
        "video": "videos/video (7).mp4",
        "frase": frases[6]
    },
    {
        "top": 64.82354944306759,
        "left": 12.5,
        "video": "videos/video (8).mp4",
        "frase": frases[7]
    },
    {
        "top": 82.14281823414288,
        "left": 11.5,
        "video": "videos/video (9).mp4",
        "frase": frases[8]
    },
    {
        "top": 68.53482132686945,
        "left": 39.875,
        "video": "videos/video (10).mp4",
        "frase": frases[9]
    },
    {
        "top": 65.70718560587756,
        "left": 72,
        "video": "videos/video (11).mp4",
        "frase": frases[10]
    },
    {
        "top": 82.67299993182885,
        "left": 72,
        "video": "videos/video (12).mp4",
        "frase": frases[11]
    }
];

// Renderizar dinámicamente los hotspots en el collage
function renderHotspots() {
  const container = document.getElementById("collage-container");
  hotspots.forEach((h) => {
    let div = document.createElement("div");
    div.className = "hotspot";
    div.style.top = `${h.top}%`;
    div.style.left = `${h.left}%`;
    div.onclick = () => openVideo(h.video, h.frase);
    container.appendChild(div);
  });
}

// --- CONFIGURACIÓN ---
let modoEditor = false; // ⚡ Cambia a false para renderizar normalmente
const hotspotsPoint = []; // aquí se guardan los puntos

const container = document.getElementById("collage-container");

// Si estamos en modo editor, al hacer click en el collage guardamos coordenadas
if (modoEditor) {
  container.addEventListener("click", (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Crear marcador rojo
    const div = document.createElement("div");
    div.className = "hotspot";
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    container.appendChild(div);

    hotspotsPoint.push({
      top: y,
      left: x,
      video: "videos/videoX.mp4",
      frase: "Recuerdo X",
    });

    console.log("Hotspots actuales:", hotspotsPoint);
  });
}

if (!modoEditor) {
  renderHotspots();
}

function openVideo(src, frase) {
  document.getElementById("modal").classList.remove("hidden");
  let video = document.getElementById("modalVideo");
  video.src = src;
  audio.volume = src == 'assets/videogeneral.mp4' ? 0.3 : 1;
  video.play();
  document.getElementById("fraseTexto").innerText = frase;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  let video = document.getElementById("modalVideo");
  audio.volume = 1;
  video.pause();
  video.src = "";
}

function crearCorazones() {
  const heart = document.createElement("div");
  heart.className = "corazon";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 5 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(crearCorazones, 500);

// Reproductor de música
const canciones = [];
let indice = 0;
const audio = document.getElementById("audioPlayer");

function reproducir() {
  audio.src = canciones[indice];
  audio.play();
}

audio.addEventListener("ended", () => {
  indice = (indice + 1) % canciones.length;
  reproducir();
});

document.addEventListener("click", function initAudio() {
//   if (canciones.length === 0) {
//     for (let index = 1; index <= 1; index++) {
//       canciones.push(`music/fondo (${index}).mp3`);
//     }
//   }
  const bgMusic = new Audio("music/fondo (1).mp3");
  bgMusic.loop = true;
  bgMusic.play();
  document.removeEventListener("click", initAudio);
});

function crearFuegos() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const total = 150; // ↑ más partículas

  for (let i = 0; i < total; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 8 + 2; // velocidad aleatoria
    particles.push({
      x: window.innerWidth/2,
      y: window.innerHeight/2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      radius: Math.random() * 3 + 2,
      color: `hsl(${Math.random()*360},100%,50%)`
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.015; // se desvanece más lento
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fill();
    });
    if (particles.some(p => p.alpha > 0)) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }

  animate();
}

// Vincular al botón
document.querySelector(".boton-final").addEventListener("click", () => {
  crearFuegos();
});

function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}