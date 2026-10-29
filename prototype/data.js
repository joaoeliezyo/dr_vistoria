/* Dados exclusivamente fictícios para a demonstração; não há persistência. */
window.demoData = {
  scenario: {
    professional: "Engenheiro Responsável (exemplo)",
    client: "Marina Costa (fictícia)",
    property: "Apartamento Modelo 302",
    location: "Bairro Exemplo",
    request: "Solicitação DEMO-001",
    services: ["Vistoria de entrega de imóvel", "Laudo técnico ilustrativo"],
    preference: "Período da manhã, sujeito à conversa com o engenheiro",
    suggestedDate: "18 de junho · data demonstrativa",
    suggestedTime: "09h · horário ilustrativo",
    calendar: { month: "Junho", days: [15, 16, 17, 18, 19, 20, 21], proposedDay: 18 },
    environments: ["Sala", "Cozinha", "Banheiro"],
    categories: ["Estrutura", "Elétrica", "Hidráulica"],
    findings: [
      "Infiltração ilustrativa na parede do banheiro",
      "Tomada sem acabamento na sala",
      "Fissura superficial ilustrativa na cozinha"
    ]
  },
  journey: {
    pages: { inicio: "Início", pedido: "Minha solicitação", atendimento: "Atendimento", documentos: "Documentos" },
    periods: { "Manhã": "Período da manhã, sujeito à conversa com o engenheiro", "Tarde": "Período da tarde, sujeito à conversa com o engenheiro", "Indiferente": "Período indiferente, sujeito à conversa com o engenheiro" },
    stages: {
      received: { label: "Pedido recebido (simulado)", description: "O resumo do DEMO-001 foi confirmado apenas nesta sessão. Nenhum pedido foi enviado." },
      analysis: { label: "Em análise / negociação (simulado)", description: "O engenheiro representa a análise do interesse e o alinhamento do atendimento, sem mensagens reais." },
      execution: { label: "Execução ilustrada (simulado)", description: "O apresentador escolheu mostrar a etapa de execução. Não comprova visita ou vistoria realizada.", needsAppointment: true },
      preparing: { label: "Preparo documental ilustrado (simulado)", description: "O apresentador escolheu mostrar o preparo documental. Não houve emissão, assinatura ou entrega.", needsAppointment: true }
    }
  },
  inspection: {
    id: "Vistoria DEMO-001",
    checklistModels: [
      { id: "entrega", service: "Vistoria de entrega de imóvel", items: [
        { id: "paredes", category: "Estrutura", label: "Observar paredes, piso e revestimentos" },
        { id: "tomadas", category: "Elétrica", label: "Observar acabamento aparente das tomadas" },
        { id: "umidade", category: "Hidráulica", label: "Observar sinais aparentes de umidade" }
      ] },
      { id: "predial", service: "Inspeção predial", items: [
        { id: "conservacao", category: "Estrutura", label: "Registrar conservação aparente das superfícies" },
        { id: "instalacoes", category: "Elétrica", label: "Registrar condições visuais das instalações acessíveis" },
        { id: "tubulacoes", category: "Hidráulica", label: "Observar tubulações aparentes e sinais de vazamento" }
      ] }
    ],
    temporaryFinding: { id: "D", room: "Sala", category: "Demonstração", title: "Marcador temporário de exemplo", description: "Posição fictícia adicionada apenas para explorar a interface. Não corresponde a uma constatação técnica e não integra o laudo fixo.", location: "Ponto ilustrativo da sala", image: null, x: 38, y: 65 },
    annotation: "Destaque ilustrativo da região de descascamento acima dos azulejos. Não é diagnóstico nem medição.",
    checks: [
      { category: "Estrutura", label: "Observar paredes, piso e revestimentos" },
      { category: "Elétrica", label: "Observar acabamento aparente das tomadas" },
      { category: "Hidráulica", label: "Observar sinais aparentes de umidade" }
    ],
    findings: [
      { id: "A", room: "Banheiro", category: "Hidráulica", title: "Infiltração ilustrativa", description: "Mancha de umidade e descascamento aparente na parede acima do revestimento. Registro fictício para discutir a apresentação de evidências; não determina causa ou diagnóstico.", location: "Parede junto ao revestimento", image: "assets/infiltracao-ilustrativa.png", x: 76, y: 28 },
      { id: "B", room: "Sala", category: "Elétrica", title: "Tomada sem acabamento", description: "Ponto elétrico representado sem espelho de acabamento na parede da sala. Constatação exclusivamente demonstrativa.", location: "Parede lateral da sala", image: null, x: 27, y: 39 },
      { id: "C", room: "Cozinha", category: "Estrutura", title: "Fissura superficial ilustrativa", description: "Traço superficial representado no revestimento da cozinha. Exemplo visual sem avaliação de origem, extensão ou gravidade.", location: "Parede próxima à bancada", image: null, x: 73, y: 72 }
    ]
  },
  connectivity: {
    queue: [
      { id: "checklist", name: "Checklist de exemplo", context: "Itens ilustrativos do apartamento" },
      { id: "observation", name: "Observação de exemplo", context: "Texto fictício do Banheiro" },
      { id: "photo", name: "Fotografia ilustrativa", context: "Imagem local da constatação A" },
      { id: "finding", name: "Constatação A", context: "Infiltração ilustrativa no Banheiro" }
    ],
    states: {
      connected: { label: "Conectado (simulado)", description: "Exemplos disponíveis para iniciar o roteiro. A conexão do dispositivo não é consultada.", statuses: ["ready", "ready", "ready", "ready"], next: "offline", action: "Simular perda de conexão" },
      offline: { label: "Sem conexão (simulado)", description: "Condição offline apenas representada. Os quatro exemplos ainda não foram incluídos na fila fictícia.", statuses: ["ready", "ready", "ready", "ready"], next: "pending", action: "Mostrar 4 pendências fictícias" },
      pending: { label: "Pendências (simulado)", description: "Quatro exemplos aguardam o próximo passo visual. Nenhuma fila real ou retenção de dados existe.", statuses: ["pending", "pending", "pending", "pending"], next: "syncing", action: "Simular reconexão e sincronização" },
      syncing: { label: "Sincronizando (simulado)", description: "Reconexão e envio representados. Nada avança sozinho: escolha concluir ou demonstrar uma falha.", statuses: ["processing", "processing", "processing", "processing"], next: "complete", action: "Concluir simulação" },
      error: { label: "Falha recuperável (simulado)", description: "Erro ilustrativo na fotografia; três exemplos permanecem pendentes. Tentar novamente retorna à etapa visual de sincronização.", statuses: ["pending", "pending", "error", "pending"], next: "syncing", action: "Tentar novamente (simulação)" },
      complete: { label: "Concluído (simulado)", description: "Resultado do roteiro: quatro exemplos concluídos apenas na interface. Nenhum dado foi enviado; avaliação, laudo e documentos não foram alterados.", statuses: ["complete", "complete", "complete", "complete"], next: "offline", action: "Repetir roteiro sem conexão" }
    },
    itemStates: { ready: "Exemplo fora da fila", pending: "Pendente (simulado)", processing: "Envio representado (simulado)", error: "Erro (simulado)", complete: "Concluído (simulado)" }
  },
  report: {
    id: "LAUDO DEMO-001",
    title: "Prévia de laudo técnico",
    subtitle: "Vistoria de entrega de imóvel",
    objective: "Apresentar a organização visual de uma vistoria de entrega, relacionando ambientes, constatações fictícias e evidências ilustrativas. Este conteúdo serve exclusivamente à validação da demonstração com o engenheiro.",
    characterization: "Apartamento residencial de exemplo, composto neste cenário por sala, cozinha e banheiro. Localização genérica, sem endereço, área, matrícula ou características técnicas verificadas.",
    methodology: "Simulação de observação visual dos ambientes e de registro por categorias: Estrutura, Elétrica e Hidráulica. A fotografia foi gerada para demonstração; o esquema de planta é original e sem escala. Não foram realizados visita, ensaios, medições ou avaliação técnica real.",
    conclusion: "O cenário reúne três registros fictícios: umidade aparente no banheiro, tomada sem acabamento na sala e fissura superficial na cozinha. A organização permite discutir clareza, rastreabilidade e apresentação das evidências. Não é possível concluir sobre causas, riscos, desempenho ou condições de uso a partir desta demonstração. Qualquer conclusão técnica dependeria de avaliação profissional real, fora deste protótipo."
  },
  site: {
    heroEyebrow: "Engenharia residencial · apresentação ilustrativa",
    heroTitle: "Mais clareza para decisões sobre o seu imóvel.",
    heroDescription: "Vistorias, inspeções e análises técnicas apresentadas com método, atenção aos detalhes e linguagem acessível. Conheça uma proposta visual para esse atendimento.",
    services: [
      { number: "01", title: "Vistoria cautelar", description: "Registro visual das condições do imóvel antes de uma intervenção próxima.", icon: "◫" },
      { number: "02", title: "Inspeção predial", description: "Leitura organizada de sistemas, conservação e pontos de atenção.", icon: "▦" },
      { number: "03", title: "Vistoria de entrega de imóvel", description: "Conferência ilustrativa de ambientes e acabamentos na entrega.", icon: "⌂" },
      { number: "04", title: "Vistoria para locação", description: "Descrição das condições aparentes para entrada ou saída do imóvel.", icon: "▤" },
      { number: "05", title: "Avaliação técnica", description: "Análise orientada por objetivo e contexto apresentados pelo cliente.", icon: "◇" },
      { number: "06", title: "Laudo técnico", description: "Organização de constatações e evidências em documento de exemplo.", icon: "▧" }
    ],
    process: [
      { number: "01", title: "Conte o que precisa", description: "O cliente informa o imóvel, os serviços de interesse e sua preferência de período." },
      { number: "02", title: "Alinhe o atendimento", description: "O engenheiro avalia o pedido e negocia detalhes antes de propor a agenda." },
      { number: "03", title: "Acompanhe a vistoria", description: "Após a confirmação pelo engenheiro, o trabalho segue para registro e apresentação técnica." }
    ]
  },
  dashboard: {
    metrics: [
      { label: "Solicitações", value: "01", caption: "pedido fictício no cenário" },
      { label: "Em negociação", value: "01", caption: "etapa comercial ilustrativa" },
      { label: "Agenda confirmada", value: "00", caption: "antes da ação demonstrativa" }
    ]
  },
  areas: [
    {
      id: "site", number: "01", icon: "⌂", title: "Site institucional", short: "Apresentação", eyebrow: "Primeiro contato",
      heading: "Uma presença clara para serviços de engenharia.",
      description: "Página pública ilustrativa com apresentação, serviços, processo e interesse simulado.",
      details: ["Apresentação profissional fictícia", "Serviços em destaque", "Contato ilustrativo"],
      note: "Página de demonstração; nenhum pedido é enviado."
    },
    {
      id: "painel", number: "02", icon: "▦", title: "Dashboard", short: "Painel", eyebrow: "Visão do trabalho",
      heading: "Uma leitura rápida do cenário de exemplo.",
      description: "Indicadores, agenda proposta e solicitação fictícia no cenário de exemplo.",
      details: ["Indicadores demonstrativos", "Próximas vistorias", "Últimas solicitações"],
      note: "Indicadores fictícios acompanham a confirmação visual desta sessão."
    },
    {
      id: "solicitacoes", number: "03", icon: "▤", title: "Solicitações e agenda", short: "Solicitações", eyebrow: "Organização",
      heading: "Do interesse do cliente ao agendamento pelo engenheiro.",
      description: "Pedido com dois serviços, negociação ilustrativa, agenda e ficha do imóvel.",
      details: ["Dois serviços no mesmo pedido", "Negociação simulada", "Agenda ilustrativa"],
      note: "Nenhuma reserva, confirmação ou mensagem é enviada nesta demonstração."
    },
    {
      id: "vistoria", number: "04", icon: "☷", title: "Vistoria mobile", short: "Vistoria", eyebrow: "Em campo",
      heading: "Um fluxo pensado para uso no celular.",
      description: "Ambientes, modelos de checklist, evidências e conectividade exclusivamente simulada.",
      details: ["Sala, cozinha e banheiro", "Estrutura, elétrica e hidráulica", "Checklist ilustrativo"],
      note: "Fotos e modo offline serão apenas representações visuais, sem captura ou armazenamento."
    },
    {
      id: "planta", number: "05", icon: "◇", title: "Planta e constatações", short: "Planta", eyebrow: "Localização",
      heading: "Cada constatação no seu contexto.",
      description: "Esquema ilustrativo com filtros de ambientes, marcadores e lista textual de ocorrências.",
      details: ["Esquema não arquitetônico", "Marcadores demonstrativos", "Alternativa textual"],
      note: "Planta sem escala; o marcador temporário não integra o laudo fixo."
    },
    {
      id: "laudo", number: "06", icon: "▧", title: "Prévia do laudo", short: "Laudo", eyebrow: "Apresentação final",
      heading: "Uma prévia para discutir a leitura do documento.",
      description: "Prévia HTML fixa com identificação, método, evidências e conclusão ilustrativa.",
      details: ["Constatações de exemplo", "Evidências ilustrativas", "ART e assinatura: áreas reservadas"],
      note: "Documento fictício fixo, sem validade técnica, ART emitida ou assinatura."
    }
  ]
};

