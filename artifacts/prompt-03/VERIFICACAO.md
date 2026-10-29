# Prompt 03 — verificação final do protótipo

Revisão de operador concluída em 29/10/2026. A aprovação da apresentação e do conteúdo técnico cabe ao engenheiro.

## Resultado

Prévia HTML do laudo concluída, com três blocos de documento: capa, identificação/método e constatações/conclusão. Cliente, imóvel, serviços, ambientes, descrições A/B/C, categorias, localizações e evidência são reutilizados de `data.js`. ART e assinatura são áreas reservadas explícitas. A indicação **EXEMPLO SEM VALIDADE TÉCNICA** está na capa, nos rodapés e na conclusão.

## Roteiro executado nas duas resoluções

1. Landing: seis serviços, abertura do formulário e resumo local, fechamento do modal.
2. Dashboard: abertura da solicitação em destaque.
3. Solicitação: dois serviços no mesmo pedido, preferência sem reserva automática, negociação representada, confirmação pelo engenheiro e aba de agenda.
4. Vistoria: seleção de Sala, Cozinha e Banheiro, marcação do checklist, edição de observações, abertura de constatação/evidência e retorno aos ambientes.
5. Planta: marcadores A/B/C e lista textual, seleção correspondente, navegação para o laudo.
6. Laudo: identificação dos três registros, índice interno com transferência de foco e retorno à planta/painel.

## Medições no Chrome headless

Emulação explícita pelo DevTools Protocol, escala 1 e viewport mobile real de 390×844. Medições de `document.documentElement.scrollWidth` e `window.innerWidth`:

| Área | scrollWidth / innerWidth em 1440×900 | scrollWidth / innerWidth em 390×844 |
|---|---|---|
| Site | 1425 / 1440 | 390 / 390 |
| Painel | 1425 / 1440 | 390 / 390 |
| Solicitações | 1425 / 1440 | 390 / 390 |
| Vistoria, lista inicial | 1440 / 1440 | 390 / 390 |
| Planta | 1425 / 1440 | 390 / 390 |
| Laudo | 1425 / 1440 | 390 / 390 |

A diferença de 15 px em algumas telas desktop corresponde à barra vertical. Nenhuma área ultrapassou a largura da viewport; os estados de ambiente e seleção de marcador também passaram. Exceções JavaScript capturadas: **zero**. `git diff --check`: aprovado.

## Revisão visual, semântica e acessibilidade

- [x] Navegação das seis áreas, estados ativos e selo de demonstração preservados.
- [x] Um `h1` por área; hierarquia de títulos, seções, labels e alternativas textuais revisadas.
- [x] Formulário com labels; foto com descrição e legenda; planta com descrição e lista equivalente.
- [x] Menu mobile fecha ao navegar e não recebe foco quando oculto (`inert`).
- [x] Link “Ir para o conteúdo” mantém a rota e foca o conteúdo; foco transferido ao navegar entre áreas.
- [x] Índice do laudo transfere foco para a seção escolhida; Tab, abertura do menu e navegação testados.
- [x] Foco visível preservado; botões dos serviços e links de ação ampliados para altura mínima de 44 px.
- [x] Tipografia, espaçamento e reflow do laudo revisados em desktop/mobile; aparência A4 no desktop e leitura em coluna no mobile.
- [x] Cor de destaque #FF2C23 preservada; texto pequeno usa variantes com contraste adequado.
- [x] Pares principais calculados: branco/#C91D17 = 5,72:1; #637083/#F6F8FB = 4,73:1; #46566C/branco = 7,48:1; #102653/branco = 14,75:1.
- [x] Código do protótipo sem chamadas de rede, storage, impressão, exportação ou integrações externas.
- [x] Dados e imagem fictícios; nenhuma credencial profissional, ART ou assinatura real.
- [x] README atualizado com execução sem build, roteiro e limitações.

A revisão não inclui leitor de tela nem dispositivo físico; a aprovação de acessibilidade não é uma certificação formal.

## Capturas de página inteira

A resolução no nome indica a viewport utilizada. A altura do PNG acompanha todo o conteúdo da página, e a largura desktop pode excluir a barra vertical.

| Área/estado | Desktop | Mobile |
|---|---|---|
| Landing | [1440×900](site-1440x900.png) | [390×844](site-390x844.png) |
| Painel | [1440×900](painel-1440x900.png) | [390×844](painel-390x844.png) |
| Solicitações | [1440×900](solicitacoes-1440x900.png) | [390×844](solicitacoes-390x844.png) |
| Ambientes | [1440×900](vistoria-1440x900.png) | [390×844](vistoria-390x844.png) |
| Banheiro/evidência | [1440×900](banheiro-1440x900.png) | [390×844](banheiro-390x844.png) |
| Planta | [1440×900](planta-1440x900.png) | [390×844](planta-390x844.png) |
| Laudo | [1440×900](laudo-1440x900.png) | [390×844](laudo-390x844.png) |

## Limitações e pendências para apresentação

- Estados e observações ficam em memória e reiniciam ao recarregar. O laudo apresenta o cenário fixo e não é gerado a partir dos itens marcados ou de texto digitado.
- A foto do banheiro e a imagem da landing foram geradas; Sala e Cozinha continuam com placeholders identificados de evidência.
- A planta é um esquema sem escala. Os três blocos do laudo refluem conforme o conteúdo; não existe paginação de impressão ou arquivo PDF.
- Offline, negociação e confirmação são visuais. Não há captura, upload, envio de mensagens, banco, backend, autenticação, persistência, sincronização, ART ou assinatura real.
- Validar com o engenheiro a terminologia dos serviços, campos do pedido, checklist, categorias, organização das evidências, seções e linguagem do laudo. Registrar o retorno em `docs/FORMULARIO-FEEDBACK.md`.
- Não foram feitos commit ou push; nenhum requisito de produção foi implementado.
