let usuarioActual = localStorage.getItem("usuario") || null;
let puntos = parseInt(localStorage.getItem("puntos") || "0");

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("usuario", user);
    localStorage.setItem("puntos", "0");
    window.location.href = "main.html";
  } else {
    alert("Completa todos los campos.");
  }
}

function cargarUsuario() {
  document.getElementById("nombreUsuario").innerText = localStorage.getItem("usuario");
  document.getElementById("puntosUsuario").innerText = `Puntos: ${localStorage.getItem("puntos")}`;
}

const preguntas = [
  {
    texto: "¿Qué lenguaje se usa para la web?",
    opciones: ["Python", "HTML", "C++"],
    correcta: 1
  },
  {
    texto: "¿Cuál es la sede principal de Campuslands?",
    opciones: ["Cúcuta", "Tibú", "Bucaramanga"],
    correcta: 2
  },
  {
    texto: "¿Cuánto tiempo dura la formación intensiva en Campuslands?",
    opciones: ["6 meses", "10 meses", "1 año y medio"],
    correcta: 1
  },
  {
    texto: "¿Cuál de las siguientes áreas NO hace parte del enfoque principal de Campuslands?",
    opciones: ["Desarrollo de software", "Inglés", "Medicina"],
    correcta: 2
  },
  {
    texto: "¿Cuál de estas ciudades NO tiene sede de Campuslands?",
    opciones: ["Bogotá", "Tibú", "Medellín"],
    correcta: 2
  },
  {
    texto: "¿Qué habilidades complementarias se fortalecen en Campuslands además de lo técnico?",
    opciones: ["Habilidades blandas", "Contabilidad", "Cocina"],
    correcta: 0
  },
  {
    texto: "¿Qué idioma se enseña como parte del programa en Campuslands?",
    opciones: ["Portugués", "Francés", "Inglés"],
    correcta: 2
  },
  {
    texto: "¿Cuál es uno de los objetivos principales de Campuslands?",
    opciones: ["Formar atletas profesionales", "Formar desarrolladores integrales", "Formar músicos clásicos"],
    correcta: 1
  },
  {
    texto: "¿Qué tipo de formación ofrece Campuslands?",
    opciones: ["Virtual 100%", "Presencial intensiva", "Solo fines de semana"],
    correcta: 1
  },
  {
    texto: "¿Qué se espera de los estudiantes en Campuslands además del aprendizaje técnico?",
    opciones: ["Habilidad para trabajar en equipo", "Conocimiento en biología", "Experiencia en arquitectura"],
    correcta: 0
  },
  {
    texto: "¿Qué ciudad de la frontera colombo-venezolana tiene una sede de Campuslands?",
    opciones: ["Tibú", "Cúcuta", "Leticia"],
    correcta: 1
  },
  {
    texto: "¿Cómo se caracteriza la formación en Campuslands?",
    opciones: ["Teórica y flexible", "Libre y asistida", "Práctica e intensiva"],
    correcta: 2
  },
  {
    texto: "¿Cuál es una de las fortalezas clave de Campuslands?",
    opciones: ["Ofrecer carreras universitarias", "Desarrollar habilidades blandas", "Brindar cursos de cocina"],
    correcta: 1
  },
  {
    texto: "¿Qué rol tiene el inglés en Campuslands?",
    opciones: ["Es opcional", "Es parte fundamental del programa", "Solo se enseña en los últimos meses"],
    correcta: 1
  }
  
];

let indice = 0;

function cargarPregunta() {
  const p = preguntas[indice];
  document.getElementById("pregunta").innerText = p.texto;

  const contenedor = document.getElementById("opciones");
  contenedor.innerHTML = "";

  p.opciones.forEach((opcion, i) => {
    const btn = document.createElement("button");
    btn.classList.add("opcion");
    btn.innerText = opcion;
    btn.onclick = () => verificarRespuesta(i);
    contenedor.appendChild(btn);
  });
}

function verificarRespuesta(i) {
  const p = preguntas[indice];
  const resultadoDiv = document.getElementById("resultado");
  
  if (i === p.correcta) {
    puntos += 10;
    resultadoDiv.innerText = "¡Correcto! +10 puntos";
    resultadoDiv.classList.remove("hidden");
    resultadoDiv.style.textShadow = "0 0 20px #00FF00";
  } else {
    resultadoDiv.innerText = "Incorrecto";
    resultadoDiv.style.textShadow = "0 0 20px #FF0000";
    resultadoDiv.classList.remove("hidden");
  }

  localStorage.setItem("puntos", puntos);
  indice = (indice + 1) % preguntas.length;
  cargarPregunta();
  cargarUsuario();
  
  // Limpiar el mensaje después de 2 segundos
  setTimeout(() => {
    resultadoDiv.innerText = "";
    resultadoDiv.classList.add("hidden");
  }, 2000);
}

const recompensas = [
  { nombre: "Sticker Campus", costo: 20 },
  { nombre: "Botella Eco", costo: 50 },
  { nombre: "Sudadera Oficial", costo: 100 }
];

function mostrarRecompensas() {
  const contenedor = document.getElementById("listaRecompensas");
  contenedor.innerHTML = "";

  recompensas.forEach((r) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${r.nombre}</strong> - ${r.costo} pts 
    <button onclick="canjear(${r.costo})">Canjear</button>`;
    contenedor.appendChild(div);
  });
}

function canjear(costo) {
  if (puntos >= costo) {
    puntos -= costo;
    localStorage.setItem("puntos", puntos);
    alert("¡Canjeado con éxito!");
    mostrarRecompensas();
  } else {
    alert("No tienes suficientes puntos.");
  }
}

// Mostrar datos en rewards.html
function mostrarDatosUsuarioRewards() {
  const userName = localStorage.getItem('username') || localStorage.getItem('usuario') || 'Usuario';
  const userPoints = localStorage.getItem('userPoints') || localStorage.getItem('puntos') || '0';
  if(document.getElementById('userName'))
    document.getElementById('userName').textContent = userName;
  if(document.getElementById('userPoints'))
    document.getElementById('userPoints').textContent = userPoints;
}

// Ejecutar automáticamente en rewards.html
window.addEventListener('DOMContentLoaded', mostrarDatosUsuarioRewards);
