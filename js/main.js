// Animación de scroll al explorar
document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});

// Carrito simple
let carrito = [];

document.querySelectorAll(".add-cart").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const producto = document.querySelectorAll(".card")[index].querySelector("h3").textContent;
    carrito.push(producto);
    alert(`${producto} agregado al carrito 🛒`);
    console.log("Carrito actual:", carrito);
  });
});

// Animación de entrada de tarjetas
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.6s ease";
    }
  });
});


// Scroll suave al explorar
document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});

// Carrito con animación
let carrito = [];
const carritoIcono = document.createElement("div");
carritoIcono.id = "carritoIcono";
carritoIcono.textContent = "🛒 0";
carritoIcono.style.position = "fixed";
carritoIcono.style.top = "20px";
carritoIcono.style.right = "20px";
carritoIcono.style.background = "#0072ff";
carritoIcono.style.color = "#fff";
carritoIcono.style.padding = "10px";
carritoIcono.style.borderRadius = "8px";
document.body.appendChild(carritoIcono);

document.querySelectorAll(".add-cart").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const producto = document.querySelectorAll(".card")[index].querySelector("h3").textContent;
    carrito.push(producto);

    // Actualizar carrito con animación
    carritoIcono.textContent = `🛒 ${carrito.length}`;
    carritoIcono.style.transform = "scale(1.3)";
    setTimeout(() => carritoIcono.style.transform = "scale(1)", 300);

    // Notificación tipo toast
    const toast = document.createElement("div");
    toast.textContent = `${producto} agregado al carrito ✅`;
    toast.className = "toast";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  });
});

// Animación de entrada de tarjetas
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});