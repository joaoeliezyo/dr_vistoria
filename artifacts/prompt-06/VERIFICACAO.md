# Verificação final — Etapa 06

Execução do operador em 29/10/2026, Chrome headless com DevTools Protocol. Viewports reais emuladas: **1440×900** e **390×844**, escala 1. Testes feitos sobre arquivos locais, sem build. A aprovação do conceito pelo engenheiro e os testes físicos continuam pendentes.

## Implementação revisada

- Painel recolhível de Demonstração de conectividade na Vistoria. O aviso **SIMULAÇÃO — nenhum dado está sendo enviado** permanece fora da parte recolhível, inclusive na conclusão.
- Estado inicial Sem conexão (simulado). Seletor para todos os estados e ações voluntárias de avanço, falha, nova tentativa, repetição e restauração.
- Quatro exemplos fixos em `data.js`: checklist, observação, fotografia e constatação A. Não são derivados dos itens avaliados nem do texto digitado.
- Avaliação, fila visual e conformidade técnica explicitamente separados. A conclusão não representa envio real e não modifica laudo, ART ou documentos.
- Recarregar reinicia tudo; Restaurar cenário reinicia também o painel; Restaurar conectividade simulada reinicia somente o painel.
- Textos residuais atualizados no README, descrição lateral e metadados das áreas. Tipografia, identidade, imagens e seis rotas preservadas.
- Roteiro de 10 minutos (ajustável 8–12) e guia de validação criados. Nenhuma aprovação técnica ou conceitual foi preenchida em nome do engenheiro.

## Transições e contagens efetivamente testadas

Cada linha abaixo foi conferida nas duas resoluções, incluindo a indicação explícita de simulação, quatro itens na lista e soma das contagens igual a quatro.

| Estado | Fora da fila | Pendentes | Em simulação | Erro | Concluídos na simulação |
|---|---:|---:|---:|---:|---:|
| Conectado | 4 | 0 | 0 | 0 | 0 |
| Sem conexão | 4 | 0 | 0 | 0 | 0 |
| Pendências | 0 | 4 | 0 | 0 | 0 |
| Sincronizando | 0 | 0 | 4 | 0 | 0 |
| Falha recuperável | 0 | 3 | 0 | 1 | 0 |
| Concluído | 0 | 0 | 0 | 0 | 4 |

- [x] Conectado → perda de conexão → quatro pendências → sincronizando → concluído, por cliques explícitos.
- [x] Repetir roteiro → sincronizando → falha na fotografia → tentar novamente → sincronizando → concluído.
- [x] Seletor acessa cada um dos seis estados com valor selecionado correto.
- [x] Marcar um item e escrever observação antes da sequência: após sucesso/erro, o progresso permanece 1/9 e o texto permanece idêntico.
- [x] Restaurar somente conectividade mantém a avaliação em 1/9; Restaurar cenário retorna a 0/9 e recolhe o painel em Sem conexão.
- [x] Navegar para laudo após a conclusão mantém três registros A/B/C, ressalva de validade e estados documentais originais. Retornar à vistoria preserva o estado simulado; recarregar volta a Sem conexão recolhido.
- [x] Nenhum avanço por timer, detecção de rede ou evento real de conectividade foi introduzido; inspeção estática das fontes sem APIs de rede/armazenamento/timers.

## Regressão executada nas duas viewports

- [x] Seis áreas, um h1 por área, rotas, links, menu mobile e foco.
- [x] Landing: seis serviços, formulário ilustrativo, resumo local e fechamento.
- [x] Dashboard → pedido multi-serviço → preferência sem reserva → confirmação pelo engenheiro → agenda.
- [x] Ficha cliente/imóvel/solicitação/vistoria; quatro eventos históricos coerentes e mudança de proposta para confirmação.
- [x] Documentos: prévia HTML, ART não emitida e anexo pendente sem links de arquivo.
- [x] Prévia do cliente, fechamento, retorno ao laudo e à ficha na seção Documentos, inclusive diálogo mobile.
- [x] Sala/Cozinha/Banheiro: checklist, observações, constatação e retorno à lista.
- [x] Progresso Não avaliado/Em andamento/Concluído; modelos isolados; item personalizado e desativação; restauração e recarga.
- [x] Original/Anotada/Original, mesma foto local e descrição equivalente.
- [x] Filtros por ambiente, marcadores A/B/C e lista textual; mouse desktop, toque emulado mobile e Enter em marcador; marcador D com desfazer.
- [x] Laudo fixo A/B/C, índice interno e ressalvas de ART/assinatura.
- [x] Roteiro completo por links/controles da landing até o laudo; contextos da entrega documental revalidados.

