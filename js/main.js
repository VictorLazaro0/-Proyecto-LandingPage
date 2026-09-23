// ==========================================
// 1. Scroll suave al hacer clic en explorar
// ==========================================
const explorarBtn = document.getElementById("explorarBtn");
if (explorarBtn) {
  explorarBtn.addEventListener("click", () => {
    const productosSection = document.getElementById("productos");
    if (productosSection) {
      productosSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ==========================================
// 2. Lógica del Carrito y Notificaciones (Toast)
// ==========================================
let carrito = [];

// Crear el icono flotante del carrito dinámicamente
const carritoIcono = document.createElement("div");
carritoIcono.id = "carritoIcono";
carritoIcono.textContent = "🛒 0";
carritoIcono.style.position = "fixed";
carritoIcono.style.top = "20px";
carritoIcono.style.right = "20px";
carritoIcono.style.background = "#2563eb";
carritoIcono.style.color = "#fff";
carritoIcono.style.padding = "10px 15px";
carritoIcono.style.borderRadius = "8px";
carritoIcono.style.fontWeight = "bold";
carritoIcono.style.zIndex = "1000";
carritoIcono.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
carritoIcono.style.transition = "transform 0.3s ease";
document.body.appendChild(carritoIcono);

// Escuchar clics en los botones de agregar al carrito
document.querySelectorAll(".add-cart").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Obtener el nombre del producto de la tarjeta correspondiente
    const tarjeta = document.querySelectorAll(".card")[index];
    const producto = tarjeta ? tarjeta.querySelector("h3").textContent : "Producto";
    
    carrito.push(producto);

    // Actualizar contador del carrito con animación de escala
    carritoIcono.textContent = `🛒 ${carrito.length}`;
    carritoIcono.style.transform = "scale(1.25)";
    setTimeout(() => {
      carritoIcono.style.transform = "scale(1)";
    }, 300);

    // Crear notificación visual (Toast)
    const toast = document.createElement("div");
    toast.textContent = `${producto} agregado al carrito ✅`;
    toast.className = "toast-notification";
    
    // Estilos rápidos para el toast
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#10b981";
    toast.style.color = "#fff";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    toast.style.zIndex = "1000";
    toast.style.transition = "opacity 0.3s ease";

    document.body.appendChild(toast);

    // Remover el toast después de 2 segundos
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  });
});

// ==========================================
// 3. Animación de entrada para las tarjetas al hacer Scroll
// ==========================================
const verificarTarjetas = () => {
  document.querySelectorAll(".card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("visible");
      // Respaldo por si no tienes la clase .visible en el CSS
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.6s ease";
    }
  });
};

// Ejecutar al hacer scroll y una vez al cargar la página
window.addEventListener("scroll", verificarTarjetas);
window.addEventListener("load", verificarTarjetas);