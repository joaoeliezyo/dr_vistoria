# Critérios de aceite — Prompt 07

## Fluxo e vínculo entre perspectivas
- [ ] Seis módulos globais preservados e regressão das Etapas 00–06 aprovada.
- [ ] Seletor explícito de perspectiva; visão do cliente visualmente distinta e sem ferramentas administrativas.
- [ ] Site → seleção de dois serviços → formulário → resumo → `Simular envio` → acompanhamento coerente do `DEMO-001`.
- [ ] Nada é comunicado como enviado de verdade. Cenário pré-carregado e envio simulado são claramente diferenciados.
- [ ] Alternar cliente/engenheiro na mesma sessão preserva estados sem dados duplicados divergentes.
- [ ] Preferência de período não confirma agendamento; somente ação do engenheiro muda seu estado.
- [ ] Retorno à visão do cliente reflete confirmação; o cliente não tem botão de aprovação/reserva.
- [ ] Etapas de execução e preparo documental usam controles de demonstração, e não inferência do progresso da vistoria, da fila offline ou de envio real.
- [ ] ART e anexo sem links; laudo fixo apenas como prévia HTML, com aviso de invalidade técnica.
- [ ] Restauração/recarga reinicia estado; cenário anterior `DEMO-H01` preserva distinção histórica.

## Interface e acessibilidade
- [ ] Fonte e escala tipográfica de `typography.css` preservadas, inclusive textos essenciais >=14px quando viável.
- [ ] Layouts em 1440×900 e 390×844 sem overflow horizontal, recortes de texto ou controles sobrepostos.
- [ ] Interações de toque >=44px; navegação por teclado, foco visível, cabeçalhos, labels e mensagens de status adequados.
- [ ] Troca de perspectiva e retorno à tela de origem mantêm contexto e foco de modo previsível.
- [ ] Modal de solicitação e prévia do laudo conservam fechamento por Escape e restauração do foco quando aplicável.
- [ ] Não acrescentar redes, dependências, storage ou credenciais; nenhuma requisição HTTP(S) externa.

## Testes e registro
- [ ] Testar cenário inicial, envio simulado, alternância de perspectiva, confirmação pelo engenheiro, retorno ao cliente, documentos, restauração e recarga nas duas viewports.
- [ ] Rodar regressão: menus, seis serviços, indicadores, agenda, checklist, modelos, progresso, fotos anotadas, planta, marcador D, conectividade fictícia e laudo.
- [ ] Capturar screenshots desktop/mobile de: página inicial do cliente, pedido, status antes/depois de confirmação, documentos e alternância.
- [ ] Registrar em `artifacts/prompt-07/VERIFICACAO.md` ações realmente executadas, números de erros, medições de viewport, limitações e links para as capturas.
- [ ] Nenhum commit/push automático; não começar V1.
