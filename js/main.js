/* =========================================================
   William Enfermeiro - comportamentos do site
   1 Configuração | 2 Links do WhatsApp | 3 Menu mobile
   4 Sombra do cabeçalho | 5 FAQ | 6 Ano do rodapé
   ========================================================= */

/* ---------- 1. CONFIGURAÇÃO (edite aqui) ---------- */
const CONFIG = {
  // Número com código do país (55) + DDD + número, sem espaços
  whatsapp: "5533991478161",
  mensagemPadrao: "Olá, William! Vim pelo seu site e gostaria de saber mais sobre o atendimento de enfermagem em casa.",
  // Mensagem pronta para cada serviço (chave = data-servico no HTML)
  mensagens: {
    monitoramento: "Olá, William! Gostaria de saber mais sobre o monitoramento vital em domicílio.",
    feridas: "Olá, William! Gostaria de saber mais sobre os cuidados com feridas e curativos.",
    higiene: "Olá, William! Gostaria de saber mais sobre higiene e conforto para o paciente.",
    treinamento: "Olá, William! Gostaria de saber mais sobre o treinamento de familiares.",
    laserterapia: "Olá, William! Gostaria de saber mais sobre a laserterapia."
  }
};

/* ---------- 2. LINKS DO WHATSAPP ---------- */
// Todo link com a classe .js-whatsapp recebe a mensagem certa.
document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const texto = CONFIG.mensagens[link.dataset.servico] || CONFIG.mensagemPadrao;
  link.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
  link.target = "_blank";
  link.rel = "noopener";

  // Métrica de cliques: envia ao Google Analytics apenas se ele estiver instalado
  link.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "clique_whatsapp", { servico: link.dataset.servico || "geral" });
    }
  });
});

/* ---------- 3. MENU MOBILE ---------- */
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("open");
  botaoMenu.setAttribute("aria-expanded", aberto);
});
// Fecha o menu ao escolher uma opção
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    botaoMenu.setAttribute("aria-expanded", "false");
  })
);

/* ---------- 4. SOMBRA DO CABEÇALHO AO ROLAR ---------- */
const cabecalho = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  cabecalho.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

/* ---------- 5. FAQ: mantém só uma pergunta aberta ---------- */
const perguntas = document.querySelectorAll("#duvidas details");
perguntas.forEach((item) =>
  item.addEventListener("toggle", () => {
    if (item.open) perguntas.forEach((outro) => { if (outro !== item) outro.open = false; });
  })
);

/* ---------- 6. ANO AUTOMÁTICO NO RODAPÉ ---------- */
document.getElementById("ano").textContent = new Date().getFullYear();
