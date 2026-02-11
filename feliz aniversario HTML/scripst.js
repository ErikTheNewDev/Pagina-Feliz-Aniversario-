const btn = document.getElementById("btnCoracoes");

btn.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    criarCoracao();
  }
});

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.innerHTML = "❤️";

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 15 + "px";
  coracao.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

function shootconfetti() {
  confetti({
    particleCount: 160,
    spread: 85,
    origin: { y: 0.6 }
  });
}

function opensurprise() {
    // Mudamos de "extra-content" para "surprise" para bater com o HTML
    const elementoSurpresa = document.getElementById("surprise");
    
    if (elementoSurpresa) {
        elementoSurpresa.classList.remove("hidden");
        shootconfetti(); // Isso dispara os confetes ao abrir!
    }
}