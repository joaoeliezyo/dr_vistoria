# PROMPT 06 — Refinamento final e apresentação ao engenheiro

## 0. Leitura obrigatória
Antes de programar, leia integralmente:
- `AGENTS.md`
- `README.md`
- `docs/ESCOPO-PROTOTIPO.md`
- `docs/DESIGN-BRIEF.md`
- `docs/EXTENSAO-PROTOTIPO-06.md`
- `docs/ACEITE-PROMPT-06.md`
- `docs/CENARIO-DEMO.md`
- `docs/FORMULARIO-FEEDBACK.md`
- `artifacts/prompt-05/VERIFICACAO.md`

Inspecione o estado real de `prototype/`, especialmente `app.js`, `data.js`, `styles.css`, `typography.css` e `index.html`, antes de alterar. Se algum arquivo não existir, registre o fato e adapte com o menor impacto possível.

## 1. Objetivo
Finalizar uma apresentação visual navegável do `dr_vistoria`, acrescentando somente uma **simulação explícita de conectividade/sincronização** e aprimorando a consistência da experiência existente. Esta etapa NÃO implementa a V1.

## 2. Implementação demonstrativa
- Desenvolva o painel de status de conectividade na interface da vistoria, sem quebrar a navegação atual.
- Dê ao apresentador controles inequívocos para percorrer uma sequência simulada: sem conexão → pendências → sincronizando → concluído; também demonstrar falha e ação de tentar novamente.
- Exiba 2–4 registros fictícios na fila (por exemplo, checklist, observação, foto, constatação); estados e totais devem permanecer coerentes em todos os passos.
- Diferencie claramente: **avaliação concluída**, **itens pendentes de envio**, **resultado de simulação**. Nunca declarar que o laudo foi atualizado ou algum dado enviado de fato.
- Sinalize permanentemente que se trata de simulação, inclusive ao exibir a condição 'concluído'. Não detectar a rede do dispositivo nem depender de timers ou de chamadas externas.
- Preserve o comportamento de recuperação do cenário por recarga/restauração de exemplo.

## 3. Refinamento visual sem reescrita
- Preserve a tipografia aprovada e `#FF2C23`; não substitua a fonte nem reduza os tamanhos por conveniência.
- Faça correções pontuais se houver evidência de desalinhamento, microtexto, foco invisível, excesso de informação, contraste ou navegação confusa.
- Mantenha as seis áreas e os recursos implementados até Prompt 05.
- Melhore textos residuais/obsoletos e coerência do conteúdo sem criar novos requisitos funcionais.
- Evite alterar imagens existentes; não baixe recursos externos.

## 4. Documentação para a reunião
Produza `docs/ROTEIRO-APRESENTACAO.md`, com sequência de demonstração de 8–12 minutos, ações do apresentador, o que dizer sobre a proposta e perguntas objetivas de validação. Prepare `docs/GUIA-VALIDACAO-ENGENHEIRO.md`, cobrindo serviços, solicitações, negociação, agenda, cliente/imóvel, checklists, ocorrências, planta, evidências, offline, laudo, ART, assinatura e entrega. Diferencie 'aprovado pelo engenheiro', 'ajuste solicitado' e 'ainda não avaliado'.

## 5. Testes obrigatórios
- Reexecute o roteiro do usuário nas seis áreas, incluindo as funcionalidades adicionais dos Prompts 04/05.
- Teste cada transição simulada de conectividade, fila, falha, repetição, restauração/reload.
- Verifique que `scrollWidth <= innerWidth` em viewport real 1440×900 e 390×844, incluindo os estados da simulação e diálogos.
- Teste Tab/Shift+Tab/Enter/Escape quando aplicável, foco visível, nomes acessíveis, controles >=44px na experiência mobile; ajuste sem prejudicar layout.
- Garanta console sem exceções, ausência de requisições HTTP(S) externas e não uso de armazenamento, detecção de rede ou serviços reais.
- Salve capturas dos estados-chave em `artifacts/prompt-06/`; faça relatório honesto em `artifacts/prompt-06/VERIFICACAO.md` com passos, medições e limitações. Não declare teste executado sem tê-lo feito.

## 6. Restrições
Sem backend, banco, autenticação, storage, câmera, integração WhatsApp, sincronização real, IndexedDB, localStorage, Service Worker, PDF real, ART emitida, assinatura digital, instalação PWA, edição técnica automática de laudo. Sem novas dependências. Não modificar arquivos originais em `docs/referencias/`. Não executar Git commit ou push.

## 7. Conclusão e parada
Atualize `README.md` com a etapa 06 e os limites da demonstração. Mostre arquivos alterados, testes, screenshots, pendências para validação física e retorno do engenheiro. **PARE ao concluir o Prompt 06. Não iniciar V1 e não avançar a outra etapa.**
