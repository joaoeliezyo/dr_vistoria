(function () {
  "use strict";

  const data = window.demoData;
  const nav = document.querySelector("#main-nav");
  const main = document.querySelector("#conteudo");
  const topbarArea = document.querySelector("#topbar-area");
  const sidebar = document.querySelector("#sidebar");
  const menuButton = document.querySelector("#menu-button");
  const state = { appointmentConfirmed: false, requestTab: "pedido", perspective: "engineer", clientPage: "inicio", journey: { submitted: false, period: "Manhã", stage: "analysis" } };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function closeMenu() {
    sidebar.classList.remove("is-open");
    sidebar.inert = matchMedia("(max-width: 900px)").matches;
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

  function journeyPreference() {
    return state.journey.submitted ? data.journey.periods[state.journey.period] : data.scenario.preference;
  }
  function journeyStatus() { return data.journey.stages[state.journey.stage]; }
  function journeyNegotiationActive() { return !state.appointmentConfirmed && state.journey.stage !== "received"; }
  function journeyHistoryStatus(event) {
    if (event.type === "Negociação" && state.journey.stage === "received") return journeyStatus().label;
    return state.appointmentConfirmed && event.confirmedStatus ? event.confirmedStatus : event.status;
  }
  function resetJourney() {
    state.journey = { submitted: false, period: "Manhã", stage: "analysis" };
    state.appointmentConfirmed = false;
  }
  function journeyAdminMarkup() {
    return `<section class="journey-admin panel-card" aria-labelledby="journey-admin-title"><span class="eyebrow">Controle do apresentador · simulação</span><h2 id="journey-admin-title">Atendimento DEMO-001 nas duas perspectivas</h2><p>${state.journey.submitted ? "Solicitação simulada nesta sessão; nada foi enviado." : "Cenário pré-carregado; nenhum envio foi simulado nesta sessão."}</p><p><strong>Etapa ilustrada:</strong> ${escapeHtml(journeyStatus().label)}</p><label for="journey-stage">Próxima etapa de demonstração</label><select id="journey-stage">${Object.entries(data.journey.stages).map(([id,stage]) => `<option value="${id}" ${state.journey.stage === id ? "selected" : ""} ${stage.needsAppointment && !state.appointmentConfirmed ? "disabled" : ""}>${escapeHtml(stage.label)}</option>`).join("")}</select><button type="button" class="button button-outline" id="apply-journey-stage">Simular etapa</button><p id="journey-stage-status" role="status">Execução e preparo exigem confirmação da agenda pelo engenheiro. São estados de narrativa, sem visita real, emissão ou entrega documental.</p></section>`;
  }
  function clientNavMarkup() {
    return `<nav class="journey-nav" aria-label="Navegação da visão do cliente">${Object.entries(data.journey.pages).map(([id,title]) => `<button type="button" data-client-page="${id}" ${state.clientPage === id ? 'aria-current="page"' : ""}>${title}</button>`).join("")}</nav>`;
  }
  function clientRequestMarkup() {
    const s = data.scenario;
    return `<section class="journey-card"><span class="eyebrow">${state.journey.submitted ? "Recibo visual · não é comprovante real" : "Exemplo pré-carregado · sem recibo"}</span><h2>Minha solicitação · DEMO-001</h2><p class="journey-receipt" role="status">${state.journey.submitted ? "Solicitação simulada nesta sessão. Nada foi enviado; identificador de exemplo DEMO-001." : "Conheça o cenário DEMO-001. Você ainda não simulou um envio nesta sessão."}</p><dl><div><dt>Cliente fictícia</dt><dd>${escapeHtml(s.client)}</dd></div><div><dt>Imóvel de exemplo</dt><dd>${escapeHtml(s.property)} · ${escapeHtml(s.location)}</dd></div><div><dt>Serviços no pedido</dt><dd>${s.services.map(escapeHtml).join(" + ")}</dd></div><div><dt>Preferência de período</dt><dd>${escapeHtml(journeyPreference())}</dd></div></dl><p>Preferência não é reserva. A data só aparece confirmada após a ação do engenheiro.</p><button type="button" class="button button-primary" data-client-page="inicio">${state.journey.submitted ? "Rever o formulário de exemplo" : "Ir ao site e simular solicitação"}</button></section>`;
  }
  function renderClientPage() {
    document.body.classList.add("client-perspective");
    sidebar.inert = true;
    if (state.clientPage === "inicio") {
      renderSite();
      main.insertAdjacentHTML("afterbegin", clientNavMarkup()+`<div class="journey-intro"><span class="eyebrow">Visão do cliente · demonstração</span><p>${state.journey.submitted ? "Solicitação simulada nesta sessão: DEMO-001. Nada foi enviado." : "Cenário pré-carregado: DEMO-001. Nenhum envio simulado nesta sessão."}</p><button class="button button-outline" type="button" data-client-page="pedido">Acompanhar cenário de exemplo</button></div>`);
    } else {
      main.innerHTML = `${clientNavMarkup()}<div class="journey-wrap"><header class="journey-heading"><span class="eyebrow">Perspectiva demonstrativa · sem autenticação</span><h1 id="page-title">${data.journey.pages[state.clientPage]}</h1><p>${escapeHtml(data.scenario.client)} · ${escapeHtml(data.scenario.property)} · DEMO-001</p></header>${state.clientPage === "pedido" ? clientRequestMarkup() : state.clientPage === "atendimento" ? `<section class="journey-card"><h2>Acompanhamento do atendimento</h2><p class="journey-receipt">${state.journey.submitted ? "Solicitação simulada nesta sessão" : "Cenário pré-carregado, sem envio simulado"} · nada enviado.</p><ol class="journey-timeline"><li><h3>Pedido</h3><strong>${escapeHtml(journeyStatus().label)}</strong><p>${escapeHtml(journeyStatus().description)}</p></li><li><h3>Agendamento</h3><strong id="client-appointment-status">${state.appointmentConfirmed ? "Confirmado pelo engenheiro (simulado)" : "Aguardando confirmação"}</strong><p>${state.appointmentConfirmed ? `${escapeHtml(data.scenario.suggestedDate)} · ${escapeHtml(data.scenario.suggestedTime)}` : "Sua preferência não reservou horário. Aguarde o alinhamento com o engenheiro nesta narrativa fictícia."}</p></li><li><h3>Documentos</h3><p>${state.journey.stage === "preparing" ? "Preparo documental ilustrado pelo apresentador. Não houve emissão ou entrega." : "Há apenas uma prévia fixa para conhecer a apresentação; ela não indica atendimento concluído."}</p><button type="button" class="button button-outline" data-client-page="documentos">Ver documentos de exemplo</button></li></ol><p class="journey-note">Checklist e fila de conectividade não alteram essas etapas. Apenas o apresentador, na visão do engenheiro, ilustra a evolução do atendimento.</p></section>` : `<section class="journey-card"><h2>Documentos do atendimento DEMO-001</h2><p>Prévia local e fixa, sem emissão, download ou compartilhamento. ART não emitida e anexo pendente.</p>${documentCards("journey")}</section>`}</div>`;
    }
    main.querySelectorAll("[data-client-page]").forEach(button => button.addEventListener("click", () => {
      state.clientPage = button.dataset.clientPage;
      render();
      main.focus({preventScroll:true});
    }));
    mountJourneyReport();
    topbarArea.textContent = `Cliente · ${data.journey.pages[state.clientPage]}`;
    document.title = `${data.journey.pages[state.clientPage]} — visão demonstrativa do cliente`;
    closeMenu();
  }
  function mountJourneyReport() {
    if (state.clientPage !== "documentos") return;
    const dialog = document.createElement("dialog");
    dialog.id = "journey-report";
    dialog.className = "journey-report-dialog";
    dialog.setAttribute("aria-labelledby", "journey-report-title");
    dialog.innerHTML = `<header class="journey-report-heading"><h2 id="journey-report-title">Prévia HTML fixa do laudo</h2><button class="button button-outline" type="button" id="close-journey-report" autofocus>Fechar prévia</button></header><p>EXEMPLO SEM VALIDADE TÉCNICA · sem emissão ou entrega real.</p>${reportSheetsMarkup()}`;
    main.append(dialog);
    let opener;
    main.querySelectorAll("[data-open-journey-report]").forEach(button => button.addEventListener("click", () => { opener = button; dialog.showModal(); }));
    dialog.querySelector("#close-journey-report").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => opener?.isConnected && opener.focus({preventScroll:true}));
  }
  function bindPerspectiveControls() {
    document.querySelectorAll("[data-perspective]").forEach(button => button.addEventListener("click", () => {
      state.perspective = button.dataset.perspective;
      render();
      main.focus({preventScroll:true});
    }));
    document.querySelector("#restore-all").addEventListener("click", () => {
      resetFieldDemo();
      managementState.section = "ficha";
      managementState.reportOrigin = null;
      state.requestTab = "pedido";
      state.clientPage = "inicio";
      render();
      main.focus({preventScroll:true});
    });
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
      <dialog class="request-dialog" id="request-dialog" aria-labelledby="request-dialog-title"><form id="request-form"><div class="dialog-head"><div><span class="eyebrow">Formulário ilustrativo</span><h2 id="request-dialog-title">Simular interesse</h2></div><button type="button" class="dialog-close" data-close-dialog aria-label="Fechar formulário">×</button></div><p>Dados fictícios para visualizar o fluxo. Nada será enviado ou salvo. Identidade e imóvel são fixos neste cenário DEMO-001; selecione os dois serviços de exemplo: entrega de imóvel e laudo.</p><div class="form-grid"><label>Nome de exemplo (fixo)<input name="name" type="text" value="${escapeHtml(data.scenario.client)}" readonly required></label><label>Imóvel de exemplo (fixo)<input name="property" type="text" value="${escapeHtml(data.scenario.property)}" readonly required></label></div><fieldset><legend>Serviços de interesse</legend><div class="checkbox-grid">${data.site.services.map(service => `<label><input type="checkbox" name="service" value="${escapeHtml(service.title)}" ${data.scenario.services.some(selected => selected.toLowerCase().startsWith(service.title.toLowerCase())) ? "checked" : ""}><span>${escapeHtml(service.title)}</span></label>`).join("")}</div></fieldset><label>Preferência de período (exemplo)<select name="period">${Object.keys(data.journey.periods).map(period => `<option ${state.journey.period === period ? "selected" : ""}>${period}</option>`).join("")}</select></label><div class="dialog-actions"><button type="button" class="button button-outline" data-close-dialog>Fechar</button><button type="submit" class="button button-primary">Visualizar resumo</button></div><div class="form-result" id="form-result" hidden role="status"></div><div class="journey-submit-area"><p>Simula somente DEMO-001. Uma nova simulação reinicia a confirmação da agenda e a etapa de atendimento; não cria outro pedido.</p><button type="button" class="button button-primary" id="simulate-request" disabled>Simular envio</button></div></form></dialog>`;

    const dialog = main.querySelector("#request-dialog");
    let requestOpener;
    main.querySelectorAll("[data-open-request]").forEach(button => button.addEventListener("click", () => { requestOpener = button; dialog.showModal(); }));
    dialog.addEventListener("close", () => { if (requestOpener?.isConnected) requestOpener.focus({preventScroll:true}); });
    main.querySelectorAll("[data-close-dialog]").forEach(button => button.addEventListener("click", () => dialog.close()));
    main.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => main.querySelector(`#${button.dataset.scroll}`).scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })));
    main.querySelector("#request-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      const services = [...form.querySelectorAll('[name="service"]:checked')].map(input => input.value);
      const result = form.querySelector("#form-result");
      result.hidden = false;
      const expectedServices = data.site.services.filter(service => data.scenario.services.some(selected => selected.toLowerCase().startsWith(service.title.toLowerCase()))).map(service => service.title);
      const valid = services.length === 2 && expectedServices.every(service => services.includes(service));
      form.querySelector("#simulate-request").disabled = !valid;
      if (!valid) { result.textContent = "Este cenário usa dois serviços: Vistoria de entrega de imóvel e Laudo técnico. Selecione ambos para visualizar e simular DEMO-001."; return; }
      result.innerHTML = services.length
        ? `<strong>Resumo visual · não enviado</strong><span>${escapeHtml(form.elements.name.value)} · ${escapeHtml(form.elements.property.value)}</span><span>${services.map(escapeHtml).join(" + ")}</span><small>Preferência: ${escapeHtml(form.elements.period.value)}. O engenheiro conversaria antes de confirmar uma data.</small>`
        : "Selecione ao menos um serviço para visualizar o resumo.";
    });
    const form = main.querySelector("#request-form");
    form.addEventListener("input", () => { form.querySelector("#simulate-request").disabled = true; form.querySelector("#form-result").hidden = true; });
    form.querySelector("#simulate-request").addEventListener("click", () => {
      state.journey = { submitted: true, period: form.elements.period.value, stage: "received" };
      state.appointmentConfirmed = false;
      dialog.close();
      state.perspective = "client";
      state.clientPage = "pedido";
      render();
      main.focus({preventScroll:true});
    });

  }

  function renderDashboard() {
    const scenario = data.scenario;
    main.innerHTML = `<div class="page-wrap dashboard-page"><div class="page-heading"><div><span class="eyebrow">Visão administrativa · exemplo</span><h1 id="page-title">Painel de acompanhamento</h1><p>Um retrato fictício da rotina de um único engenheiro. Todos os números são ilustrativos.</p></div><a class="button button-primary" href="#solicitacoes">Ver solicitações <span aria-hidden="true">↗</span></a></div>
      <section class="metric-grid" aria-label="Indicadores fictícios">${data.dashboard.metrics.map((metric, index) => `<article class="metric-card"><span>${escapeHtml(metric.label)}</span><strong>${index === 1 && !journeyNegotiationActive() ? "00" : state.appointmentConfirmed && index === 2 ? "01" : escapeHtml(metric.value)}</strong><small>${index === 1 && !journeyNegotiationActive() ? (state.appointmentConfirmed ? "negociação concluída visualmente" : "pedido aguardando análise ilustrativa") : state.appointmentConfirmed && index === 2 ? "confirmação visual nesta sessão" : escapeHtml(metric.caption)}</small></article>`).join("")}</section>
      <div class="dashboard-grid"><section class="panel-card" aria-labelledby="visits-title"><div class="panel-head"><div><span class="eyebrow">Agenda ilustrativa</span><h2 id="visits-title">Próxima vistoria</h2></div><span class="mini-tag">Exemplo</span></div><div class="visit-feature"><div class="date-tile"><strong>${scenario.calendar.proposedDay}</strong><span>${escapeHtml(scenario.calendar.month.slice(0, 3).toLowerCase())} · demo</span></div><div><strong>${escapeHtml(scenario.property)}</strong><p>${escapeHtml(scenario.location)} · ${escapeHtml(scenario.suggestedTime)}</p><span class="state-line ${state.appointmentConfirmed ? "state-confirmed" : ""}">${state.appointmentConfirmed ? "Confirmação visual pelo engenheiro" : "Data sugerida · aguardando alinhamento"}</span></div></div><a class="text-link" href="#solicitacoes">Ver pedido e agenda <span aria-hidden="true">→</span></a></section>
      <section class="panel-card" aria-labelledby="requests-title"><div class="panel-head"><div><span class="eyebrow">Entrada recente</span><h2 id="requests-title">Solicitação em destaque</h2></div><span class="mini-tag warm">1 pedido</span></div><div class="request-summary"><span>${escapeHtml(scenario.request)} · fictícia</span><strong>${escapeHtml(scenario.client)}</strong><p>${escapeHtml(scenario.property)} · ${escapeHtml(scenario.location)}</p><div class="service-pills">${scenario.services.map(service => `<span>${escapeHtml(service)}</span>`).join("")}</div></div><a class="text-link" href="#solicitacoes">Acompanhar solicitação <span aria-hidden="true">→</span></a></section></div>
      <section class="dashboard-bottom" aria-labelledby="workflow-title"><div><span class="eyebrow">Roteiro de demonstração</span><h2 id="workflow-title">Do pedido à apresentação técnica</h2><p>Este cenário mantém cliente, imóvel, solicitação e vistoria como partes distintas do fluxo.</p></div><ol><li><span>01</span>Solicitação recebida</li><li><span>02</span>Negociação ilustrativa</li><li><span>03</span>Agendamento pelo engenheiro</li><li><span>04</span>Vistoria e laudo · próximas etapas</li></ol></section></div>`;
  }

  const managementState = { section: "ficha", reportOrigin: null };

  function documentCards(clientMode = false) {
    return `<div class="document-cards">${data.management.documents.map(document => `<article class="document-card"><div class="document-card-head"><span class="document-symbol" aria-hidden="true">▧</span><span class="document-state ${document.available ? "document-preview-state" : ""}">${escapeHtml(document.status)}</span></div><h3>${escapeHtml(document.title)}</h3><p class="management-reference">${escapeHtml(document.id)}</p><p>${escapeHtml(document.description)}</p>${document.available ? clientMode === "journey" ? `<button type="button" class="button button-outline" data-open-journey-report>Ver prévia HTML →</button>` : `<a class="button button-outline" href="#laudo" data-report-origin="${clientMode ? "client" : "property"}">Ver prévia HTML →</a>` : '<p class="document-unavailable">Sem arquivo disponível · sem ação de download.</p>'}</article>`).join("")}</div>`;
  }

  function propertyPanelMarkup() {
    const { client, property, request, inspection } = data.management;
    return `<section id="panel-clientes" role="tabpanel" aria-labelledby="tab-clientes" ${state.requestTab !== "clientes" ? "hidden" : ""}><div class="management-intro"><div><span class="eyebrow">Ficha demonstrativa · dados fictícios</span><h2>${escapeHtml(property.name)}</h2><p>Cliente vinculado: ${escapeHtml(client.name)}. Cada registro abaixo tem um papel distinto neste cenário.</p></div><button class="button button-primary" type="button" data-open-client>Prévia do acesso do cliente</button></div><div class="property-sections" role="group" aria-label="Seções da ficha">${[ ["ficha", "Ficha"], ["historico", "Histórico"], ["documentos", "Documentos"] ].map(([id,label]) => `<button type="button" data-property-section="${id}" aria-pressed="${managementState.section === id}" aria-controls="property-content">${label}</button>`).join("")}</div><div id="property-content" class="management-content">${managementState.section === "ficha" ? `<div class="management-entities"><article class="panel-card"><span class="eyebrow">Cliente fictício</span><h3>${escapeHtml(client.name)}</h3><p class="management-reference">${client.id}</p><p>Vinculado ao imóvel desta ficha. Nenhum dado pessoal real ou contato é exibido.</p></article><article class="panel-card"><span class="eyebrow">Imóvel fictício</span><h3>${escapeHtml(property.name)}</h3><p>${escapeHtml(property.type)}<br>${escapeHtml(property.location)}</p><p class="management-reference">${property.id}</p></article><article class="panel-card"><span class="eyebrow">Solicitação</span><h3>${escapeHtml(request.id)}</h3><ul>${request.services.map(service => `<li>${escapeHtml(service)}</li>`).join("")}</ul><p><strong>Preferência:</strong> ${escapeHtml(journeyPreference())}</p><button class="button button-outline" type="button" data-tab="pedido">Ver pedido e negociação</button></article><article class="panel-card"><span class="eyebrow">Vistoria · cenário de execução</span><h3>${escapeHtml(inspection.id)}</h3><p class="management-agenda-state">${state.appointmentConfirmed ? "Agenda confirmada visualmente pelo engenheiro." : "Agenda proposta; aguardando confirmação do engenheiro."}</p><p>O fluxo de avaliação é uma demonstração independente; não comprova a realização de uma visita.</p><a class="button button-outline" href="#vistoria">Explorar vistoria →</a></article></div><div class="management-note"><strong>Documentos associados à vistoria</strong><p>Laudo em prévia HTML; ART não emitida; anexo complementar pendente. Nenhum arquivo foi entregue.</p><button class="button button-outline" type="button" data-property-section="documentos">Ver documentos</button></div>` : managementState.section === "historico" ? `<section class="panel-card property-history" aria-labelledby="history-title"><span class="eyebrow">Linha do tempo fictícia</span><h3 id="history-title">Histórico do imóvel</h3><p>Todas as datas são demonstrativas, sem relação com o calendário atual. O registro DEMO-H01 é separado do atendimento DEMO-001.</p><ol>${data.management.history.map(event => `<li><time>${escapeHtml(event.date)} · data fictícia</time><div><span class="history-type">${escapeHtml(event.type)}</span><h4>${escapeHtml(event.title)}</h4><p class="management-reference">${escapeHtml(event.reference)}</p><p>${escapeHtml(event.description)}</p><strong class="history-status">${escapeHtml(journeyHistoryStatus(event))}</strong></div></li>`).join("")}</ol></section>` : `<section aria-labelledby="documents-title"><div class="management-document-heading"><h3 id="documents-title">Documentos da ${escapeHtml(inspection.id)}</h3><p>Estados ilustrativos. A prévia existente não implica vistoria concluída, emissão ou entrega documental.</p></div>${documentCards()}<div class="management-note"><p>Simulado; nada foi enviado. A prévia do cliente abaixo mostra somente este imóvel e esta vistoria.</p><button class="button button-primary" type="button" data-open-client>Prévia do acesso do cliente</button></div></section>`}</div></section>`;
  }

  function bindManagementControls() {
    main.querySelectorAll("[data-property-section]").forEach(button => button.addEventListener("click", () => {
      managementState.section = button.dataset.propertySection;
      renderRequests();
      main.querySelector(`.property-sections [data-property-section="${managementState.section}"]`).focus({preventScroll:true});
    }));
    mountClientPreview();
  }

  function mountClientPreview() {
    const { client, property, inspection } = data.management;
    const dialog = document.createElement("dialog");
    dialog.id = "client-preview";
    dialog.className = "client-preview-dialog";
    dialog.setAttribute("aria-labelledby", "client-preview-title");
    dialog.innerHTML = `<div class="client-preview-heading"><div><span class="eyebrow">Demonstração visual · dados fictícios</span><h2 id="client-preview-title">Prévia do acesso do cliente</h2></div><button type="button" class="button button-outline" data-close-client autofocus>Voltar à visão administrativa</button></div><p class="client-preview-warning">Simulado; nada foi enviado ou compartilhado. Não existe acesso público ou autenticação nesta demonstração. Autenticação, autorização e compartilhamento seguro pertencem à futura V1.</p><section class="client-preview-context" aria-label="Contexto único da prévia"><h3>${escapeHtml(property.name)}</h3><p>${escapeHtml(client.name)} · ${escapeHtml(property.location)}</p><p>${escapeHtml(inspection.id)} · somente os documentos fictícios deste cenário.</p></section>${documentCards(true)}`;
    main.append(dialog);
    let opener;
    main.querySelectorAll("[data-open-client]").forEach(button => button.addEventListener("click", () => {
      opener = button;
      dialog.showModal();
    }));
    dialog.querySelector("[data-close-client]").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => { if (opener?.isConnected) opener.focus({preventScroll:true}); });
    main.querySelectorAll("[data-report-origin]").forEach(link => link.addEventListener("click", event => {
      managementState.reportOrigin = link.dataset.reportOrigin;
      if (dialog.open) dialog.close();
      if (location.hash === "#laudo") {
        event.preventDefault();
        renderReport();
        main.focus({preventScroll:true});
        window.scrollTo(0,0);
      }
    }));
    main.querySelectorAll("[data-return-property]").forEach(button => button.addEventListener("click", () => {
      state.requestTab = "clientes";
      managementState.section = "documentos";
      location.hash = "#solicitacoes";
    }));
  }

  function reportManagementMarkup() {
    return `<aside class="report-management" aria-label="Contexto da entrega ilustrativa"><div><strong>${managementState.reportOrigin === "client" ? "Leitura a partir da prévia do cliente" : managementState.reportOrigin === "property" ? "Leitura a partir da ficha do imóvel" : "Entrega documental ilustrativa"}</strong><p>Documento fixo e fictício, sem validade técnica. Nenhum arquivo é enviado, baixado ou disponibilizado ao público.</p></div><div class="management-actions"><button type="button" class="button button-outline" data-return-property>Voltar à ficha · Documentos</button><button type="button" class="button button-primary" data-open-client>${managementState.reportOrigin === "client" ? "Voltar à prévia do cliente" : "Prévia do acesso do cliente"}</button></div></aside>`;
  }

  function renderRequests() {
    const scenario = data.scenario;
    main.innerHTML = `<div class="page-wrap requests-page"><div class="page-heading"><div><span class="eyebrow">Organização · dados fictícios</span><h1 id="page-title">Solicitações e agenda</h1><p>Um pedido com dois serviços. A preferência do cliente não reserva uma data automaticamente.</p></div><span class="page-id">${escapeHtml(scenario.request)}</span></div>
      <div class="request-tabs" role="tablist" aria-label="Visualizações da solicitação"><button type="button" role="tab" id="tab-pedido" aria-controls="panel-pedido" aria-selected="${state.requestTab === "pedido"}" tabindex="${state.requestTab === "pedido" ? 0 : -1}" data-tab="pedido">Pedido e negociação</button><button type="button" role="tab" id="tab-agenda" aria-controls="panel-agenda" aria-selected="${state.requestTab === "agenda"}" tabindex="${state.requestTab === "agenda" ? 0 : -1}" data-tab="agenda">Agenda ilustrativa</button><button type="button" role="tab" id="tab-clientes" aria-controls="panel-clientes" aria-selected="${state.requestTab === "clientes"}" tabindex="${state.requestTab === "clientes" ? 0 : -1}" data-tab="clientes">Clientes e imóveis</button></div>
      <section id="panel-pedido" role="tabpanel" aria-labelledby="tab-pedido" ${state.requestTab !== "pedido" ? "hidden" : ""}><div class="request-layout"><article class="panel-card request-main"><div class="panel-head"><div><span class="eyebrow">${escapeHtml(scenario.request)} · exemplo</span><h2>Interesse registrado visualmente</h2></div><span class="mini-tag warm">Sem envio real</span></div><div class="entity-grid"><div><span>Cliente fictício</span><strong>${escapeHtml(scenario.client)}</strong></div><div><span>Imóvel fictício</span><strong>${escapeHtml(scenario.property)}</strong><small>${escapeHtml(scenario.location)}</small></div><div><span>Solicitação</span><strong>2 serviços selecionados</strong></div><div><span>Vistoria</span><strong>Etapa posterior, ainda ilustrativa</strong></div></div><div class="selected-services"><h3>Serviços no mesmo pedido</h3>${scenario.services.map(service => `<div><span aria-hidden="true">✓</span>${escapeHtml(service)}</div>`).join("")}</div><div class="preference"><span>Preferência informada pelo cliente</span><strong>${escapeHtml(journeyPreference())}</strong><small>Preferência apenas; nenhum horário reservado.</small></div></article>
      <aside class="panel-card request-process" aria-labelledby="process-request-title"><span class="eyebrow">Etapas de demonstração</span><h2 id="process-request-title">A negociação vem antes da agenda.</h2><ol class="request-timeline"><li class="done"><span>01</span><div><strong>Pedido recebido</strong><small>Dois serviços e imóvel identificados.</small></div></li><li class="${state.appointmentConfirmed ? "done" : journeyNegotiationActive() ? "current" : ""}"><span>02</span><div><strong>Conversa via WhatsApp · representada</strong><small>Canal ilustrado. Nenhuma mensagem é aberta ou enviada.</small></div></li><li class="${state.appointmentConfirmed ? "done" : ""}"><span>03</span><div><strong>Engenheiro confirma a agenda</strong><small>${state.appointmentConfirmed ? "Confirmação visual nesta sessão." : "Depende de ação do engenheiro."}</small></div></li></ol><div class="confirm-box"><strong id="request-status" tabindex="-1">${state.appointmentConfirmed ? "Agendamento demonstrativo confirmado" : "Aguardando confirmação do engenheiro"}</strong><p>${escapeHtml(scenario.suggestedDate)} · ${escapeHtml(scenario.suggestedTime)}</p><button type="button" class="button ${state.appointmentConfirmed ? "button-outline" : "button-primary"}" id="confirm-appointment">${state.appointmentConfirmed ? "Reiniciar simulação" : "Simular confirmação pelo engenheiro"}</button><small>Estado somente em memória; reinicia ao recarregar.</small></div></aside></div></section>
      <section id="panel-agenda" role="tabpanel" aria-labelledby="tab-agenda" ${state.requestTab !== "agenda" ? "hidden" : ""}><div class="agenda-layout"><div class="panel-card"><div class="panel-head"><div><span class="eyebrow">Calendário ilustrativo</span><h2>${escapeHtml(scenario.calendar.month)} · semana de exemplo</h2></div><span class="mini-tag">Sem reserva automática</span></div><div class="calendar" role="grid" aria-label="Semana ilustrativa de ${escapeHtml(scenario.calendar.month)}"><div class="calendar-heading" role="row">${["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map(day => `<span role="columnheader">${day}</span>`).join("")}</div><div class="calendar-days" role="row">${scenario.calendar.days.map(day => `<span role="gridcell" ${day === scenario.calendar.proposedDay ? 'class="calendar-suggested"' : ""}>${day}${day === scenario.calendar.proposedDay ? '<small>proposta</small>' : ""}</span>`).join("")}</div></div><p class="calendar-note">A data destacada é demonstrativa. O calendário não mostra disponibilidade real.</p></div><aside class="panel-card agenda-side"><span class="eyebrow">Resumo da proposta</span><h2>${escapeHtml(scenario.property)}</h2><p>${escapeHtml(scenario.client)} · ${escapeHtml(scenario.location)}</p><div class="agenda-date"><strong>${escapeHtml(scenario.suggestedDate)}</strong><span>${escapeHtml(scenario.suggestedTime)}</span></div><span class="state-line ${state.appointmentConfirmed ? "state-confirmed" : ""}">${state.appointmentConfirmed ? "Confirmado visualmente pelo engenheiro" : "Em negociação · sem confirmação"}</span><button type="button" class="button button-outline" data-tab="pedido">Ver negociação</button></aside></div></section>
      ${propertyPanelMarkup()}<div class="request-disclaimer">Demonstração visual: nenhuma mensagem, reserva ou confirmação externa é realizada.</div></div>`;

    main.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => {
      state.requestTab = button.dataset.tab;
      renderRequests();
      main.querySelector(`#tab-${state.requestTab}`).focus();
    }));
    main.querySelector("#confirm-appointment").addEventListener("click", () => {
      state.appointmentConfirmed = !state.appointmentConfirmed;
      if (!state.appointmentConfirmed && data.journey.stages[state.journey.stage].needsAppointment) state.journey.stage = "analysis";
      renderRequests();
      main.querySelector("#request-status").focus();
    });
    main.querySelector(".request-tabs").addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const tabs = ["pedido", "agenda", "clientes"];
      const index = tabs.indexOf(state.requestTab);
      state.requestTab = event.key === "Home" ? tabs[0] : event.key === "End" ? tabs[2] : tabs[(index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
      renderRequests();
      main.querySelector(`#tab-${state.requestTab}`).focus();
    });
    main.insertAdjacentHTML("beforeend", journeyAdminMarkup());
    main.querySelector("#apply-journey-stage").addEventListener("click", () => {
      const stage = main.querySelector("#journey-stage").value;
      if (data.journey.stages[stage].needsAppointment && !state.appointmentConfirmed) return;
      state.journey.stage = stage;
      renderRequests();
      main.querySelector("#apply-journey-stage").focus({preventScroll:true});
    });
    bindManagementControls();
  }

  // State for a visual presentation only. Never observes or sends network data.
  const connectivityState = { phase: "offline", expanded: false };

  function connectivityMarkup() {
    const demo = data.connectivity;
    const phase = demo.states[connectivityState.phase];
    const counts = Object.fromEntries(Object.keys(demo.itemStates).map(status => [status, phase.statuses.filter(value => value === status).length]));
    const totals = [["ready", "Fora da fila"], ["pending", "Pendentes"], ["processing", "Em simulação"], ["error", "Com erro"], ["complete", "Concluídos na simulação"]];
    return `<section class="connectivity-panel" id="connectivity-panel" aria-labelledby="connectivity-title"><div class="connectivity-heading"><h2 id="connectivity-title">Demonstração de conectividade</h2><span class="connectivity-state">${escapeHtml(phase.label)}</span></div><p class="connectivity-warning">SIMULAÇÃO — nenhum dado está sendo enviado</p><details id="connectivity-details" ${connectivityState.expanded ? "open" : ""}><summary>Explorar fila fictícia · ${demo.queue.length} exemplos</summary><div class="connectivity-body"><label for="connectivity-phase">Estado ilustrativo</label><select id="connectivity-phase">${Object.entries(demo.states).map(([id, state]) => `<option value="${id}" ${connectivityState.phase === id ? "selected" : ""}>${escapeHtml(state.label)}</option>`).join("")}</select><p class="connectivity-description">${escapeHtml(phase.description)}</p><dl class="connectivity-counts" aria-label="Contagens da fila fictícia">${totals.map(([id,label]) => `<div><dt>${label}</dt><dd data-queue-count="${id}">${counts[id]}</dd></div>`).join("")}</dl><ul class="connectivity-queue" aria-label="Itens fictícios da simulação">${demo.queue.map((item,index) => `<li><div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.context)}</span></div><span class="queue-item-state" data-queue-state="${phase.statuses[index]}">${escapeHtml(demo.itemStates[phase.statuses[index]])}</span></li>`).join("")}</ul><div class="connectivity-actions"><button type="button" class="button button-primary" id="connectivity-next">${escapeHtml(phase.action)}</button>${connectivityState.phase === "syncing" ? '<button type="button" class="button button-outline" id="connectivity-fail">Demonstrar falha na fotografia</button>' : ""}<button type="button" class="button button-outline" id="connectivity-reset">Restaurar conectividade simulada</button></div><p class="connectivity-footnote">Fila fixa e independente do checklist: avaliação não significa envio nem conformidade técnica. Recarregar apaga o estado; não há offline verdadeiro.</p></div></details></section>`;
  }

  function bindConnectivityDemo() {
    main.querySelector("#connectivity-details").addEventListener("toggle", event => { connectivityState.expanded = event.currentTarget.open; });
    const changePhase = (phase, focusId) => {
      if (!Object.hasOwn(data.connectivity.states, phase)) return;
      connectivityState.phase = phase;
      connectivityState.expanded = true;
      main.querySelector("#connectivity-panel").outerHTML = connectivityMarkup();
      main.querySelector(".offline-demo").textContent = data.connectivity.states[phase].label;
      bindConnectivityDemo();
      main.querySelector(focusId).focus({preventScroll:true});
    };
    main.querySelector("#connectivity-phase").addEventListener("change", event => changePhase(event.target.value, "#connectivity-phase"));
    main.querySelector("#connectivity-next").addEventListener("click", () => changePhase(data.connectivity.states[connectivityState.phase].next, "#connectivity-next"));
    main.querySelector("#connectivity-fail")?.addEventListener("click", () => changePhase("error", "#connectivity-next"));
    main.querySelector("#connectivity-reset").addEventListener("click", () => changePhase("offline", "#connectivity-reset"));
  }

  const fieldState = {
    room: null, checked: {}, notes: {}, finding: "A", model: "entrega",
    models: structuredClone(data.inspection.checklistModels), config: false,
    filter: "Todos", temporary: false, annotated: false, sequence: 0, openFinding: false
  };
  function activeModel() { return fieldState.models.find(model => model.id === fieldState.model); }
  function activeItems() { return activeModel().items.filter(item => !item.disabled); }
  function answerKey(room, item) { return `${fieldState.model}|${room}|${item.id}`; }
  function roomProgress(room) {
    const total = activeItems().length;
    const count = activeItems().filter(item => fieldState.checked[answerKey(room, item)]).length;
    return { count, total, status: !count ? "Não avaliado" : count === total ? "Concluído" : "Em andamento" };
  }
  function resetFieldDemo() {
    resetJourney();
    Object.assign(connectivityState, { phase: "offline", expanded: false });
    Object.assign(fieldState, { room: null, checked: {}, notes: {}, finding: "A", model: "entrega", models: structuredClone(data.inspection.checklistModels), config: false, filter: "Todos", temporary: false, annotated: false, sequence: 0, openFinding: false });
  }
  function evidenceMarkup(finding, interactive = false) {
    if (!finding.image) return `<figure class="field-evidence evidence-placeholder"><span aria-hidden="true">▧</span><figcaption>Imagem ilustrativa · espaço reservado para ${escapeHtml(finding.title.toLowerCase())}</figcaption></figure>`;
    return `<figure class="field-evidence ${interactive ? "photo-interactive" : ""}">${interactive ? `<div class="photo-controls" role="group" aria-label="Visualização da fotografia ilustrativa"><button type="button" data-photo-mode="original" aria-pressed="${!fieldState.annotated}">Original</button><button type="button" data-photo-mode="annotated" aria-pressed="${fieldState.annotated}">Anotada</button></div>` : ""}<div class="photo-frame"><img src="${finding.image}" alt="Imagem ilustrativa gerada: umidade e descascamento em parede de banheiro">${interactive ? `<svg class="photo-overlay" viewBox="0 0 100 75" preserveAspectRatio="none" aria-hidden="true" ${!fieldState.annotated ? "hidden" : ""}><ellipse cx="31" cy="40" rx="22" ry="13"/><path d="M76 18L51 41M51 41L60 38M51 41L53 32"/></svg>` : ""}</div><figcaption>Imagem ilustrativa · gerada para demonstração${interactive ? `<span class="annotation-description" ${!fieldState.annotated ? "hidden" : ""}>${escapeHtml(data.inspection.annotation)}</span>` : ""}</figcaption></figure>`;
  }
  function bindPhotoControls(container) {
    container.querySelectorAll("[data-photo-mode]").forEach(button => button.addEventListener("click", () => {
      fieldState.annotated = button.dataset.photoMode === "annotated";
      const figure = button.closest("figure");
      figure.querySelector(".photo-overlay").toggleAttribute("hidden", !fieldState.annotated);
      figure.querySelector(".annotation-description").hidden = !fieldState.annotated;
      figure.querySelectorAll("[data-photo-mode]").forEach(control => control.setAttribute("aria-pressed", String((control.dataset.photoMode === "annotated") === fieldState.annotated)));
    }));
  }
  function findingMarkup(finding, interactive = false) {
    return `<span class="eyebrow">${finding.id === "D" ? "Marcação temporária" : "Constatação " + finding.id} · fictícia</span><h2>${escapeHtml(finding.title)}</h2><p class="field-meta">${escapeHtml(finding.room)} · ${escapeHtml(finding.category)}</p><p>${escapeHtml(finding.description)}</p><p class="field-location"><strong>Localização ilustrativa:</strong> ${escapeHtml(finding.location)}</p>${evidenceMarkup(finding, interactive)}`;
  }
  function renderChecklistConfig() {
    const model = activeModel();
    return `<section class="panel-card checklist-config" id="checklist-config" aria-labelledby="config-title"><span class="eyebrow">Configuração simulada · apenas nesta sessão</span><h2 id="config-title">Modelo de checklist</h2><p>Configuração e respostas são separadas por serviço. Trocar de modelo não mistura as avaliações. Os registros A/B/C e o laudo permanecem no cenário fixo de entrega.</p><label class="advanced-label">Serviço do modelo<select id="checklist-model">${fieldState.models.map(item => `<option value="${item.id}" ${item.id === model.id ? "selected" : ""}>${escapeHtml(item.service)}</option>`).join("")}</select></label><div class="config-items">${model.items.map(item => `<label><input type="checkbox" data-enable-item="${item.id}" ${!item.disabled ? "checked" : ""}><span><strong>${escapeHtml(item.category)}</strong> · ${escapeHtml(item.label)}<small>${item.disabled ? "Desativado neste modelo" : "Ativo neste modelo"}${item.custom ? " · personalizado" : ""}</small></span></label>`).join("")}</div><form id="custom-item-form"><label class="advanced-label">Item personalizado de exemplo<input id="custom-item-label" name="label" maxlength="120" required placeholder="Ex.: observar acabamento da porta"></label><label class="advanced-label">Categoria<select name="category">${data.scenario.categories.map(category => `<option>${category}</option>`).join("")}</select></label><button type="submit" class="button button-primary">Incluir item na sessão</button></form><p class="field-meta">Desativar um item o retira do cálculo; reativar recupera sua avaliação nesta sessão. Nenhuma configuração é salva.</p></section>`;
  }
  function renderInspection(focusSelector) {
    const room = fieldState.room;
    const model = activeModel();
    const total = data.scenario.environments.length * activeItems().length;
    const completed = data.scenario.environments.reduce((sum, name) => sum + roomProgress(name).count, 0);
    const progressSummary = name => { const p = roomProgress(name); return `<strong>${escapeHtml(name)} · ${p.status}</strong><span>${p.count} de ${p.total} itens avaliados</span><progress aria-label="Progresso de avaliação de ${name}" value="${p.count}" max="${p.total || 1}"></progress>`; };
    main.innerHTML = `<div class="page-wrap field-page"><div class="page-heading"><div><span class="eyebrow">${escapeHtml(data.inspection.id)} · exemplo</span><h1 id="page-title">Vistoria do apartamento</h1><p>${escapeHtml(data.scenario.property)} · ${escapeHtml(data.scenario.client)}</p></div><span class="offline-demo" role="status" aria-live="polite">${escapeHtml(data.connectivity.states[connectivityState.phase].label)}</span></div>${connectivityMarkup()}<div class="advanced-toolbar"><button class="button button-outline" id="configure-checklist" type="button" aria-expanded="${fieldState.config}" aria-controls="checklist-config">${fieldState.config ? "Fechar configuração" : "Configurar checklist"}</button><button class="button button-outline" id="reset-field" type="button">Restaurar cenário</button></div><p class="model-context">Modelo em execução: <strong>${escapeHtml(model.service)}</strong></p><div class="field-progress"><div><strong>${completed} de ${total} itens avaliados</strong><span>Progresso demonstrativo · avaliação não significa conformidade técnica.</span></div><progress aria-label="Progresso geral de avaliação" value="${completed}" max="${total || 1}"></progress></div><div class="room-status-grid" aria-label="Estado de avaliação dos ambientes">${data.scenario.environments.map(name => `<div>${progressSummary(name)}</div>`).join("")}</div>${fieldState.config ? renderChecklistConfig() : '<div id="checklist-config" hidden></div>'}
    ${!room ? `<section class="panel-card"><span class="eyebrow">01 / Ambientes</span><h2>Por onde vamos começar?</h2><p class="field-meta">Selecione um ambiente para avaliar os itens. Não avaliado, Em andamento e Concluído descrevem apenas o preenchimento.</p><div class="room-grid">${data.scenario.environments.map((name,index) => `<button type="button" class="room-card" data-room="${name}"><span class="room-number">0${index+1}</span><strong>${name}</strong><span>${roomProgress(name).status} · ${roomProgress(name).count}/${roomProgress(name).total} avaliados</span><span aria-hidden="true">→</span></button>`).join("")}</div></section><div class="field-callout">O estado offline é apenas ilustrado. Não há captura de fotos, salvamento ou sincronização.</div>` : `<button type="button" class="button button-outline back-rooms" id="back-rooms">← Voltar aos ambientes</button><div class="field-layout"><section class="panel-card"><span class="eyebrow">02 / Checklist ilustrativo</span><h2>${escapeHtml(room)}</h2><p class="field-meta">Marcar significa “item avaliado”, sem declarar conformidade. ${roomProgress(room).status}.</p><div class="field-checks">${activeItems().map(item => `<label><input type="checkbox" data-check="${item.id}" ${fieldState.checked[answerKey(room,item)] ? "checked" : ""}><span><strong>${escapeHtml(item.category)}</strong><span>${escapeHtml(item.label)}</span></span></label>`).join("") || '<p>Nenhum item ativo neste modelo. Ative itens na configuração para iniciar a avaliação.</p>'}</div><label class="field-notes">Observações de exemplo<textarea id="room-notes" rows="3" placeholder="Anote uma observação fictícia…">${escapeHtml(fieldState.notes[fieldState.model + room] || "")}</textarea></label><small class="field-meta">Texto mantido apenas nesta sessão e neste modelo.</small></section><section class="panel-card"><span class="eyebrow">03 / Constatações e evidências</span><h2>Registro do ambiente</h2><p class="field-meta">Registros fixos do cenário de entrega, independentes do modelo e das respostas.</p>${data.inspection.findings.filter(f => f.room === room).map(f => `<button type="button" class="finding-choice" data-finding="${f.id}" aria-expanded="${fieldState.openFinding}" aria-controls="room-finding"><span class="finding-letter">${f.id}</span><span><strong>${escapeHtml(f.title)}</strong><small>${escapeHtml(f.category)} · exemplo</small></span><span aria-hidden="true">↗</span></button>`).join("")}<div id="room-finding" ${!fieldState.openFinding ? "hidden" : ""}>${fieldState.openFinding ? findingMarkup(data.inspection.findings.find(f => f.room === room),true) + '<a class="text-link" href="#planta">Localizar na planta →</a>' : ""}</div></section></div>`}<div class="page-end"><span>Vistoria visual · sem validade técnica</span><a href="#planta">Ver planta e constatações →</a></div></div>`;
    bindConnectivityDemo();
    main.querySelector("#configure-checklist").addEventListener("click", () => { fieldState.config = !fieldState.config; renderInspection("#configure-checklist"); });
    main.querySelector("#reset-field").addEventListener("click", () => { resetFieldDemo(); renderInspection("#reset-field"); });
    main.querySelectorAll("[data-room]").forEach(button => button.addEventListener("click", () => { fieldState.room = button.dataset.room; fieldState.openFinding = false; renderInspection("#back-rooms"); }));
    main.querySelector("#back-rooms")?.addEventListener("click", () => { fieldState.room = null; fieldState.openFinding = false; renderInspection("[data-room]"); });
    main.querySelectorAll("[data-check]").forEach(input => input.addEventListener("change", () => { fieldState.checked[answerKey(room,{id:input.dataset.check})] = input.checked; renderInspection(`[data-check="${input.dataset.check}"]`); }));
    main.querySelector("#room-notes")?.addEventListener("input", event => { fieldState.notes[fieldState.model + room] = event.target.value; });
    main.querySelectorAll("[data-finding]").forEach(button => button.addEventListener("click", () => { fieldState.finding = button.dataset.finding; fieldState.openFinding = !fieldState.openFinding; renderInspection(`[data-finding="${button.dataset.finding}"]`); }));
    main.querySelector("#checklist-model")?.addEventListener("change", event => { fieldState.model = event.target.value; renderInspection("#checklist-model"); });
    main.querySelectorAll("[data-enable-item]").forEach(input => input.addEventListener("change", () => { model.items.find(item => item.id === input.dataset.enableItem).disabled = !input.checked; renderInspection(`[data-enable-item="${input.dataset.enableItem}"]`); }));
    main.querySelector("#custom-item-form")?.addEventListener("submit", event => {
      event.preventDefault(); const form = event.currentTarget; const label = form.elements.label.value.trim();
      if (!label) { form.elements.label.setCustomValidity("Informe uma descrição de exemplo."); form.elements.label.reportValidity(); return; }
      const id = `custom-${++fieldState.sequence}`;
      model.items.push({ id, label, category: form.elements.category.value, custom: true });
      renderInspection(`[data-enable-item="${id}"]`);
    });
    main.querySelector("#custom-item-label")?.addEventListener("input", event => event.target.setCustomValidity(""));
    bindPhotoControls(main);
    if (focusSelector) main.querySelector(focusSelector)?.focus({preventScroll:true});
  }

  function renderFloorPlan(focusSelector) {
    const allFindings = [...data.inspection.findings, ...(fieldState.temporary ? [data.inspection.temporaryFinding] : [])];
    const visible = allFindings.filter(f => fieldState.filter === "Todos" || f.room === fieldState.filter);
    if (!visible.some(f => f.id === fieldState.finding)) fieldState.finding = visible[0].id;
    const finding = visible.find(f => f.id === fieldState.finding);
    main.innerHTML = `<div class="page-wrap field-page"><div class="page-heading"><div><span class="eyebrow">Localização das evidências · exemplo</span><h1 id="page-title">Planta e constatações</h1><p>${escapeHtml(data.scenario.property)} · esquema original, sem escala ou validade arquitetônica.</p></div><a class="button button-outline" href="#vistoria">← Voltar à vistoria</a></div><div class="floor-layout"><section class="panel-card"><span class="eyebrow">Esquema ilustrativo</span><h2>Selecione um marcador</h2><label class="advanced-label">Filtrar por ambiente<select id="floor-filter">${["Todos",...data.scenario.environments].map(room => `<option ${fieldState.filter === room ? "selected" : ""}>${room}</option>`).join("")}</select></label><p class="filter-summary" role="status">${visible.length} de ${allFindings.length} marcadores exibidos · ${fieldState.filter === "Todos" ? "todos os ambientes" : fieldState.filter + "; demais ambientes ocultos"}. Lista e painel acompanham o filtro.</p><div class="floor-drawing"><svg viewBox="0 0 400 360" role="img" aria-label="Esquema de apartamento: sala à esquerda, banheiro no alto à direita e cozinha embaixo à direita"><rect x="24" y="24" width="352" height="312" fill="#f4f7fb" stroke="#102653" stroke-width="7"/><path d="M220 24V145 M220 195V336 M220 178H376" fill="none" stroke="#102653" stroke-width="6"/><path d="M220 145 Q270 145 270 195 M70 336 Q70 286 120 286" fill="none" stroke="#a9b8ca" stroke-width="2"/><rect x="40" y="70" width="45" height="100" rx="7" fill="#d9e2ef"/><rect x="270" y="40" width="80" height="35" rx="5" fill="#d9e2ef"/><path d="M350 210V310H260" fill="none" stroke="#d9e2ef" stroke-width="22"/><text x="120" y="235" text-anchor="middle">Sala</text><text x="295" y="137" text-anchor="middle">Banheiro</text><text x="285" y="315" text-anchor="middle">Cozinha</text></svg>${visible.map(f => `<button type="button" class="floor-marker ${f.id === finding.id ? "selected" : ""} ${f.id === "D" ? "temporary-marker" : ""}" style="left:${f.x}%;top:${f.y}%" data-marker="${f.id}" aria-label="${f.id === "D" ? "Marcador temporário" : "Constatação"} ${f.id}: ${escapeHtml(f.title)} no ambiente ${escapeHtml(f.room)}" aria-pressed="${f.id === finding.id}">${f.id}</button>`).join("")}</div><p class="field-meta">Marcadores fictícios · posição aproximada apenas para apresentação.</p><button type="button" class="button button-outline" id="temporary-marker">${fieldState.temporary ? "Desfazer marcador temporário" : "Adicionar marcador temporário"}</button><p class="field-meta">${fieldState.temporary ? "D é temporário, fica na Sala e não integra o laudo. Desfaça para removê-lo." : "Adiciona um único ponto D de exemplo na Sala, apenas nesta sessão."}</p><h3 class="field-list-title">Alternativa textual · ${escapeHtml(fieldState.filter)}</h3><div class="finding-list">${visible.map(f => `<button type="button" class="finding-choice" data-list-marker="${f.id}" aria-pressed="${f.id === finding.id}"><span class="finding-letter">${f.id}</span><span><strong>${escapeHtml(f.title)}</strong><small>${escapeHtml(f.room)} · ${escapeHtml(f.category)}</small></span></button>`).join("")}</div></section><section class="panel-card finding-detail" id="finding-detail" aria-live="polite">${findingMarkup(finding,true)}</section></div><div class="page-end"><span>Cenário fixo A/B/C no laudo; edições da sessão não o alteram.</span><a href="#laudo">Abrir prévia do laudo →</a></div></div>`;
    main.querySelector("#floor-filter").addEventListener("change", event => { fieldState.filter = event.target.value; renderFloorPlan("#floor-filter"); });
    main.querySelector("#temporary-marker").addEventListener("click", () => {
      fieldState.temporary = !fieldState.temporary;
      if (fieldState.temporary) { fieldState.filter = "Sala"; fieldState.finding = "D"; }
      else if (fieldState.finding === "D") fieldState.finding = "B";
      renderFloorPlan("#temporary-marker");
    });
    main.querySelectorAll("[data-marker], [data-list-marker]").forEach(button => button.addEventListener("click", () => {
      fieldState.finding = button.dataset.marker || button.dataset.listMarker;
      const source = button.hasAttribute("data-marker") ? "data-marker" : "data-list-marker";
      renderFloorPlan(`[${source}="${fieldState.finding}"]`);
    }));
    bindPhotoControls(main);
    if (focusSelector) main.querySelector(focusSelector)?.focus({preventScroll:true});
  }

  function reportSheetsMarkup() {
    const scenario = data.scenario;
    const report = data.report;
    const sheetHead = `<header class="report-running"><span><strong>dr_vistoria</strong> · marca provisória</span><span>${escapeHtml(report.id)} · fictício</span></header>`;
    const sheetFoot = number => `<footer class="report-running report-foot"><span>EXEMPLO SEM VALIDADE TÉCNICA</span><span>${number} / 3 · composição ilustrativa</span></footer>`;
    return `<article class="report-sheet report-cover" id="report-cover" aria-labelledby="report-title">${sheetHead}<div class="report-cover-body"><span class="report-edition">${escapeHtml(report.id)} / DEMONSTRAÇÃO</span><div class="report-rule"></div><h2 id="report-title">${escapeHtml(report.title)}</h2><p class="report-subtitle">${escapeHtml(report.subtitle)}</p><div class="report-warning">EXEMPLO SEM VALIDADE TÉCNICA</div><p class="report-cover-property">${escapeHtml(scenario.property)}</p><p>${escapeHtml(scenario.location)} · localização fictícia</p><dl class="report-facts"><div><dt>Cliente fictício</dt><dd>${escapeHtml(scenario.client)}</dd></div><div><dt>Profissional de exemplo</dt><dd>${escapeHtml(scenario.professional)}</dd></div><div><dt>Referência do cenário</dt><dd>${escapeHtml(data.inspection.id)}</dd></div><div><dt>Data ilustrativa</dt><dd>${escapeHtml(scenario.suggestedDate)}</dd></div></dl></div><p class="report-cover-note">Prévia visual para discussão de linguagem e organização. Sem inspeção real, registro profissional, emissão de ART ou assinatura.</p>${sheetFoot(1)}</article>
    <article class="report-sheet" id="report-body" aria-labelledby="report-body-title">${sheetHead}<span class="report-chapter">01 / CONTEXTO</span><h2 id="report-body-title">Identificação e método</h2><section><h3>1. Identificação do cenário</h3><dl class="report-facts"><div><dt>Cliente</dt><dd>${escapeHtml(scenario.client)}</dd></div><div><dt>Imóvel</dt><dd>${escapeHtml(scenario.property)} · ${escapeHtml(scenario.location)}</dd></div><div><dt>Solicitação</dt><dd>${escapeHtml(scenario.request)}</dd></div><div><dt>Serviços no pedido</dt><dd>${scenario.services.map(escapeHtml).join(" + ")}</dd></div></dl></section><section><h3>2. Objetivo</h3><p>${escapeHtml(report.objective)}</p></section><section><h3>3. Caracterização do imóvel</h3><p>${escapeHtml(report.characterization)}</p><ul class="report-room-list">${scenario.environments.map(room => `<li>${escapeHtml(room)}</li>`).join("")}</ul></section><section><h3>4. Metodologia e limites</h3><p>${escapeHtml(report.methodology)}</p></section><section><h3>5. Referência à planta</h3><p>As letras A, B e C identificam os mesmos registros na planta ilustrativa e nesta prévia. A posição de cada marcador é aproximada e não corresponde a um levantamento arquitetônico.</p><a class="text-link" href="#planta">Consultar planta e marcadores →</a></section>${sheetFoot(2)}</article>
    <article class="report-sheet" id="report-findings" aria-labelledby="report-findings-title">${sheetHead}<span class="report-chapter">02 / REGISTROS</span><h2 id="report-findings-title">Constatações e evidências</h2><p>Três registros fictícios vinculados aos ambientes do cenário. As descrições abaixo são as mesmas apresentadas na vistoria.</p>${data.inspection.findings.map(finding => `<section class="report-finding" aria-labelledby="report-finding-${finding.id}"><div class="report-finding-heading"><span class="finding-letter">${finding.id}</span><div><h3 id="report-finding-${finding.id}">${escapeHtml(finding.title)}</h3><p>${escapeHtml(finding.room)} · ${escapeHtml(finding.category)} · marcador ${finding.id}</p></div></div><p>${escapeHtml(finding.description)}</p><p><strong>Localização ilustrativa:</strong> ${escapeHtml(finding.location)}</p>${evidenceMarkup(finding)}</section>`).join("")}<section class="report-conclusion"><h3>6. Conclusão ilustrativa</h3><strong>EXEMPLO SEM VALIDADE TÉCNICA</strong><p>${escapeHtml(report.conclusion)}</p></section><section class="report-reserved" aria-label="ART e assinatura demonstrativas"><div><h3>7. ART</h3><span>Área reservada · placeholder</span><p>Sem número, registro ou emissão de ART.</p></div><div><h3>8. Assinatura</h3><span>Área reservada · placeholder</span><p>${escapeHtml(scenario.professional)}<br>Sem assinatura real ou digital.</p></div></section>${sheetFoot(3)}</article>`;
  }

  function renderReport() {
    main.innerHTML = `<div class="page-wrap report-page"><div class="page-heading"><div><span class="eyebrow">Documento fictício · leitura em HTML</span><h1 id="page-title">Prévia do laudo</h1><p>Cenário ilustrativo fixo: edições do checklist e marcadores temporários não alteram esta prévia. Nenhum documento oficial é emitido.</p></div><a href="#planta" class="button button-outline">← Voltar à planta</a></div>
    ${reportManagementMarkup()}<nav class="report-index" aria-label="Seções da prévia"><button type="button" data-report-section="report-cover">Capa</button><button type="button" data-report-section="report-body">Identificação e método</button><button type="button" data-report-section="report-findings">Constatações e conclusão</button></nav>
    ${reportSheetsMarkup()}<div class="page-end"><span>Fim da prévia · documento fictício</span><a href="#painel">Voltar ao painel →</a></div></div>`;
    main.querySelectorAll("[data-report-section]").forEach(button => button.addEventListener("click", () => {
      const section = main.querySelector(`#${button.dataset.reportSection}`);
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }));
    mountClientPreview();
  }

  function renderArea(area) {
    if (area.id === "laudo") return renderReport();
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
    document.body.classList.toggle("client-perspective", state.perspective === "client");
    document.querySelectorAll("[data-perspective]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.perspective === state.perspective)));
    if (state.perspective === "client") { renderClientPage(); window.scrollTo(0,0); return; }
    renderNav(area.id);
    renderArea(area);
    topbarArea.textContent = area.title;
    document.title = `${area.title} — dr_vistoria (demonstração)`;
    closeMenu();
    window.scrollTo(0, 0);
  }

  menuButton.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    sidebar.inert = !isOpen && matchMedia("(max-width: 900px)").matches;
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
  document.querySelector(".skip-link").addEventListener("click", event => {
    event.preventDefault();
    main.focus();
  });
  matchMedia("(max-width: 900px)").addEventListener("change", closeMenu);
  window.addEventListener("hashchange", () => { render(); main.focus({ preventScroll: true }); });
  bindPerspectiveControls();
  render();
})();
