# Verificação — Prompt 05

Execução em 29/10/2026 com Chrome headless, DevTools Protocol e emulação explícita de 1440×900 e 390×844 (escala 1). Somente dados fictícios e arquivos locais. O resultado abaixo descreve a rodada final executada, não uma certificação de produto.

## Alterações

- Aba Clientes e imóveis em Solicitações e agenda, com Ficha, Histórico e Documentos. A navegação global continua com seis áreas e os mesmos IDs de rota.
- Entidades client/property/request/inspection/documents em `data.js`, derivadas do cenário existente. Serviços reutilizam o mesmo array do pedido aprovado; imóvel referencia cliente, vistoria referencia imóvel e solicitação.
- Ficha diferencia cliente, imóvel, pedido, vistoria e documentos. Quatro eventos cronológicos fictícios; DEMO-H01 é um atendimento anterior distinto do DEMO-001. A proposta de agenda só aparece confirmada após a ação demonstrativa do engenheiro.
- Documento HTML em prévia, ART não emitida e anexo pendente/indisponível, com estados textuais. Somente o laudo tem link de leitura HTML, sem download.
- Diálogo Prévia do acesso do cliente limitado ao Apartamento Modelo 302 e à Vistoria DEMO-001; nada enviado ou compartilhado. Fechamento por botão/Escape e foco devolvido ao controle de origem.
- Do documento, retorno à Ficha / Documentos ou à prévia do cliente; avisos de cenário fixo e sem validade técnica preservados.
- README atualizado. Nenhuma edição nos originais de referência ou execução do Prompt 06.

## Testes novos efetivamente executados nas duas resoluções

- [x] Acesso à terceira aba; quatro cartões de entidades e vínculos derivados conferidos.
- [x] Ficha e navegação Ficha/Histórico/Documentos, com foco no controle correspondente.
- [x] Histórico com quatro eventos: 10, 15, 16 e 18 de junho, todos identificados como fictícios. Registro anterior DEMO-H01 separado do atual.
- [x] Estado inicial de agenda aguardando confirmação; confirmar no pedido e retornar ao histórico mostra confirmação pelo engenheiro, sem reserva automática.
- [x] Três documentos e um único link HTML; estados Não emitida e Pendente explícitos, sem link nos documentos indisponíveis.
- [x] Abrir diálogo pela ficha/documentos e pelo laudo; contexto único do imóvel/vistoria e três documentos conferidos.
- [x] Abrir laudo pelos documentos administrativos e retornar à ficha na seção Documentos.
- [x] Abrir laudo pela prévia do cliente, retornar à prévia, fechar e recuperar o contexto administrativo; retorno à ficha também conferido.
- [x] ArrowLeft e End entre as três abas, com aria-selected/painel/foco coerentes; Enter abre a prévia pelo teclado; Escape e botão fecham o diálogo e devolvem foco.
- [x] Botões e links visíveis da ficha e da prévia com altura >=44 px. Estados comunicados por texto e foco visível nas capturas.
- [x] Recarga reinicia confirmação e aba do pedido; diálogo não permanece aberto.
- [x] Capturas de ficha, histórico, documentos e prévia revisadas em desktop/mobile, sem texto essencial recortado.

## Regressão dos Prompts 00–04

- [x] Seis rotas, um h1 por área e navegação global preservados.
- [x] Landing com seis serviços, formulário/resumo local e fechamento.
- [x] Dashboard → pedido com dois serviços → confirmação pelo engenheiro → agenda.
- [x] Sala/Cozinha/Banheiro: checklist, observações, abertura da constatação e retorno à lista.
- [x] Estados Não avaliado → Em andamento → Concluído; progresso geral 0/9 → 9/9, sem associação com conformidade.
- [x] Inclusão de item: 9/12; desativação retorna a 9/9. Troca para predial usa itens/respostas separados; retorno recupera o modelo anterior.
- [x] Original/Anotada/Original com mesma fotografia; descrição equivalente e aria-pressed.
- [x] Filtros Todos/Sala/Cozinha/Banheiro, marcadores A/B/C e lista sincronizados. Mouse no desktop, toque emulado no mobile e Enter em marcador.
- [x] Marcador temporário D: inclusão, identificação e desfazer. Restaurar cenário e recarregar eliminam alterações locais.
- [x] Menu mobile e foco; índice e três registros A/B/C do laudo fixo; prefers-reduced-motion emulado.
- [x] Roteiro por links/controles: landing → painel → pedido/agenda → vistoria → planta → laudo.

## Medições e registros

| Área | scrollWidth / innerWidth em 1440×900 | scrollWidth / innerWidth em 390×844 |
|---|---|---|
| Landing | 1425 / 1440 | 390 / 390 |
| Dashboard | 1425 / 1440 | 390 / 390 |
| Solicitações | 1425 / 1440 | 390 / 390 |
| Vistoria | 1425 / 1440 | 390 / 390 |
| Planta | 1425 / 1440 | 390 / 390 |
| Laudo | 1425 / 1440 | 390 / 390 |

