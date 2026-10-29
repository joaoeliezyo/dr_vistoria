# Extensão do protótipo — Etapa 06: apresentação final

## Natureza e objetivo
Esta etapa encerra o protótipo visual navegável do `dr_vistoria`. Seu objetivo é demonstrar o comportamento previsto em vistoria sem Internet, dar transparência aos estados de sincronização e preparar a validação do conceito com um engenheiro. **Não é a V1, não é um aplicativo offline funcional e não deve prometer retenção ou envio real de dados.**

## Referências e hierarquia
1. `AGENTS.md`, `docs/ESCOPO-PROTOTIPO.md` e `docs/DESIGN-BRIEF.md` estabelecem os limites da demonstração.
2. Os Prompts 00–05 e as telas existentes são a implementação-base e não devem sofrer regressões.
3. Este arquivo e `docs/ACEITE-PROMPT-06.md` especificam apenas a extensão demonstrativa final.
4. O material em `docs/referencias/` serve de contexto da futura V1, sem autorização de implementação.

## Experiência visual a apresentar
### A. Estados offline/sincronização (simulados)
Na área de vistoria, criar um painel discreto, claro e acessível com modo **Demonstração de conectividade**. O usuário pode escolher estados ilustrativos: `Conectado`, `Sem conexão`, `Sincronizando` e `Pendências / erro` (ou equivalentes consistentes). Sempre indicar `SIMULAÇÃO — nenhum dado está sendo enviado`. Exibir uma fila fictícia de 2–4 itens: checklist, observação, fotografia e/ou constatação, com estados e contagens coerentes. Não consultar `navigator.onLine`, não criar Service Worker, IndexedDB, `localStorage`, filas reais nem usar requisições HTTP.

Permitir avançar voluntariamente pelo roteiro `sem conexão → itens pendentes → reconectado/sincronizando → concluído` e demonstrar um erro recuperável. A transição deve resultar de ação explícita do apresentador (cliques), não de temporizadores ou eventos reais de rede. Não simular sincronização verdadeira, nem marcar a vistoria como efetivamente enviada. Separar visualmente o **progresso de avaliação** do **estado de envio**. O texto deve continuar legível em 390×844 sem ampliar excessivamente a página.

### B. Roteiro de ponta a ponta
O roteiro precisa cobrir: landing; pedido com múltiplos serviços e preferência (sem reserva); análise e confirmação pelo engenheiro; ficha cliente/imóvel/histórico; vistoria com modelos, progresso e evidência; planta com marcadores e anotação; simulação de conectividade; laudo fixo; documentos e prévia do cliente. Deve especificar exatamente o que é simulado e as perguntas de validação para o engenheiro.

### C. Polimento visual e semântico
Preservar `prototype/typography.css` e a identidade existente, inclusive `#FF2C23`. Corrigir problemas comprovados de alinhamento, contraste, foco, hierarquia, rótulos, indicadores, espaçamento e reflow sem redesenhar o site inteiro. Atualizar referências obsoletas no README, navegação lateral e textos descritivos quando comprovadas. Verificar consistência entre nomes, serviços, datas, imóveis e documentos apresentados. O laudo continua fixo em HTML, sem alteração automática a partir do checklist.

## Fora do escopo
Não implementar API, banco, autenticação, upload, câmera, armazenamento, PWA instalável, detecção real de rede, background sync, geração PDF, ART, assinatura, envio de mensagens, portal acessível publicamente ou tokens. Não criar dependências nem baixar imagens/fontes remotas. Não incorporar recursos adicionais do SIAPP.

## Artefatos finais esperados
- Painel demonstrativo de conectividade integrado à Vistoria.
- `docs/ROTEIRO-APRESENTACAO.md` com sequência de 8–12 minutos, ações e falas recomendadas, pontos de atenção e perguntas de feedback.
- `docs/GUIA-VALIDACAO-ENGENHEIRO.md` com itens a validar: serviços, formulário, agenda, checklist, constatações, fotos, planta, conteúdo de laudo, ART, documentos e entrega; distinguir validação do conceito de validação técnica.
- `artifacts/prompt-06/VERIFICACAO.md`, screenshots desktop/mobile e registro de limitações.
- README atualizado com uma forma clara de executar o protótipo e as limitações.
