# Extensão de escopo demonstrativo — Etapa 07: Jornada do cliente

## Finalidade
Exibir, em uma mesma sessão local, as perspectivas do cliente e do engenheiro sobre um único atendimento fictício `DEMO-001`. Esta é uma ampliação visual do protótipo, não um portal funcional, autenticação, sistema de mensagens, cotação ou fluxo comercial real.

## Princípios inegociáveis
- Preservar os seis módulos administrativos e as funcionalidades das etapas 00–06.
- Manter `prototype/typography.css` e fonte/escala aprovadas; não introduzir CDN ou dependências.
- Usar HTML, CSS e JS puros, `data.js` para dados fictícios, e estado em memória, reiniciado com recarga.
- Diferenciar com clareza **perspectiva demonstrativa** de autorização de acesso. Nunca sugerir que alternar Cliente/Engenheiro é controle de acesso real.
- Não implementar API, WhatsApp, autenticação, pagamento, token, compartilhamento, push, PDF ou documentos reais.
- O cliente nunca confirma um compromisso nem muda status interno do trabalho.

## Experiência proposta
Criar seletor de **Visão do cliente / Visão do engenheiro** ou entrada equivalente evidente. A visão do cliente deve ser uma experiência própria, simplificada, com navegação contextual (Início, Minha solicitação, Atendimento, Documentos), sem sidebar administrativa nem acesso às ferramentas da vistoria. Voltar à visão do engenheiro deve ser claro e identificado como função exclusiva da demonstração.

## Fluxo do cliente
1. Conhece os seis serviços no site e seleciona dois serviços para solicitar orçamento.
2. Preenche campos fictícios do imóvel, identificação e preferência de período. A ação `Simular envio` altera somente estado local e informa explicitamente que nada foi enviado.
3. Vê recibo visual da solicitação `DEMO-001` (não comprovante real) e acompanha estados de atendimento em linguagem acessível.
4. O engenheiro, na sua visão administrativa, examina o mesmo pedido fictício, representa negociação e confirma agendamento por ação já existente.
5. De volta à visão do cliente, o agendamento aparece somente após a confirmação pelo engenheiro. Antes disso, aparece `Aguardando confirmação`; preferência não é reserva.
6. Progresso da prestação do serviço e preparação documental são etapas de **histórico demonstrativo** controladas por ações próprias do apresentador, sem serem deduzidas automaticamente de checklist ou fila offline.
7. Visualiza a prévia HTML fixa do laudo e estados dos demais documentos: ART não emitida e anexo pendente. Não há download, compartilhamento ou portal seguro.

## Coerência de estado
- Empregar um modelo de estado único do cenário em memória; duas perspectivas derivam desse mesmo estado, e não de duplicações divergentes.
- Preservar o cenário inicial das etapas anteriores: `DEMO-001` e vínculos cliente/imóvel/serviços. O formulário não deve criar múltiplas solicitações reais; pode atualizar ou reiniciar somente a simulação de `DEMO-001` mediante indicação clara.
- Se a solicitação ainda não tiver sido simulada, a visão do cliente pode mostrar cenário de exemplo pré-carregado, distinguindo-o de `Solicitação simulada nesta sessão`. Não gerar recibo fictício automaticamente como se o usuário tivesse enviado.
- A ação do engenheiro sobre a agenda atualiza os dois lados, sem confirmação pelo cliente.
- Histórico anterior `DEMO-H01` permanece distinto do atendimento atual.
- Os estados documentais não devem afirmar emissão ou disponibilização segura. Somente abrir a prévia local do laudo.
- `Restaurar cenário` e recarga devem ter comportamento consistente e documentado; a restauração geral reinicia também a jornada do cliente sem efeitos colaterais indesejados.
- A fila de sincronização da Etapa 06 nunca altera automaticamente o atendimento do cliente nem a liberação dos documentos.

## Não fazer
Não acrescentar sétimo item à sidebar do engenheiro; não criar chat fictício que pareça ter mensagens reais; não exibir valores de orçamento como verdadeiros; não alegar que pedido ou documento foi entregue; não misturar dados exclusivos da administração na visão do cliente.

## Entregas
Protótipo atualizado, README com roteiro de uso, capturas e relatório em `artifacts/prompt-07/`, e breve adendo ao roteiro e ao guia de validação em arquivos próprios, sem substituir os registros anteriores.
