# Verificação — Prompt 07: jornada do cliente

Rodada final executada em 29/10/2026, Chrome headless com emulação explícita de **1440×900** e **390×844**, escala 1. Execução local por file://, sem build. O processo final de teste encerrou com código 0.

## Implementação e decisões

- Seletor explícito de perspectiva, identificado como demonstração sem autenticação/autorização. A administração mantém as seis rotas e sidebar; o cliente tem Início, Minha solicitação, Atendimento e Documentos, sem ferramentas de vistoria ou confirmação.
- Um objeto de estado em memória reúne `appointmentConfirmed`, indicador de envio simulado, período e etapa da narrativa. As perspectivas derivam desses mesmos valores; estados e textos-base estão em `data.js`.
- Início reutiliza o site e os seis serviços. Formulário, resumo e ação separada Simular envio alimentam apenas DEMO-001. Sem envio explícito, a visão do cliente identifica o cenário pré-carregado e não apresenta recibo.
- Identidade e imóvel permanecem fixos. O par aceito neste cenário é Entrega de imóvel + Laudo técnico; outros pares não produzem atendimentos. A preferência de período é editável e compartilhada. Essa restrição evita divergência com o laudo e com os vínculos previamente aprovados.
- Agenda depende exclusivamente da ação administrativa já existente. Indicadores e histórico distinguem pedido recebido de negociação, usando o estado compartilhado.
- Execução e preparo documental são escolhidos pelo apresentador via Simular etapa, exigindo agenda confirmada. Checklist e conectividade não os avançam.
- A mesma composição fixa de laudo foi extraída para função reutilizada pela área administrativa e pelo diálogo de leitura do cliente. Não há controles administrativos no diálogo da jornada.
- Restauração geral/campo reinicia também jornada e agenda. Restauração exclusiva de conectividade continua independente.
- README e dois adendos criados; documentos originais da Etapa 06 preservados.

## Jornada efetivamente testada nas duas viewports

- [x] Alternar para cliente com Enter: estado selecionado, sidebar oculta e foco no conteúdo. Seis serviços visíveis.
- [x] Minha solicitação inicial identifica cenário pré-carregado e ausência de envio nesta sessão.
- [x] Abrir e fechar formulário com Escape, com restauração explícita de foco ao CTA de origem.
- [x] Seleção incompleta de serviços não habilita Simular envio. Entrega + Laudo e período Tarde permitem resumo e envio simulado.
- [x] Resumo com dois serviços e ação separada Simular envio; resultado apresenta recibo visual DEMO-001, aviso de não envio e período da tarde.
- [x] Cliente vê Aguardando confirmação, sem botão de agenda ou reserva.
- [x] Alternar para engenheiro preserva contexto; pedido mostra a mesma preferência e indicação de simulação desta sessão. Indicador de negociação fica 00 enquanto o pedido está recém-recebido.
- [x] Execução está indisponível antes da confirmação. Simular análise/negociação e confirmar a agenda na visão do engenheiro.
- [x] Retornar ao cliente mostra confirmação e data/horário ilustrativos, sem ação de confirmação no cliente.
- [x] Simular execução e preparo documental no engenheiro: cliente acompanha as mesmas etapas.
- [x] Documentos: três cartões, só um botão de leitura HTML, ART não emitida e anexo pendente sem links.
- [x] Abrir laudo por Enter, conferir três registros A/B/C e ausência de controles administrativos, fechar com Escape e devolver foco ao botão de abertura.
- [x] Marcar checklist e concluir fila de conectividade não altera etapa de preparo documental nem confirmação já existente.
- [x] Restaurar cenário na vistoria reinicia agenda/jornada para pré-carregado; Restaurar cenário geral retorna ao Início do cliente.
- [x] Recarregar retorna à perspectiva do engenheiro, mantém seis módulos e elimina o indicador de envio da sessão.
- [x] Capturas de início, exemplo pré-carregado, formulário, pedido simulado, antes/depois da confirmação, documentos, diálogo e alternância.

## Regressão 00–06 executada nas duas viewports

