# 🚀 Campus Quiz - Juego de Trivia Interactivo

Un juego de trivia educativo desarrollado para Campuslands, donde los estudiantes pueden poner a prueba sus conocimientos sobre la institución mientras ganan puntos y canjean recompensas.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

### 🎮 Sistema de Juego
- **Preguntas Dinámicas**: 14 preguntas sobre Campuslands con opciones múltiples
- **Sistema de Puntos**: 100 puntos por respuesta correcta
- **Progresión**: Las preguntas se repiten en ciclo para práctica continua
- **Feedback Visual**: Mensajes de confirmación con efectos visuales

### 👤 Sistema de Usuarios
- **Autenticación Simple**: Login con nombre de usuario y contraseña
- **Persistencia de Datos**: Información guardada en localStorage
- **Perfil de Usuario**: Muestra nombre y puntos acumulados

### 🎁 Sistema de Recompensas
- **Catálogo de Productos**: 6 recompensas disponibles (camisetas, gorras, termos, etc.)
- **Sistema de Canjeo**: Intercambio de puntos por productos físicos
- **Filtros**: Organización por disponibilidad (todos, disponibles, no disponibles)
- **Validación**: Verificación de puntos suficientes antes del canjeo

### 🎨 Diseño y UX
- **Tema Espacial**: Diseño con elementos astronáuticos y planetarios
- **Animaciones**: Estrellas brillantes, partículas espaciales, astronautas flotantes
- **Responsive**: Interfaz adaptativa para diferentes dispositivos
- **Navegación Intuitiva**: Menú de navegación entre secciones

## 🛠 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con animaciones y efectos visuales
- **JavaScript Vanilla**: Lógica del juego sin dependencias externas
- **LocalStorage**: Persistencia de datos del usuario
- **Imágenes SVG/PNG**: Recursos visuales optimizados

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Pagina-trivia-de-campus
   ```

2. **Abrir en el navegador**
   ```bash
   # Simplemente abre index.html en tu navegador web
   # O usa un servidor local:
   python -m http.server 8000
   # Luego visita: http://localhost:8000
   ```

## 📖 Uso

### 1. Página de Inicio (`index.html`)
- Pantalla de bienvenida con logo de Campuslands
- Botón para iniciar sesión
- Elementos visuales temáticos (planeta holográfico, astronauta)

### 2. Login (`login.html`)
- Formulario de autenticación
- Validación de campos requeridos
- Animaciones espaciales y partículas
- Redirección automática al juego

### 3. Juego Principal (`main.html`)
- **Interfaz del Quiz**: Preguntas con opciones múltiples
- **Sistema de Puntuación**: Puntos en tiempo real
- **Navegación**: Enlaces a recompensas, login e inicio
- **Feedback**: Mensajes de respuesta correcta/incorrecta

### 4. Recompensas (`rewards.html`)
- **Catálogo Visual**: Tarjetas con imágenes de productos
- **Filtros**: Organización por categorías
- **Sistema de Canjeo**: Intercambio de puntos por productos
- **Perfil de Usuario**: Información personal y puntos

## 📁 Estructura del Proyecto

```
Pagina-trivia-de-campus/
├── 📄 index.html              # Página de inicio
├── 📄 login.html              # Sistema de autenticación
├── 📄 main.html               # Juego de trivia principal
├── 📄 rewards.html            # Sistema de recompensas
├── 📄 script.js               # Lógica principal del juego
├── 📄 styles.css              # Estilos de la página principal
├── 📄 styles-login.css        # Estilos del login
├── 📄 styles-main.css         # Estilos del juego
├── 📄 styles-rewards.css      # Estilos de recompensas
└── 📁 img recompensas/        # Imágenes de productos
    ├── 🧥 buso.png
    ├── 👕 camiseta negra.png
    ├── 📥 descarga.png
    ├── 🧢 gorra.png
    ├── 📗 libreta.png
    ├── 🏷️ stiker.png
    └── 🧴 termo.png
```

## 🎯 Funcionalidades Detalladas

### Sistema de Preguntas
- **14 Preguntas Temáticas**: Todas relacionadas con Campuslands
- **Opciones Múltiples**: 3 opciones por pregunta
- **Rotación Automática**: Las preguntas se repiten en ciclo
- **Puntuación**: 100 puntos por respuesta correcta

### Gestión de Usuarios
- **Registro Simple**: Nombre de usuario y contraseña
- **Persistencia**: Datos guardados en localStorage
- **Sesión Activa**: Mantiene el usuario logueado
- **Puntos Acumulativos**: Sistema de puntuación persistente

### Sistema de Recompensas
- **6 Productos Disponibles**:
  - 👕 Camiseta Campuslands (1500 puntos)
  - 🧢 Gorra Campuslands (2000 puntos)
  - 🧥 Buso Campuslands (2000 puntos)
  - 📗 Libreta Campuslands (2000 puntos)
  - 🧴 Botella térmica (2000 puntos)
  - 🏷️ Sticker Campuslands (2000 puntos)

### Características Técnicas
- **Sin Dependencias**: JavaScript vanilla
- **Almacenamiento Local**: localStorage para persistencia
- **Animaciones CSS**: Efectos visuales sin librerías externas
- **Responsive Design**: Adaptable a diferentes pantallas

## 🎨 Capturas de Pantalla

### Página de Inicio
- Logo de Campuslands
- Botón de inicio de sesión
- Elementos espaciales animados

### Sistema de Login
- Formulario de autenticación
- Animaciones de partículas espaciales
- Validación de campos

### Juego de Trivia
- Preguntas con opciones múltiples
- Sistema de puntuación en tiempo real
- Feedback visual de respuestas

### Catálogo de Recompensas
- Tarjetas de productos con imágenes
- Sistema de filtros
- Información de usuario y puntos

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollado por

**Santiago Mendoza - Elkin Anaya**

---

⭐ **¡Disfruta aprendiendo con Campus Quiz!** ⭐ 