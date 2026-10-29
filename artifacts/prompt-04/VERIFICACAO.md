# Verificação — Prompt 04

Execução do operador em 29/10/2026, com Chrome headless, emulação explícita por DevTools Protocol e escala 1. A viewport mobile foi efetivamente 390×844, não a largura mínima da janela desktop.

## Alterações e limites de escopo

- Modelos de checklist por serviço em `data.js`: entrega e inspeção predial. Configurações clonadas em memória; respostas e observações isoladas por serviço.
- Progresso por ambiente e geral usa apenas itens ativos e avaliados. Estados Não avaliado, Em andamento e Concluído se referem ao preenchimento; não à conformidade técnica.
- Inclusão de item de exemplo, desativação/reativação e restauração do cenário. Desativar exclui o item do denominador sem apagar sua resposta na sessão.
- Foto Original/Anotada em vistoria e planta por SVG sobreposto, com descrição textual equivalente. A foto base não foi editada; o laudo mantém a fotografia sem controles de anotação.
- Filtro de ambiente sincroniza marcadores, lista e painel. A contagem avisa quais registros foram ocultos. Adicionar D seleciona Sala para garantir que o ponto temporário fique visível; desfazer remove o ponto.
- Laudo continua fixo A/B/C, com aviso explícito de que alterações da sessão não o atualizam.

## Testes efetivamente executados

- [x] Roteiro por links e controles: landing → dashboard → solicitação com dois serviços → agenda/confirmar pelo engenheiro → vistoria → planta → laudo.
- [x] Regressão: formulário de interesse, resumo local, menu mobile, abas da agenda, confirmação e indicador do painel; índice e foco do laudo.
- [x] Sala, Cozinha e Banheiro: seleção, checkbox, observação, constatação e retorno à lista.
- [x] Progresso: 0/9 Não avaliado; primeiro item leva a Em andamento; cada ambiente chega a 3/3 Concluído; geral 9/9.
- [x] Inclusão de quarto item no modelo de entrega: geral muda de 9/9 para 9/12 e ambientes para 3/4 Em andamento. Desativar o item retorna a 9/9.
- [x] Troca para inspeção predial: três itens próprios, respostas 0/9. Voltar a entrega recupera avaliações e item personalizado desativado.
- [x] Foto: Original → Anotada → Original; aria-pressed, visibilidade da sobreposição e descrição textual; mesma URL da foto local.
- [x] Tecla Tab entre controles da foto; Enter ativa marcador C e mantém foco visível após renderização.
- [x] Marcadores A/B/C e lista equivalente; filtro Todos/Sala/Cozinha/Banheiro, quantidades sincronizadas e painel correspondente.
- [x] Ativação real do marcador B por mouse no desktop e por evento de toque na emulação mobile; demais seleções e lista testadas por click.
- [x] Marcador D temporário: inclusão, filtro Sala, identificação no painel e remoção por desfazer.
- [x] Restaurar cenário: progresso volta a 0/9. Item adicionado antes de recarregar desaparece após recarga; configurações retornam aos três itens base.
- [x] Altura dos botões e selects visíveis da área de campo >=44 px nos estados capturados; checkboxes têm labels amplos. Labels, descrição da foto e foco revisados.
- [x] Emulação de prefers-reduced-motion: reduce, com transição do menu reduzida; navegação de seções respeita a preferência.
- [x] Capturas desktop/mobile revisadas: inicial, configuração, anotação e planta. Letra do marcador D selecionado e região de destaque da foto ajustadas após revisão.
- [x] Um h1 por área e três registros no laudo, consistentes com `data.js`.

## Resultado medido

| Áreas | scrollWidth / innerWidth desktop | scrollWidth / innerWidth mobile |
|---|---|---|
| Site, painel, solicitações, vistoria, planta e laudo | 1425 / 1440 | 390 / 390 |

Os estados adicionais capturados também passaram em `document.documentElement.scrollWidth <= window.innerWidth`. A diferença desktop de 15 px é a barra vertical.

- Exceções JavaScript e mensagens console.error capturadas: **0**.
- Requisições HTTP(S) externas observadas com Network.requestWillBeSent: **0**.
- `git diff --check`: sem erros.
- Nenhuma regressão funcional detectada no roteiro testado.

## Integridade

`prototype/typography.css` e sua inclusão em `index.html` já estavam presentes ao iniciar esta etapa. Não foram alterados. Novos conteúdos essenciais usam 14–16 px, com a família herdada da folha aprovada.

SHA-256 da folha tipográfica, preservado: `6aaac0f308e6c944eb04408f6ec3f9a9bce0029bc967b9f099de0a84ac25b8e0`.

SHA-256 da foto, igual antes/depois: `9afd48fed4087bac5e054d21498bd15ffcde57ec7c32e66bff263f4fdd154f44`.

## Capturas

PNGs de página inteira: a resolução no nome indica a viewport de teste; a altura da imagem acompanha o conteúdo. Os focos visíveis refletem a última interação executada.

| Estado | Desktop | Mobile |
| Landing | [1440×900](site-1440x900.png) | [390×844](site-390x844.png) |
| Dashboard | [1440×900](painel-1440x900.png) | [390×844](painel-390x844.png) |
| Pedido | [1440×900](solicitacoes-1440x900.png) | [390×844](solicitacoes-390x844.png) |
| Vistoria inicial | [1440×900](vistoria-inicial-1440x900.png) | [390×844](vistoria-inicial-390x844.png) |
| Configuração e item incluído | [1440×900](configuracao-item-1440x900.png) | [390×844](configuracao-item-390x844.png) |
| Modelo predial | [1440×900](modelo-predial-1440x900.png) | [390×844](modelo-predial-390x844.png) |
| Banheiro expandido | [1440×900](banheiro-1440x900.png) | [390×844](banheiro-390x844.png) |
| Foto anotada | [1440×900](banheiro-anotado-1440x900.png) | [390×844](banheiro-anotado-390x844.png) |
| Planta / todos | [1440×900](planta-todos-1440x900.png) | [390×844](planta-todos-390x844.png) |
| Planta / banheiro | [1440×900](planta-filtrada-1440x900.png) | [390×844](planta-filtrada-390x844.png) |
| Planta / temporário | [1440×900](planta-temporaria-1440x900.png) | [390×844](planta-temporaria-390x844.png) |
| Laudo fixo | [1440×900](laudo-1440x900.png) | [390×844](laudo-390x844.png) |

## Limitações e pendências

- Apenas memória; não há backend, armazenamento, câmera, upload, serviço externo, diagnóstico, medição ou sincronização.
- Incluir item é uma edição simples de nome/categoria, sem editor de modelos completo. Só existe um marcador extra D em posição fixa, sem arraste ou coordenadas reais.
- Concluir avaliações não elimina as constatações fictícias. O laudo não reflete respostas, observações, modelos ou marcadores editados.
- Sala e Cozinha continuam com placeholders honestos de evidência; a planta continua sem escala.
- A emulação inclui toque e teclado, mas não substitui teste em aparelho físico ou leitor de tela. Validar termos, itens dos modelos e clareza do progresso com o engenheiro.
- Histórico/portal e novos estados de sincronização não foram implementados. Nenhuma execução dos Prompts 05/06, commit ou push.