- [x] Seis módulos, rotas e menus, um h1 por área administrativa; formulário/resumo original e seis serviços.
- [x] Indicadores, pedido com dois serviços, preferência sem reserva, confirmação pelo engenheiro e agenda.
- [x] Ficha cliente/imóvel, histórico com DEMO-H01 distinto, estados documentais, prévia administrativa do cliente, ida/retorno ao laudo.
- [x] Sala, Cozinha e Banheiro, checklist, observações, constatações e retorno aos ambientes.
- [x] Modelos entrega/predial isolados; progresso 0/9, em andamento e 9/9; adição de item → 9/12, desativação → 9/9, restauração e recarga.
- [x] Foto Original/Anotada/Original, mesma imagem-base e descrição equivalente.
- [x] Filtros, marcadores A/B/C e lista textual; mouse desktop, toque emulado mobile e Enter; marcador temporário D e desfazer.
- [x] Conectividade: seis estados selecionáveis, quatro itens e contagens coerentes, sucesso, falha 3 pendentes + 1 erro, retentativa, repetição, avaliação separada, restauração e recarga.
- [x] Laudo fixo, índice interno, ART/assinatura reservadas e navegação documental preservados.
- [x] Roteiro por links/controles: landing → painel → pedido/agenda → vistoria → planta → laudo.

## Acessibilidade básica, medidas e registros

- Enter para perspectiva e laudo; Tab/Shift+Tab no painel de conectividade; Escape para formulário/diálogos; abas por setas/End, foco visível e devolução de foco revalidados.
- Perspectiva/nav/ações novas com botões semânticos; labels e mensagens de estado. Foco no conteúdo após trocar perspectiva, preservando a página do cliente e a rota administrativa.
- Botões/nav de cliente e formulário: controles de 44 px ou mais; labels dos checkboxes ampliados para >=44 px, resumo conferido com fonte >=14 px. Controles de campo/ficha/diálogo anteriores também revalidados.
- Preferência por redução de movimento emulada e comportamento do menu conferido.
- Revisão visual das capturas desktop/mobile: sem ferramentas administrativas no cliente, sem recortes horizontais e com ressalvas legíveis.

| Áreas administrativas | scrollWidth / innerWidth em 1440×900 | scrollWidth / innerWidth em 390×844 |
|---|---|---|
| Site, painel, solicitações, vistoria, planta e laudo | 1425 / 1440 | 390 / 390 |

As páginas do cliente, estados adicionais e as capturas passaram em `document.documentElement.scrollWidth <= window.innerWidth`. O formulário e o diálogo de laudo também passaram em scrollWidth <= clientWidth. A diferença desktop de 15 px corresponde à barra vertical.

- Exceções JavaScript e console.error capturados: **0**.
- Requisições HTTP(S) externas observadas: **0**.
- `git diff --check`: sem erros.
- Nenhuma regressão funcional detectada no roteiro executado.
- Uma primeira checagem evidenciou retorno de foco implícito insuficiente no formulário; foi tornado explícito e revalidado. O teste de toque usa rolagem instantânea para não disputar com a rolagem suave. A limpeza do perfil temporário do navegador foi ajustada no teste; a rodada final encerrou normalmente.

## Integridade

`prototype/typography.css` permanece idêntico ao HEAD: SHA-256 `6aaac0f308e6c944eb04408f6ec3f9a9bce0029bc967b9f099de0a84ac25b8e0`. Imagens-base não foram modificadas.

As funções de conectividade, foto/anotação e planta/filtros foram comparadas às anteriores e preservadas. A composição dos artigos do laudo é idêntica; apenas passou a ser reutilizável. A restauração do campo ganhou o reinício da jornada/agenda explicitamente documentado.

`docs/ROTEIRO-APRESENTACAO.md` e `docs/GUIA-VALIDACAO-ENGENHEIRO.md` permanecem idênticos aos da Etapa 06. Nenhuma alteração em `docs/referencias/`. Alterações pré-existentes em COMO_APLICAR.md e os arquivos fornecidos pelo usuário foram preservados.

## Capturas

76 PNGs: jornada e regressão, nas duas viewports. Imagens de página inteira têm altura variável; diálogos usam a viewport visível e capturas de conectividade recortam o painel. Focos visíveis correspondem à ação executada.