## Acessibilidade básica e visual

- [x] Enter abre o details; Tab vai ao seletor; Shift+Tab retorna ao summary; foco visível conferido via estilo computado.
- [x] Enter avança a simulação e mantém foco no botão principal após a atualização. Seletor tem label; botão que desaparece na falha devolve foco ao próximo controle apropriado.
- [x] Diálogo do cliente: abertura por Enter, fechamento por Escape/botão e devolução de foco; abas por ArrowLeft/End preservadas.
- [x] Summary, seletor e botões novos visíveis >=44 px nos estados capturados; verificação também executada nos controles anteriores da vistoria/ficha/diálogo.
- [x] Estado comunicado por texto, sem depender de cor. Fila e contadores têm nomes acessíveis; o badge de conectividade usa região de status.
- [x] Preferência prefers-reduced-motion emulada e transição do menu reduzida. O painel novo não tem animação nem avanço automático.
- [x] Revisão visual das capturas novas desktop/mobile: tipografia herdada, aviso permanente, estados completos e sem controles recortados horizontalmente. Painel inicial recolhido para não alongar o fluxo de campo; lista detalhada disponível sob demanda.

## Medições e registros

| Área | scrollWidth / innerWidth em 1440×900 | scrollWidth / innerWidth em 390×844 |
|---|---|---|
| Landing | 1425 / 1440 | 390 / 390 |
| Dashboard | 1425 / 1440 | 390 / 390 |
| Solicitações | 1425 / 1440 | 390 / 390 |
| Vistoria | 1425 / 1440 | 390 / 390 |
| Planta | 1425 / 1440 | 390 / 390 |
| Laudo | 1425 / 1440 | 390 / 390 |

Todas as transições novas passaram em `document.documentElement.scrollWidth <= window.innerWidth`. O diálogo também passou em scrollWidth <= clientWidth. A diferença desktop de 15 px corresponde à barra vertical.

- Exceções JavaScript e console.error capturados: **0**.
- Requisições HTTP(S) externas observadas via Network.requestWillBeSent: **0**.
- Busca estática nos arquivos JS/HTML/CSS: sem navigator.onLine, localStorage, sessionStorage, IndexedDB, Service Worker, fetch, XMLHttpRequest, WebSocket ou timers.
- `git diff --check`: sem erros.
- Nenhuma regressão detectada no roteiro testado.

## Integridade e escopo

- `typography.css` não foi alterado: SHA-256 `6aaac0f308e6c944eb04408f6ec3f9a9bce0029bc967b9f099de0a84ac25b8e0`.
- Imagens preservadas: edifício `2fb9db71765b486decd3be5866955ce7c2e3476a22f2a5d9af3dcc2b11ff78dd`; infiltração `9afd48fed4087bac5e054d21498bd15ffcde57ec7c32e66bff263f4fdd154f44`.
- Renderização da foto/anotação e da planta/filtros comparadas ao HEAD anterior e preservadas; na vistoria apenas painel, badge, integração da restauração e ligação dos controles novos foram acrescentados.
- Alterações pré-existentes em COMO_APLICAR.md e arquivos fornecidos para o Prompt 06 foram preservados. Nenhuma alteração em docs/referencias/; nenhum commit, push, dependência ou início da V1.

## Documentos de apresentação

- [Roteiro de 8–12 minutos](../../docs/ROTEIRO-APRESENTACAO.md): ações, falas, sequência exata de conectividade e perguntas.
- [Guia de validação](../../docs/GUIA-VALIDACAO-ENGENHEIRO.md): serviços, pedido, agenda, ficha, checklist, ocorrências, evidências, planta, offline, laudo, ART, assinatura e entrega; estados de decisão inicialmente Ainda não avaliado.
- README atualizado com etapas 04–06, execução local e ausência de offline verdadeiro.

## Capturas

56 PNGs. As imagens de conectividade abaixo são **recortes completos do painel**, capturados com a viewport indicada no nome; incluem estado e aviso. As capturas de regressão são de página inteira, exceto o diálogo do cliente, que registra a viewport e uma segunda posição de rolagem. Focos visíveis refletem a ação executada.

