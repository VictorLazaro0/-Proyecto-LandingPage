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
