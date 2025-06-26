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

// --- MODAL DE CANJE Y CARRUSEL ---

// Datos de ejemplo para productos con variantes de color
const productosRecompensa = [
  {
    nombre: 'Camiseta Campuslands',
    categoria: 'Merch',
    costo: 1500,
    imagenes: [
      './img recompensas/descarga.png',
      'https://img.icons8.com/color/96/t-shirt.png',
      'https://img.icons8.com/color/96/t-shirt.png' // Puedes poner más variantes
    ]
  },
  {
    nombre: 'Botella térmica',
    categoria: 'Merch',
    costo: 2000,
    imagenes: [
      'https://img.icons8.com/color/96/water-bottle.png',
      'https://img.icons8.com/color/96/water-bottle.png',
      'https://img.icons8.com/color/96/water-bottle.png' // Variantes
    ]
  }
  // Agrega más productos si lo deseas
];

let productoActual = null;
let colorIndex = 0;

function abrirModalCanje(indexProducto) {
  productoActual = productosRecompensa[indexProducto];
  colorIndex = 0;
  document.getElementById('modalProductName').textContent = productoActual.nombre;
  document.getElementById('modalProductCategory').textContent = '📁 Categoría: ' + productoActual.categoria;
  document.getElementById('modalProductCost').textContent = '⭐ Costo: ' + productoActual.costo + ' puntos';
  document.getElementById('carouselImage').src = productoActual.imagenes[colorIndex];
  actualizarMensajePuntos();
  document.getElementById('modal-canjear').style.display = 'flex';
}

function actualizarMensajePuntos() {
  const puntos = parseInt(localStorage.getItem('userPoints') || localStorage.getItem('puntos') || '0');
  if (puntos >= productoActual.costo) {
    document.getElementById('modalPointsMsg').textContent = '¡Tienes puntos suficientes para canjear este producto!';
    document.getElementById('confirmCanjeBtn').disabled = false;
  } else {
    document.getElementById('modalPointsMsg').textContent = 'No tienes puntos suficientes para canjear este producto.';
    document.getElementById('confirmCanjeBtn').disabled = true;
  }
}

document.getElementById('closeModalBtn').onclick = function() {
  document.getElementById('modal-canjear').style.display = 'none';
};
document.getElementById('prevColor').onclick = function() {
  colorIndex = (colorIndex - 1 + productoActual.imagenes.length) % productoActual.imagenes.length;
  document.getElementById('carouselImage').src = productoActual.imagenes[colorIndex];
};
document.getElementById('nextColor').onclick = function() {
  colorIndex = (colorIndex + 1) % productoActual.imagenes.length;
  document.getElementById('carouselImage').src = productoActual.imagenes[colorIndex];
};
document.getElementById('confirmCanjeBtn').onclick = function() {
  const puntos = parseInt(localStorage.getItem('userPoints') || localStorage.getItem('puntos') || '0');
  if (puntos >= productoActual.costo) {
    localStorage.setItem('userPoints', puntos - productoActual.costo);
    if(localStorage.getItem('puntos')) localStorage.setItem('puntos', puntos - productoActual.costo);
    mostrarDatosUsuarioRewards();
    alert('¡Canje realizado con éxito!');
    document.getElementById('modal-canjear').style.display = 'none';
  }
};

// Adaptar los botones "Canjear" para abrir el modal con el producto correcto
window.addEventListener('DOMContentLoaded', () => {
  mostrarDatosUsuarioRewards && mostrarDatosUsuarioRewards();
  const canjearBtns = document.querySelectorAll('.reward-card button');
  canjearBtns.forEach((btn, i) => {
    btn.onclick = function() {
      abrirModalCanje(i % productosRecompensa.length);
    };
  });
});
