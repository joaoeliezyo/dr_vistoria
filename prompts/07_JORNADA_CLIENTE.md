# PROMPT 07 — Jornada do cliente e alternância de perspectivas

## Leitura e inspeção
Leia `AGENTS.md`, `README.md`, `docs/ESCOPO-PROTOTIPO.md`, `docs/DESIGN-BRIEF.md`, `docs/EXTENSAO-PROTOTIPO-07.md`, `docs/ACEITE-PROMPT-07.md`, `docs/ROTEIRO-APRESENTACAO.md`, `docs/GUIA-VALIDACAO-ENGENHEIRO.md` e os relatórios mais recentes `artifacts/prompt-05/VERIFICACAO.md` e `artifacts/prompt-06/VERIFICACAO.md`. Inspecione a implementação real em `prototype/` antes de modificar. O escopo da Etapa 07 amplia de forma EXPLÍCITA o limite das seis áreas, mas não autoriza V1 nem mudança de stack.

## Objetivo
Demonstrar uma jornada cliente → engenheiro → cliente de ponta a ponta, em um único cenário fictício, com estados coerentes durante a mesma sessão. Reaproveite fluxos administrativos existentes em vez de criar um sistema paralelo.

## Implementação obrigatória
1. Preserve a sidebar e as seis rotas da administração; acrescente alternância perceptível de perspectiva Cliente/Engenheiro como controle de DEMONSTRAÇÃO. Crie uma experiência de cliente separada, com navegação simplificada, sem a sidebar administrativa.
2. Na página pública, reaproveite o formulário de interesse; se necessário acrescente campos ilustrativos mínimos, sem coletar dados reais. Mantenha seleção de múltiplos serviços, preferências como informação não vinculante e exibição clara de resumo. A ação explícita `Simular envio` atualiza apenas a sessão local e apresenta recibo/identificador `DEMO-001` com aviso de não envio.
3. Modele um estado compartilhado e mínimo da jornada. Não replique strings de status divergentes em handlers distintos; derive as duas perspectivas do mesmo estado. Aproveite o `appointmentConfirmed` existente e preserve o pedido com dois serviços, vínculos e histórico já usados.
4. Cliente acompanha `Pedido`, `Agendamento` e `Documentos`, com textos claros para recebido, em análise/negociação e aguardando confirmação. Somente ação do engenheiro confirma data/hora. Nenhum controle do cliente altera agenda ou libera documento.
5. Demonstre outras etapas do atendimento apenas com ações do apresentador/engenheiro rotuladas `Simular etapa`. Não vincular automaticamente ao preenchimento de checklist nem à fila fictícia do Prompt 06. Não afirmar que vistoria foi realizada ou laudo emitido de fato.
6. Reaproveite prévia de cliente e laudo; só há prévia HTML fixada para leitura. ART não emitida, anexo pendente; nada de links externos, downloads ou documentos reais.
7. Preserve `DEMO-H01` como histórico distinto, e a relação cliente/imóvel/solicitação/vistoria; mantenha `data.js` como fonte de dados fictícios. Fique atento à restauração e recarga, sem criar múltiplas entidades persistidas.
8. Mantenha `prototype/typography.css` intacto e prioridade mobile. Se necessário acrescente estilos no CSS existente, com seletores específicos para não provocar regressões.
9. Atualize README; crie `docs/ADENDO-ROTEIRO-CLIENTE.md` com roteiro reproduzível de 5–7 minutos e `docs/PERGUNTAS-VALIDACAO-CLIENTE.md` para feedback do engenheiro sobre a perspectiva do cliente. Mantenha intactos os documentos originais da Etapa 06.

## Testes
Use 1440×900 e 390×844. Faça roteiro ponta a ponta e regressão das seis áreas, com teclas Tab, Enter, Escape, foco, alternância, recarga, zero overflow horizontal e verificação de console/network. Gere capturas em `artifacts/prompt-07/` e `VERIFICACAO.md` com evidências verificáveis. Se não puder testar algo, descreva a limitação com precisão; não invente testes.

## Restrições de execução
Não implementar backend, storage, API, autenticação, conexão WhatsApp, geolocalização, notificações reais, upload, PDF, assinatura, ART ou sincronização. Todos os dados e estados são fictícios/locais. Não alterar `docs/referencias/`. Não avançar para V1, não realizar commit/push.

## Entrega
Apresente arquivos alterados, decisões de UX, roteiro demonstrável, resultados efetivos dos testes, capturas e pendências. Pare e aguarde revisão humana.