| Estado novo | Desktop | Mobile |
|---|---|---|
| Painel recolhido | [1440×900](conectividade-recolhida-1440x900.png) | [390×844](conectividade-recolhida-390x844.png) |
| Conectado | [1440×900](conectividade-conectado-1440x900.png) | [390×844](conectividade-conectado-390x844.png) |
| Sem conexão | [1440×900](conectividade-sem-conexao-1440x900.png) | [390×844](conectividade-sem-conexao-390x844.png) |
| Pendências | [1440×900](conectividade-pendencias-1440x900.png) | [390×844](conectividade-pendencias-390x844.png) |
| Sincronizando | [1440×900](conectividade-sincronizando-1440x900.png) | [390×844](conectividade-sincronizando-390x844.png) |
| Falha recuperável | [1440×900](conectividade-erro-1440x900.png) | [390×844](conectividade-erro-390x844.png) |
| Concluído | [1440×900](conectividade-concluido-1440x900.png) | [390×844](conectividade-concluido-390x844.png) |

| Regressão | Desktop | Mobile |
|---|---|---|
| banheiro | [1440×900](banheiro-1440x900.png) | [390×844](banheiro-390x844.png) |
| banheiro-anotado | [1440×900](banheiro-anotado-1440x900.png) | [390×844](banheiro-anotado-390x844.png) |
| configuracao-item | [1440×900](configuracao-item-1440x900.png) | [390×844](configuracao-item-390x844.png) |
| documentos | [1440×900](documentos-1440x900.png) | [390×844](documentos-390x844.png) |
| ficha | [1440×900](ficha-1440x900.png) | [390×844](ficha-390x844.png) |
| historico-confirmado | [1440×900](historico-confirmado-1440x900.png) | [390×844](historico-confirmado-390x844.png) |
| historico-proposta | [1440×900](historico-proposta-1440x900.png) | [390×844](historico-proposta-390x844.png) |
| laudo | [1440×900](laudo-1440x900.png) | [390×844](laudo-390x844.png) |
| laudo-contexto-cliente | [1440×900](laudo-contexto-cliente-1440x900.png) | [390×844](laudo-contexto-cliente-390x844.png) |
| modelo-predial | [1440×900](modelo-predial-1440x900.png) | [390×844](modelo-predial-390x844.png) |
| painel | [1440×900](painel-1440x900.png) | [390×844](painel-390x844.png) |
| planta | [1440×900](planta-1440x900.png) | [390×844](planta-390x844.png) |
| planta-filtrada | [1440×900](planta-filtrada-1440x900.png) | [390×844](planta-filtrada-390x844.png) |
| planta-temporaria | [1440×900](planta-temporaria-1440x900.png) | [390×844](planta-temporaria-390x844.png) |
| planta-todos | [1440×900](planta-todos-1440x900.png) | [390×844](planta-todos-390x844.png) |
| previa-cliente | [1440×900](previa-cliente-1440x900.png) | [390×844](previa-cliente-390x844.png) |
| previa-cliente-documentos | [1440×900](previa-cliente-documentos-1440x900.png) | [390×844](previa-cliente-documentos-390x844.png) |
| site | [1440×900](site-1440x900.png) | [390×844](site-390x844.png) |
| solicitacoes | [1440×900](solicitacoes-1440x900.png) | [390×844](solicitacoes-390x844.png) |
| vistoria | [1440×900](vistoria-1440x900.png) | [390×844](vistoria-390x844.png) |
| vistoria-inicial | [1440×900](vistoria-inicial-1440x900.png) | [390×844](vistoria-inicial-390x844.png) |

## Limitações e pendências

- Estados de conectividade e fila inteiramente fictícios. Não há rede detectada, retenção offline, armazenamento, envio, recuperação real, background sync ou garantias contra perda de dados.
- A fila tem quatro exemplos fixos; não reflete a quantidade de respostas/observações editadas. Não há latência, progresso percentual ou falha reais.
- Laudo fixo em HTML; ART/assinatura placeholders; anexo indisponível; sem PDF, documentos emitidos ou portal seguro.
- Cenário único fictício, planta sem escala, foto gerada e placeholders em Sala/Cozinha.
- Testes no Chrome emulado não substituem aparelho físico, leitor de tela, validação por outros navegadores ou avaliação técnica profissional.
- Antes da reunião, executar o roteiro no equipamento que será usado. Durante a reunião, registrar feedback do engenheiro sem inferir aprovação; os guias ainda não foram avaliados por ele.
- Não há trabalho adicional de produto autorizado. O protótipo encerra a Etapa 06 e não inicia V1.