/* Entidades da gestão ilustrativa derivadas do cenário único já aprovado. */
window.demoData.management = (() => {
  const { scenario, inspection, report } = window.demoData;
  const client = { id: "CLIENTE-DEMO-001", name: scenario.client };
  const property = { id: "IMOVEL-DEMO-001", name: scenario.property, location: scenario.location, type: "Apartamento residencial · exemplo", clientId: client.id };
  const request = { id: scenario.request, clientId: client.id, propertyId: property.id, services: scenario.services, preference: scenario.preference };
  return {
    client, property, request,
    inspection: { id: inspection.id, propertyId: property.id, requestId: request.id },
    history: [
      { date: "10 de junho", type: "Vistoria anterior", title: "Atendimento histórico de exemplo", reference: "Vistoria DEMO-H01", description: "Registro anterior fictício encerrado, distinto da vistoria DEMO-001. Não representa visita real nem integra o laudo atual.", status: "Encerrado · exemplo" },
      { date: "15 de junho", type: "Solicitação", title: "Interesse em dois serviços", reference: request.id, description: "Pedido fictício vinculado ao cliente e ao imóvel desta ficha.", status: "Recebida · simulação" },
      { date: "16 de junho", type: "Negociação", title: "Alinhamento com o engenheiro", reference: request.id, description: "Preferência de período discutida no canal representado. Nenhuma mensagem é enviada.", status: "Em negociação · simulação", confirmedStatus: "Alinhamento concluído · simulação" },
      { date: "18 de junho", type: "Agendamento", title: "Proposta para a vistoria", reference: inspection.id, description: "A preferência do cliente não reserva horário; a confirmação depende do engenheiro.", status: "Proposta · aguardando confirmação", confirmedStatus: "Confirmado pelo engenheiro · simulação" }
    ],
    documents: [
      { id: report.id, title: "Laudo técnico ilustrativo", status: "Prévia disponível", description: "Leitura HTML do cenário fixo A/B/C. EXEMPLO SEM VALIDADE TÉCNICA; não reflete edições do checklist.", available: true },
      { id: "ART · área reservada", title: "Referência à ART", status: "Não emitida", description: "Sem número, registro, assinatura ou arquivo de ART. Apenas referência visual.", available: false },
      { id: "ANEXO-DEMO-001", title: "Anexo complementar fictício", status: "Pendente · exemplo não disponível", description: "Espaço reservado para discutir um complemento documental. Nenhum arquivo foi produzido ou anexado.", available: false }
    ]
  };
})();
