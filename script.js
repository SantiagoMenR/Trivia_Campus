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
    texto: "¿Cuál es la capital de Colombia?",
    opciones: ["Bogotá", "Medellín", "Cali"],
    correcta: 0
  },
  {
    texto: "¿Qué lenguaje se usa para la web?",
    opciones: ["Python", "HTML", "C++"],
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
  if (i === p.correcta) {
    puntos += 10;
    alert("¡Correcto! +10 puntos");
  } else {
    alert("Incorrecto");
  }

  localStorage.setItem("puntos", puntos);
  indice = (indice + 1) % preguntas.length;
  cargarPregunta();
  cargarUsuario();
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
