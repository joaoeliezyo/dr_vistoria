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
  inspection: {
    id: "Vistoria DEMO-001",
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
      description: "Estrutura inicial da página pública, com espaço previsto para apresentação, serviços, processo e contato.",
      details: ["Apresentação profissional fictícia", "Serviços em destaque", "Contato ilustrativo"],
      note: "A composição completa do site será desenvolvida após a validação desta fundação."
    },
    {
      id: "painel", number: "02", icon: "▦", title: "Dashboard", short: "Painel", eyebrow: "Visão do trabalho",
      heading: "Uma leitura rápida do cenário de exemplo.",
      description: "Área reservada para indicadores, próximas vistorias e solicitações fictícias.",
      details: ["Indicadores demonstrativos", "Próximas vistorias", "Últimas solicitações"],
      note: "Os indicadores e cartões administrativos serão detalhados na próxima etapa."
    },
    {
      id: "solicitacoes", number: "03", icon: "▤", title: "Solicitações e agenda", short: "Solicitações", eyebrow: "Organização",
      heading: "Do interesse do cliente ao agendamento pelo engenheiro.",
      description: "Espaço previsto para um pedido com dois serviços, negociação ilustrativa e agenda demonstrativa.",
      details: ["Dois serviços no mesmo pedido", "Negociação simulada", "Agenda ilustrativa"],
      note: "Nenhuma reserva, confirmação ou mensagem é enviada nesta demonstração."
    },
    {
      id: "vistoria", number: "04", icon: "☷", title: "Vistoria mobile", short: "Vistoria", eyebrow: "Em campo",
      heading: "Um fluxo pensado para uso no celular.",
      description: "Área reservada para ambientes, categorias, checklist e constatações de exemplo.",
      details: ["Sala, cozinha e banheiro", "Estrutura, elétrica e hidráulica", "Checklist ilustrativo"],
      note: "Fotos e modo offline serão apenas representações visuais, sem captura ou armazenamento."
    },
    {
      id: "planta", number: "05", icon: "◇", title: "Planta e constatações", short: "Planta", eyebrow: "Localização",
      heading: "Cada constatação no seu contexto.",
      description: "Área reservada para um esquema de planta ilustrativo e uma lista textual de ocorrências.",
      details: ["Esquema não arquitetônico", "Marcadores demonstrativos", "Alternativa textual"],
      note: "A planta e os marcadores interativos serão desenhados em etapa posterior."
    },
    {
      id: "laudo", number: "06", icon: "▧", title: "Prévia do laudo", short: "Laudo", eyebrow: "Apresentação final",
      heading: "Uma prévia para discutir a leitura do documento.",
      description: "Área reservada para uma composição visual de relatório, sem geração de arquivo ou validade técnica.",
      details: ["Constatações de exemplo", "Evidências ilustrativas", "ART e assinatura: áreas reservadas"],
      note: "O laudo de exemplo será criado depois; nenhuma ART ou assinatura é emitida."
    }
  ]
};
