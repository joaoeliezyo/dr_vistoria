(function () {
  "use strict";

  const data = window.demoData;
  const nav = document.querySelector("#main-nav");
  const main = document.querySelector("#conteudo");
  const topbarArea = document.querySelector("#topbar-area");
  const sidebar = document.querySelector("#sidebar");
  const menuButton = document.querySelector("#menu-button");
  const state = { appointmentConfirmed: false, requestTab: "pedido" };

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

  function renderSite() {
    main.innerHTML = `
      <div class="site-page">
        <div class="site-masthead page-wrap"><div class="site-mast-brand"><span class="site-mast-icon" aria-hidden="true">dv.</span><span>dr_vistoria <small>marca provisória</small></span></div><div class="site-mast-links"><button type="button" data-scroll="servicos">Serviços</button><button type="button" data-scroll="processo">Como funciona</button><button class="mast-cta" type="button" data-open-request>Simular pedido <span aria-hidden="true">↗</span></button></div></div>
        <section class="site-hero" aria-labelledby="page-title"><img class="site-hero-photo" src="assets/edificio-exemplo.png" alt="Fotografia ilustrativa gerada de edifício residencial contemporâneo em construção"><div class="site-hero-shade"></div><div class="site-hero-content page-wrap"><span class="site-kicker"><span class="site-kicker-line"></span>${escapeHtml(data.site.heroEyebrow)}</span><h1 id="page-title">${escapeHtml(data.site.heroTitle)}</h1><p>${escapeHtml(data.site.heroDescription)}</p><div class="site-hero-actions"><button type="button" class="button button-primary" data-open-request>Simular solicitação <span aria-hidden="true">↗</span></button><button type="button" class="button button-light" data-scroll="servicos">Conhecer serviços <span aria-hidden="true">↓</span></button></div><span class="site-photo-note">Imagem ilustrativa gerada para esta demonstração</span></div><div class="site-hero-rail" aria-hidden="true"><span>Precisão</span><span>Clareza</span><span>Cuidado</span></div></section>
        <section class="site-intro page-wrap" aria-labelledby="intro-title"><div><span class="eyebrow">Engenharia em foco</span><h2 id="intro-title">Olhar técnico, comunicação simples.</h2></div><p>Esta apresentação mostra como um atendimento de engenharia pode ser organizado de forma objetiva, desde o primeiro interesse até a leitura das constatações. O profissional e o imóvel exibidos são exemplos fictícios.</p></section>
        <section class="site-services" id="servicos" aria-labelledby="services-title"><div class="page-wrap"><div class="site-section-head"><div><span class="eyebrow">O que pode ser apresentado</span><h2 id="services-title">Serviços para cada momento do imóvel.</h2></div><p>Seis frentes de atendimento reunidas em uma linguagem direta. Os detalhes técnicos serão validados com o engenheiro.</p></div><div class="service-grid">${data.site.services.map(service => `<article class="service-card"><div class="service-card-top"><span class="service-icon" aria-hidden="true">${escapeHtml(service.icon)}</span><span class="service-number">${service.number}</span></div><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.description)}</p><button type="button" data-open-request aria-label="Simular pedido de ${escapeHtml(service.title)}">Simular interesse <span aria-hidden="true">↗</span></button></article>`).join("")}</div></div></section>
        <section class="site-about page-wrap" aria-labelledby="about-title"><div class="about-photo"><img src="assets/edificio-exemplo.png" alt="Detalhe ilustrativo de fachada residencial moderna"><span>Imagem de demonstração</span></div><div class="about-copy"><span class="eyebrow">Sobre o atendimento</span><h2 id="about-title">Um processo que dá contexto a cada decisão.</h2><p>O atendimento aqui é apresentado para um único engenheiro responsável, sem identidade profissional real. A proposta visual enfatiza escuta, registro organizado e comunicação acessível ao cliente.</p><div class="about-quote"><span aria-hidden="true">“</span><p>Entender o imóvel, registrar o que importa e explicar o resultado com clareza.</p></div><span class="about-signature">${escapeHtml(data.scenario.professional)}</span></div></section>
        <section class="site-process" id="processo" aria-labelledby="process-title"><div class="page-wrap"><div class="site-section-head"><div><span class="eyebrow">Etapas de exemplo</span><h2 id="process-title">Um caminho simples, da conversa ao registro.</h2></div><p>A escolha da data acontece após o alinhamento com o engenheiro. O cliente informa apenas sua preferência.</p></div><ol class="process-grid">${data.site.process.map(step => `<li><span class="process-number">${step.number}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.description)}</p></li>`).join("")}</ol></div></section>
        <section class="site-cta page-wrap" aria-labelledby="cta-title"><div><span class="eyebrow">Próximo passo ilustrativo</span><h2 id="cta-title">Conte o que você precisa avaliar.</h2><p>Abra um formulário de exemplo e veja como as informações de interesse poderiam ser organizadas. Nenhum dado será enviado ou salvo.</p></div><button type="button" class="button button-primary" data-open-request>Simular pedido <span aria-hidden="true">↗</span></button></section>
        <footer class="site-footer"><div class="page-wrap"><div><strong>dr_vistoria</strong><span>Marca provisória · demonstração visual</span></div><p>Serviços e atendimento apresentados com dados fictícios. Sem solicitação enviada ou documento técnico emitido.</p><button type="button" data-scroll="servicos">Voltar aos serviços ↑</button></div></footer>
      </div>
      <dialog class="request-dialog" id="request-dialog" aria-labelledby="request-dialog-title"><form id="request-form"><div class="dialog-head"><div><span class="eyebrow">Formulário ilustrativo</span><h2 id="request-dialog-title">Simular interesse</h2></div><button type="button" class="dialog-close" data-close-dialog aria-label="Fechar formulário">×</button></div><p>Dados fictícios para visualizar o fluxo. Nada será enviado ou salvo.</p><div class="form-grid"><label>Nome de exemplo<input name="name" type="text" value="${escapeHtml(data.scenario.client)}" required></label><label>Imóvel de exemplo<input name="property" type="text" value="${escapeHtml(data.scenario.property)}" required></label></div><fieldset><legend>Serviços de interesse</legend><div class="checkbox-grid">${data.site.services.map(service => `<label><input type="checkbox" name="service" value="${escapeHtml(service.title)}" ${data.scenario.services.some(selected => selected.toLowerCase().startsWith(service.title.toLowerCase())) ? "checked" : ""}><span>${escapeHtml(service.title)}</span></label>`).join("")}</div></fieldset><label>Preferência de período (exemplo)<select name="period"><option>Manhã</option><option>Tarde</option><option>Indiferente</option></select></label><div class="dialog-actions"><button type="button" class="button button-outline" data-close-dialog>Fechar</button><button type="submit" class="button button-primary">Visualizar resumo</button></div><div class="form-result" id="form-result" hidden role="status"></div></form></dialog>`;

    const dialog = main.querySelector("#request-dialog");
    main.querySelectorAll("[data-open-request]").forEach(button => button.addEventListener("click", () => dialog.showModal()));
    main.querySelectorAll("[data-close-dialog]").forEach(button => button.addEventListener("click", () => dialog.close()));
    main.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => main.querySelector(`#${button.dataset.scroll}`).scrollIntoView({ behavior: "smooth" })));
    main.querySelector("#request-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      const services = [...form.querySelectorAll('[name="service"]:checked')].map(input => input.value);
      const result = form.querySelector("#form-result");
      result.hidden = false;
      result.innerHTML = services.length
        ? `<strong>Resumo visual · não enviado</strong><span>${escapeHtml(form.elements.name.value)} · ${escapeHtml(form.elements.property.value)}</span><span>${services.map(escapeHtml).join(" + ")}</span><small>Preferência: ${escapeHtml(form.elements.period.value)}. O engenheiro conversaria antes de confirmar uma data.</small>`
        : "Selecione ao menos um serviço para visualizar o resumo.";
    });
  }

  function renderDashboard() {
    const scenario = data.scenario;
    main.innerHTML = `<div class="page-wrap dashboard-page"><div class="page-heading"><div><span class="eyebrow">Visão administrativa · exemplo</span><h1 id="page-title">Painel de acompanhamento</h1><p>Um retrato fictício da rotina de um único engenheiro. Todos os números são ilustrativos.</p></div><a class="button button-primary" href="#solicitacoes">Ver solicitações <span aria-hidden="true">↗</span></a></div>
      <section class="metric-grid" aria-label="Indicadores fictícios">${data.dashboard.metrics.map((metric, index) => `<article class="metric-card"><span>${escapeHtml(metric.label)}</span><strong>${state.appointmentConfirmed && index === 1 ? "00" : state.appointmentConfirmed && index === 2 ? "01" : escapeHtml(metric.value)}</strong><small>${state.appointmentConfirmed && index === 1 ? "negociação concluída visualmente" : state.appointmentConfirmed && index === 2 ? "confirmação visual nesta sessão" : escapeHtml(metric.caption)}</small></article>`).join("")}</section>
      <div class="dashboard-grid"><section class="panel-card" aria-labelledby="visits-title"><div class="panel-head"><div><span class="eyebrow">Agenda ilustrativa</span><h2 id="visits-title">Próxima vistoria</h2></div><span class="mini-tag">Exemplo</span></div><div class="visit-feature"><div class="date-tile"><strong>${scenario.calendar.proposedDay}</strong><span>${escapeHtml(scenario.calendar.month.slice(0, 3).toLowerCase())} · demo</span></div><div><strong>${escapeHtml(scenario.property)}</strong><p>${escapeHtml(scenario.location)} · ${escapeHtml(scenario.suggestedTime)}</p><span class="state-line ${state.appointmentConfirmed ? "state-confirmed" : ""}">${state.appointmentConfirmed ? "Confirmação visual pelo engenheiro" : "Data sugerida · aguardando alinhamento"}</span></div></div><a class="text-link" href="#solicitacoes">Ver pedido e agenda <span aria-hidden="true">→</span></a></section>
      <section class="panel-card" aria-labelledby="requests-title"><div class="panel-head"><div><span class="eyebrow">Entrada recente</span><h2 id="requests-title">Solicitação em destaque</h2></div><span class="mini-tag warm">1 pedido</span></div><div class="request-summary"><span>${escapeHtml(scenario.request)} · fictícia</span><strong>${escapeHtml(scenario.client)}</strong><p>${escapeHtml(scenario.property)} · ${escapeHtml(scenario.location)}</p><div class="service-pills">${scenario.services.map(service => `<span>${escapeHtml(service)}</span>`).join("")}</div></div><a class="text-link" href="#solicitacoes">Acompanhar solicitação <span aria-hidden="true">→</span></a></section></div>
      <section class="dashboard-bottom" aria-labelledby="workflow-title"><div><span class="eyebrow">Roteiro de demonstração</span><h2 id="workflow-title">Do pedido à apresentação técnica</h2><p>Este cenário mantém cliente, imóvel, solicitação e vistoria como partes distintas do fluxo.</p></div><ol><li><span>01</span>Solicitação recebida</li><li><span>02</span>Negociação ilustrativa</li><li><span>03</span>Agendamento pelo engenheiro</li><li><span>04</span>Vistoria e laudo · próximas etapas</li></ol></section></div>`;
  }

  function renderRequests() {
    const scenario = data.scenario;
    main.innerHTML = `<div class="page-wrap requests-page"><div class="page-heading"><div><span class="eyebrow">Organização · dados fictícios</span><h1 id="page-title">Solicitações e agenda</h1><p>Um pedido com dois serviços. A preferência do cliente não reserva uma data automaticamente.</p></div><span class="page-id">${escapeHtml(scenario.request)}</span></div>
      <div class="request-tabs" role="tablist" aria-label="Visualizações da solicitação"><button type="button" role="tab" id="tab-pedido" aria-controls="panel-pedido" aria-selected="${state.requestTab === "pedido"}" tabindex="${state.requestTab === "pedido" ? 0 : -1}" data-tab="pedido">Pedido e negociação</button><button type="button" role="tab" id="tab-agenda" aria-controls="panel-agenda" aria-selected="${state.requestTab === "agenda"}" tabindex="${state.requestTab === "agenda" ? 0 : -1}" data-tab="agenda">Agenda ilustrativa</button></div>
      <section id="panel-pedido" role="tabpanel" aria-labelledby="tab-pedido" ${state.requestTab !== "pedido" ? "hidden" : ""}><div class="request-layout"><article class="panel-card request-main"><div class="panel-head"><div><span class="eyebrow">${escapeHtml(scenario.request)} · exemplo</span><h2>Interesse registrado visualmente</h2></div><span class="mini-tag warm">Sem envio real</span></div><div class="entity-grid"><div><span>Cliente fictício</span><strong>${escapeHtml(scenario.client)}</strong></div><div><span>Imóvel fictício</span><strong>${escapeHtml(scenario.property)}</strong><small>${escapeHtml(scenario.location)}</small></div><div><span>Solicitação</span><strong>2 serviços selecionados</strong></div><div><span>Vistoria</span><strong>Etapa posterior, ainda ilustrativa</strong></div></div><div class="selected-services"><h3>Serviços no mesmo pedido</h3>${scenario.services.map(service => `<div><span aria-hidden="true">✓</span>${escapeHtml(service)}</div>`).join("")}</div><div class="preference"><span>Preferência informada pelo cliente</span><strong>${escapeHtml(scenario.preference)}</strong><small>Preferência apenas; nenhum horário reservado.</small></div></article>
      <aside class="panel-card request-process" aria-labelledby="process-request-title"><span class="eyebrow">Etapas de demonstração</span><h2 id="process-request-title">A negociação vem antes da agenda.</h2><ol class="request-timeline"><li class="done"><span>01</span><div><strong>Pedido recebido</strong><small>Dois serviços e imóvel identificados.</small></div></li><li class="${state.appointmentConfirmed ? "done" : "current"}"><span>02</span><div><strong>Conversa via WhatsApp · representada</strong><small>Canal ilustrado. Nenhuma mensagem é aberta ou enviada.</small></div></li><li class="${state.appointmentConfirmed ? "done" : ""}"><span>03</span><div><strong>Engenheiro confirma a agenda</strong><small>${state.appointmentConfirmed ? "Confirmação visual nesta sessão." : "Depende de ação do engenheiro."}</small></div></li></ol><div class="confirm-box"><strong id="request-status" tabindex="-1">${state.appointmentConfirmed ? "Agendamento demonstrativo confirmado" : "Aguardando confirmação do engenheiro"}</strong><p>${escapeHtml(scenario.suggestedDate)} · ${escapeHtml(scenario.suggestedTime)}</p><button type="button" class="button ${state.appointmentConfirmed ? "button-outline" : "button-primary"}" id="confirm-appointment">${state.appointmentConfirmed ? "Reiniciar simulação" : "Simular confirmação pelo engenheiro"}</button><small>Estado somente em memória; reinicia ao recarregar.</small></div></aside></div></section>
      <section id="panel-agenda" role="tabpanel" aria-labelledby="tab-agenda" ${state.requestTab !== "agenda" ? "hidden" : ""}><div class="agenda-layout"><div class="panel-card"><div class="panel-head"><div><span class="eyebrow">Calendário ilustrativo</span><h2>${escapeHtml(scenario.calendar.month)} · semana de exemplo</h2></div><span class="mini-tag">Sem reserva automática</span></div><div class="calendar" role="grid" aria-label="Semana ilustrativa de ${escapeHtml(scenario.calendar.month)}"><div class="calendar-heading" role="row">${["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map(day => `<span role="columnheader">${day}</span>`).join("")}</div><div class="calendar-days" role="row">${scenario.calendar.days.map(day => `<span role="gridcell" ${day === scenario.calendar.proposedDay ? 'class="calendar-suggested"' : ""}>${day}${day === scenario.calendar.proposedDay ? '<small>proposta</small>' : ""}</span>`).join("")}</div></div><p class="calendar-note">A data destacada é demonstrativa. O calendário não mostra disponibilidade real.</p></div><aside class="panel-card agenda-side"><span class="eyebrow">Resumo da proposta</span><h2>${escapeHtml(scenario.property)}</h2><p>${escapeHtml(scenario.client)} · ${escapeHtml(scenario.location)}</p><div class="agenda-date"><strong>${escapeHtml(scenario.suggestedDate)}</strong><span>${escapeHtml(scenario.suggestedTime)}</span></div><span class="state-line ${state.appointmentConfirmed ? "state-confirmed" : ""}">${state.appointmentConfirmed ? "Confirmado visualmente pelo engenheiro" : "Em negociação · sem confirmação"}</span><button type="button" class="button button-outline" data-tab="pedido">Ver negociação</button></aside></div></section>
      <div class="request-disclaimer">Demonstração visual: nenhuma mensagem, reserva ou confirmação externa é realizada.</div></div>`;

    main.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => {
      state.requestTab = button.dataset.tab;
      renderRequests();
      main.querySelector(`#tab-${state.requestTab}`).focus();
    }));
    main.querySelector("#confirm-appointment").addEventListener("click", () => {
      state.appointmentConfirmed = !state.appointmentConfirmed;
      renderRequests();
      main.querySelector("#request-status").focus();
    });
    main.querySelector(".request-tabs").addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      state.requestTab = state.requestTab === "pedido" ? "agenda" : "pedido";
      renderRequests();
      main.querySelector(`#tab-${state.requestTab}`).focus();
    });
  }

  const fieldState = { room: null, checked: {}, notes: {}, finding: "A" };

  function evidenceMarkup(finding) {
    return finding.image
      ? `<figure class="field-evidence"><img src="${finding.image}" alt="Imagem ilustrativa gerada: umidade e descascamento em parede de banheiro"><figcaption>Imagem ilustrativa · gerada para demonstração</figcaption></figure>`
      : `<figure class="field-evidence evidence-placeholder"><span aria-hidden="true">▧</span><figcaption>Imagem ilustrativa · espaço reservado para ${escapeHtml(finding.title.toLowerCase())}</figcaption></figure>`;
  }

  function findingMarkup(finding) {
    return `<span class="eyebrow">Constatação ${finding.id} · fictícia</span><h2>${escapeHtml(finding.title)}</h2><p class="field-meta">${escapeHtml(finding.room)} · ${escapeHtml(finding.category)}</p><p>${escapeHtml(finding.description)}</p><p class="field-location"><strong>Localização ilustrativa:</strong> ${escapeHtml(finding.location)}</p>${evidenceMarkup(finding)}`;
  }

  function renderInspection() {
    const room = fieldState.room;
    const findings = data.inspection.findings;
    const total = data.scenario.environments.length * data.inspection.checks.length;
    const completed = Object.values(fieldState.checked).filter(Boolean).length;
    main.innerHTML = `<div class="page-wrap field-page"><div class="page-heading"><div><span class="eyebrow">${escapeHtml(data.inspection.id)} · exemplo</span><h1 id="page-title">Vistoria do apartamento</h1><p>${escapeHtml(data.scenario.property)} · ${escapeHtml(data.scenario.client)}</p></div><span class="offline-demo">Offline (simulado)</span></div><div class="field-progress"><div><strong>${completed} de ${total} itens marcados</strong><span>Progresso demonstrativo · reinicia ao recarregar</span></div><progress value="${completed}" max="${total}">${completed}/${total}</progress></div>
    ${!room ? `<section class="panel-card"><span class="eyebrow">01 / Ambientes</span><h2>Por onde vamos começar?</h2><p class="field-meta">Selecione um ambiente para explorar o checklist e a constatação de exemplo.</p><div class="room-grid">${data.scenario.environments.map((name,index) => `<button type="button" class="room-card" data-room="${name}"><span class="room-number">0${index+1}</span><strong>${name}</strong><span>${data.inspection.checks.filter((_,i) => fieldState.checked[name+i]).length}/3 itens · 1 constatação fictícia</span><span aria-hidden="true">→</span></button>`).join("")}</div></section><div class="field-callout">O estado offline é apenas ilustrado. Não há captura de fotos, salvamento ou sincronização.</div>` : `<button type="button" class="button button-outline back-rooms" id="back-rooms">← Voltar aos ambientes</button><div class="field-layout"><section class="panel-card"><span class="eyebrow">02 / Checklist ilustrativo</span><h2>${escapeHtml(room)}</h2><p class="field-meta">Marque os itens para simular uma revisão visual.</p><div class="field-checks">${data.inspection.checks.map((check,i) => `<label><input type="checkbox" data-check="${room+i}" ${fieldState.checked[room+i] ? "checked" : ""}><span><strong>${escapeHtml(check.category)}</strong><span>${escapeHtml(check.label)}</span></span></label>`).join("")}</div><label class="field-notes">Observações de exemplo<textarea id="room-notes" rows="3" placeholder="Anote uma observação fictícia…">${escapeHtml(fieldState.notes[room] || "")}</textarea></label><small class="field-meta">Texto mantido apenas nesta sessão.</small></section><section class="panel-card"><span class="eyebrow">03 / Constatações e evidências</span><h2>Registro do ambiente</h2>${findings.filter(f => f.room === room).map(f => `<button type="button" class="finding-choice" data-finding="${f.id}"><span class="finding-letter">${f.id}</span><span><strong>${escapeHtml(f.title)}</strong><small>${escapeHtml(f.category)} · exemplo</small></span><span aria-hidden="true">↗</span></button>`).join("")}<div id="room-finding" hidden></div></section></div>`}<div class="page-end"><span>Vistoria visual · sem validade técnica</span><a href="#planta">Ver planta e constatações →</a></div></div>`;
    main.querySelectorAll("[data-room]").forEach(button => button.addEventListener("click", () => { fieldState.room = button.dataset.room; renderInspection(); main.querySelector("#back-rooms").focus(); }));
    main.querySelector("#back-rooms")?.addEventListener("click", () => { fieldState.room = null; renderInspection(); main.querySelector("[data-room]").focus(); });
    main.querySelectorAll("[data-check]").forEach(input => input.addEventListener("change", () => {
      fieldState.checked[input.dataset.check] = input.checked;
      const count = Object.values(fieldState.checked).filter(Boolean).length;
      main.querySelector("progress").value = count;
      main.querySelector(".field-progress strong").textContent = `${count} de ${total} itens marcados`;
    }));
    main.querySelector("#room-notes")?.addEventListener("input", event => { fieldState.notes[room] = event.target.value; });
    main.querySelectorAll("[data-finding]").forEach(button => button.addEventListener("click", () => {
      fieldState.finding = button.dataset.finding;
      const panel = main.querySelector("#room-finding");
      panel.hidden = false;
      panel.innerHTML = findingMarkup(findings.find(f => f.id === fieldState.finding)) + '<a class="text-link" href="#planta">Localizar na planta →</a>';
      button.setAttribute("aria-expanded", "true");
    }));
  }

  function renderFloorPlan() {
    const finding = data.inspection.findings.find(item => item.id === fieldState.finding);
    main.innerHTML = `<div class="page-wrap field-page"><div class="page-heading"><div><span class="eyebrow">Localização das evidências · exemplo</span><h1 id="page-title">Planta e constatações</h1><p>${escapeHtml(data.scenario.property)} · esquema original, sem escala ou validade arquitetônica.</p></div><a class="button button-outline" href="#vistoria">← Voltar à vistoria</a></div><div class="floor-layout"><section class="panel-card"><span class="eyebrow">Esquema ilustrativo</span><h2>Selecione um marcador</h2><div class="floor-drawing"><svg viewBox="0 0 400 360" role="img" aria-label="Esquema de apartamento: sala à esquerda, banheiro no alto à direita e cozinha embaixo à direita"><rect x="24" y="24" width="352" height="312" fill="#f4f7fb" stroke="#102653" stroke-width="7"/><path d="M220 24V145 M220 195V336 M220 178H376" fill="none" stroke="#102653" stroke-width="6"/><path d="M220 145 Q270 145 270 195 M70 336 Q70 286 120 286" fill="none" stroke="#a9b8ca" stroke-width="2"/><rect x="40" y="70" width="45" height="100" rx="7" fill="#d9e2ef"/><rect x="270" y="40" width="80" height="35" rx="5" fill="#d9e2ef"/><path d="M350 210V310H260" fill="none" stroke="#d9e2ef" stroke-width="22"/><text x="120" y="235" text-anchor="middle">Sala</text><text x="295" y="137" text-anchor="middle">Banheiro</text><text x="285" y="315" text-anchor="middle">Cozinha</text></svg>${data.inspection.findings.map(f => `<button type="button" class="floor-marker ${f.id === finding.id ? "selected" : ""}" style="left:${f.x}%;top:${f.y}%" data-marker="${f.id}" aria-label="Constatação ${f.id}: ${escapeHtml(f.title)} no ambiente ${escapeHtml(f.room)}" aria-pressed="${f.id === finding.id}">${f.id}</button>`).join("")}</div><p class="field-meta">Marcadores fictícios · posição aproximada apenas para apresentação.</p><h3 class="field-list-title">Alternativa textual</h3><div class="finding-list">${data.inspection.findings.map(f => `<button type="button" class="finding-choice" data-list-marker="${f.id}" aria-pressed="${f.id === finding.id}"><span class="finding-letter">${f.id}</span><span><strong>${escapeHtml(f.title)}</strong><small>${escapeHtml(f.room)} · ${escapeHtml(f.category)}</small></span></button>`).join("")}</div></section><section class="panel-card finding-detail" id="finding-detail" aria-live="polite">${findingMarkup(finding)}</section></div></div>`;
    main.querySelectorAll("[data-marker], [data-list-marker]").forEach(button => button.addEventListener("click", () => {
      const id = button.dataset.marker || button.dataset.listMarker;
      const source = button.hasAttribute("data-marker") ? "data-marker" : "data-list-marker";
      fieldState.finding = id;
      renderFloorPlan();
      main.querySelector(`[${source}="${id}"]`).focus({ preventScroll: true });
    }));
  }

  function renderArea(area) {
    if (area.id === "vistoria") return renderInspection();
    if (area.id === "planta") return renderFloorPlan();
    if (area.id === "site") return renderSite();
    if (area.id === "painel") return renderDashboard();
    if (area.id === "solicitacoes") return renderRequests();
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