Todos os estados novos capturados passaram em `document.documentElement.scrollWidth <= window.innerWidth`; o diálogo também passou em scrollWidth <= clientWidth. A diferença desktop corresponde à barra vertical.

- Exceções JavaScript e console.error capturados: **0**.
- Requisições HTTP(S) externas observadas: **0** (Network.requestWillBeSent).
- `git diff --check`: sem erros.
- Nenhuma regressão funcional detectada no roteiro executado.

## Preservação

O bloco `fieldState` até `renderReport` (modelos, checklist, anotação, planta/filtros/marcadores do Prompt 04) tem o mesmo SHA-256 antes/depois: `916f4c693bfe280e4e743d279f15523a5ec374d54c4687541ff8c741b830d4ca`.

`typography.css` preservado: `6aaac0f308e6c944eb04408f6ec3f9a9bce0029bc967b9f099de0a84ac25b8e0`. Fotos e index.html não foram alterados. Os conteúdos essenciais novos usam 14–15 px ou mais, com a família tipográfica herdada.

As alterações pré-existentes em COMO_APLICAR.md e os documentos/prompts fornecidos pelo usuário foram preservados.

## Capturas

42 PNGs: estados novos e regressão, nas duas viewports. Capturas de página inteira têm altura variável; as do diálogo registram a viewport visível e incluem uma segunda captura após rolar os documentos. Focos visíveis correspondem às ações executadas.

| Estado novo | Desktop | Mobile |
| Ficha | [1440×900](ficha-1440x900.png) | [390×844](ficha-390x844.png) |
| Histórico / proposta | [1440×900](historico-proposta-1440x900.png) | [390×844](historico-proposta-390x844.png) |
| Histórico / confirmado | [1440×900](historico-confirmado-1440x900.png) | [390×844](historico-confirmado-390x844.png) |
| Documentos | [1440×900](documentos-1440x900.png) | [390×844](documentos-390x844.png) |
| Prévia do cliente | [1440×900](previa-cliente-1440x900.png) | [390×844](previa-cliente-390x844.png) |
| Prévia / documentos abaixo | [1440×900](previa-cliente-documentos-1440x900.png) | [390×844](previa-cliente-documentos-390x844.png) |
| Laudo vindo da prévia | [1440×900](laudo-contexto-cliente-1440x900.png) | [390×844](laudo-contexto-cliente-390x844.png) |

| Regressão | Desktop | Mobile |
|---|---|---|
| site | [1440×900](site-1440x900.png) | [390×844](site-390x844.png) |
| painel | [1440×900](painel-1440x900.png) | [390×844](painel-390x844.png) |
| solicitacoes | [1440×900](solicitacoes-1440x900.png) | [390×844](solicitacoes-390x844.png) |
| vistoria | [1440×900](vistoria-1440x900.png) | [390×844](vistoria-390x844.png) |
| vistoria-inicial | [1440×900](vistoria-inicial-1440x900.png) | [390×844](vistoria-inicial-390x844.png) |
| configuracao-item | [1440×900](configuracao-item-1440x900.png) | [390×844](configuracao-item-390x844.png) |
| modelo-predial | [1440×900](modelo-predial-1440x900.png) | [390×844](modelo-predial-390x844.png) |
| banheiro | [1440×900](banheiro-1440x900.png) | [390×844](banheiro-390x844.png) |
| banheiro-anotado | [1440×900](banheiro-anotado-1440x900.png) | [390×844](banheiro-anotado-390x844.png) |
| planta | [1440×900](planta-1440x900.png) | [390×844](planta-390x844.png) |
| planta-todos | [1440×900](planta-todos-1440x900.png) | [390×844](planta-todos-390x844.png) |
| planta-filtrada | [1440×900](planta-filtrada-1440x900.png) | [390×844](planta-filtrada-390x844.png) |
| planta-temporaria | [1440×900](planta-temporaria-1440x900.png) | [390×844](planta-temporaria-390x844.png) |
| laudo | [1440×900](laudo-1440x900.png) | [390×844](laudo-390x844.png) |

## Limitações e validação pendente

- Um único cliente/imóvel e uma vistoria selecionada, com um registro histórico anterior ilustrativo. Não há cadastro, seleção de múltiplos clientes ou filtragem de permissões real.
- Estados e contexto ficam somente em memória. Nenhum envio, autenticação, token, link público, autorização, upload/download, documento real ou persistência.
- Laudo HTML fixo A/B/C; não acompanha checklist, observações ou marcador temporário. ART/anexo são indisponíveis, sem arquivo.
- Testes no Chrome com emulação; ainda falta validação em aparelho físico, leitor de tela e outros navegadores.
- Validar com o engenheiro os campos da ficha, termos e datas do histórico, distinção entre estados documentais e o conteúdo que faria sentido mostrar ao cliente. Registrar feedback antes de qualquer etapa seguinte.
- Sem Prompt 06, commit ou push.
