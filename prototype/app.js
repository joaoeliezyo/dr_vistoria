(function () {
  "use strict";

  const data = window.demoData;
  const nav = document.querySelector("#main-nav");
  const main = document.querySelector("#conteudo");
  const topbarArea = document.querySelector("#topbar-area");
  const sidebar = document.querySelector("#sidebar");
  const menuButton = document.querySelector("#menu-button");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function closeMenu() {
    sidebar.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  }

  function renderNav(activeId) {
    nav.innerHTML = data.areas.map(area => `
      <a class="nav-link${area.id === activeId ? " is-active" : ""}" href="#${area.id}" ${area.id === activeId ? 'aria-current="page"' : ""}>
        <span class="nav-icon" aria-hidden="true">${escapeHtml(area.icon)}</span>
        <span class="nav-text">${escapeHtml(area.title)}</span>
        <span class="nav-number" aria-hidden="true">${area.number}</span>
      </a>`).join("");
  }

  function renderArea(area) {
    const index = data.areas.findIndex(item => item.id === area.id);
    const next = data.areas[(index + 1) % data.areas.length];
    const preview = area.id === "solicitacoes"
      ? `<div class="scenario-card"><span class="scenario-kicker">${escapeHtml(data.scenario.request)} · exemplo</span><strong>${escapeHtml(data.scenario.client)}</strong><span>${escapeHtml(data.scenario.property)} · ${escapeHtml(data.scenario.location)}</span><div class="service-pills">${data.scenario.services.map(service => `<span>${escapeHtml(service)}</span>`).join("")}</div><small>Dados de demonstração · sem solicitação enviada</small></div>`
      : `<div class="preview-lines" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`;

    main.innerHTML = `
      <div class="page-wrap" id="${area.id}-area">
        <div class="breadcrumb">Protótipo visual <span aria-hidden="true">/</span> <strong>${escapeHtml(area.title)}</strong></div>
        <section class="hero" aria-labelledby="page-title">
          <div class="hero-copy">
            <span class="section-index"><span class="section-dot" aria-hidden="true"></span> ${escapeHtml(area.eyebrow)} <span aria-hidden="true">/</span> ${area.number} de 06</span>
            <h1 id="page-title">${escapeHtml(area.heading)}</h1>
            <p>${escapeHtml(area.description)}</p>
            <div class="hero-actions"><a class="button button-primary" href="#${next.id}">Explorar ${escapeHtml(next.short)} <span aria-hidden="true">↗</span></a><button class="button button-secondary" type="button" id="details-button" aria-expanded="false" aria-controls="details-panel">Ver dados de exemplo <span aria-hidden="true">↓</span></button></div>
          </div>
          <div class="hero-art" aria-hidden="true"><span class="art-grid"></span><span class="art-frame art-frame-back"></span><span class="art-frame art-frame-front"><span class="art-symbol">${escapeHtml(area.icon)}</span><span class="art-line"></span><span class="art-line short"></span></span><span class="art-stamp">${area.number} / 06</span></div>
        </section>
        <section class="foundation-grid" aria-label="Estrutura desta área">
          <div class="content-card main-card"><div class="card-heading"><span class="eyebrow">Estrutura prevista</span><span class="status-badge">Em construção visual</span></div><h2>${escapeHtml(area.title)}</h2><p>Esta área mostra a direção da interface. Os componentes e fluxos específicos serão apresentados nas próximas etapas.</p><div class="preview-shell"><div class="preview-head"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span>Prévia de composição · ilustrativa</span></div>${preview}</div></div>
          <div class="side-stack"><div class="content-card plan-card"><span class="eyebrow">Conteúdo planejado</span><h2>Pontos de leitura</h2><ul>${area.details.map(detail => `<li><span aria-hidden="true">↗</span>${escapeHtml(detail)}</li>`).join("")}</ul></div><div class="content-card note-card"><span class="note-icon" aria-hidden="true">i</span><div><strong>Sobre esta etapa</strong><p>${escapeHtml(area.note)}</p></div></div></div>
        </section>
        <section class="details-panel" id="details-panel" hidden aria-label="Dados fictícios do cenário"><div class="details-head"><span class="eyebrow">Cenário único de demonstração</span><h2>Dados usados para orientar as próximas telas</h2></div><dl><div><dt>Profissional</dt><dd>${escapeHtml(data.scenario.professional)}</dd></div><div><dt>Cliente</dt><dd>${escapeHtml(data.scenario.client)}</dd></div><div><dt>Imóvel</dt><dd>${escapeHtml(data.scenario.property)} · ${escapeHtml(data.scenario.location)}</dd></div><div><dt>Solicitação</dt><dd>${escapeHtml(data.scenario.request)} · ${data.scenario.services.map(escapeHtml).join(" + ")}</dd></div><div><dt>Vistoria</dt><dd>Fluxo ilustrativo para ${data.scenario.environments.map(escapeHtml).join(", ")}</dd></div></dl></section>
        <div class="page-end"><span>Estrutura navegável · Prompt 00</span><a href="#${next.id}">Próxima área: ${escapeHtml(next.title)} <span aria-hidden="true">→</span></a></div>
      </div>`;

    document.querySelector("#details-button").addEventListener("click", event => {
      const panel = document.querySelector("#details-panel");
      const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
      panel.hidden = expanded;
      event.currentTarget.setAttribute("aria-expanded", String(!expanded));
      event.currentTarget.innerHTML = expanded ? 'Ver dados de exemplo <span aria-hidden="true">↓</span>' : 'Ocultar dados de exemplo <span aria-hidden="true">↑</span>';
    });
  }

  function render() {
    const id = decodeURIComponent(location.hash.slice(1));
    const area = data.areas.find(item => item.id === id) || data.areas[0];
    renderNav(area.id);
    renderArea(area);
    topbarArea.textContent = area.title;
    document.title = `${area.title} — dr_vistoria (demonstração)`;
    closeMenu();
    window.scrollTo(0, 0);
  }

  menuButton.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
  nav.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });
  window.addEventListener("hashchange", render);
  render();
})();