| Jornada | Desktop | Mobile |
|---|---|---|
| Início do cliente | [1440×900](cliente-inicio-1440x900.png) | [390×844](cliente-inicio-390x844.png) |
| Cenário pré-carregado | [1440×900](cliente-precarregado-1440x900.png) | [390×844](cliente-precarregado-390x844.png) |
| Formulário e resumo | [1440×900](cliente-formulario-resumo-1440x900.png) | [390×844](cliente-formulario-resumo-390x844.png) |
| Recibo visual / pedido | [1440×900](cliente-pedido-simulado-1440x900.png) | [390×844](cliente-pedido-simulado-390x844.png) |
| Antes da confirmação | [1440×900](cliente-aguardando-1440x900.png) | [390×844](cliente-aguardando-390x844.png) |
| Alternância / mesmo pedido | [1440×900](engenheiro-mesmo-pedido-1440x900.png) | [390×844](engenheiro-mesmo-pedido-390x844.png) |
| Depois da confirmação | [1440×900](cliente-agendamento-confirmado-1440x900.png) | [390×844](cliente-agendamento-confirmado-390x844.png) |
| Preparo documental ilustrado | [1440×900](cliente-preparo-documental-1440x900.png) | [390×844](cliente-preparo-documental-390x844.png) |
| Documentos | [1440×900](cliente-documentos-1440x900.png) | [390×844](cliente-documentos-390x844.png) |
| Diálogo do laudo | [1440×900](cliente-laudo-dialogo-1440x900.png) | [390×844](cliente-laudo-dialogo-390x844.png) |

| Regressão | Desktop | Mobile |
|---|---|---|
| banheiro | [1440×900](banheiro-1440x900.png) | [390×844](banheiro-390x844.png) |
| banheiro-anotado | [1440×900](banheiro-anotado-1440x900.png) | [390×844](banheiro-anotado-390x844.png) |
| conectividade-concluido | [1440×900](conectividade-concluido-1440x900.png) | [390×844](conectividade-concluido-390x844.png) |
| conectividade-conectado | [1440×900](conectividade-conectado-1440x900.png) | [390×844](conectividade-conectado-390x844.png) |
| conectividade-erro | [1440×900](conectividade-erro-1440x900.png) | [390×844](conectividade-erro-390x844.png) |
| conectividade-pendencias | [1440×900](conectividade-pendencias-1440x900.png) | [390×844](conectividade-pendencias-390x844.png) |
| conectividade-recolhida | [1440×900](conectividade-recolhida-1440x900.png) | [390×844](conectividade-recolhida-390x844.png) |
| conectividade-sem-conexao | [1440×900](conectividade-sem-conexao-1440x900.png) | [390×844](conectividade-sem-conexao-390x844.png) |
| conectividade-sincronizando | [1440×900](conectividade-sincronizando-1440x900.png) | [390×844](conectividade-sincronizando-390x844.png) |
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

- Um único atendimento DEMO-001 com identidade/imóvel fixos e par Entrega + Laudo. A seleção é demonstrável nesse par; outras combinações ou personalização cadastral ficam fora deste cenário. Preferência pode ser alterada localmente.
- Alternar perspectiva não é controle de acesso. Dados continuam no mesmo navegador, sem autenticação, autorização, portal público ou segurança implementada.
- “Simular envio” não envia nada. Um novo envio substitui a narrativa/agenda da sessão para DEMO-001 e não cria outro registro. O roteiro testou um envio explícito e restauração/recarga, não um conjunto de múltiplos pedidos.
- Etapas de execução/preparo são ações do apresentador; não representam visita, laudo emitido ou documento entregue. A prévia fixa está disponível para leitura desde o cenário inicial e não é liberação documental.
- Sem storage, API, backend, mensagens, pagamentos, sincronização, PDF, ART ou assinatura reais. A recarga perde o estado.
- Chrome emulado não substitui aparelho físico, leitor de tela ou outros navegadores. Validar com o engenheiro a linguagem dos estados, limites do recibo, formulário do cenário e ergonomia.
- Adendos: `docs/ADENDO-ROTEIRO-CLIENTE.md` (5–7 minutos) e `docs/PERGUNTAS-VALIDACAO-CLIENTE.md`; tópicos começam Ainda não avaliado. Nenhuma aprovação do engenheiro foi inferida.
- Sem commit, push, V1 ou etapa adicional. Aguardar revisão humana.
