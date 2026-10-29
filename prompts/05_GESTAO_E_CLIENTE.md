# PROMPT 05 — Gestão ilustrativa de clientes/imóveis e entrega documental

## Antes de implementar
Leia integralmente `AGENTS.md`, `README.md`, `docs/ESCOPO-PROTOTIPO.md`, `docs/DESIGN-BRIEF.md`, `docs/EXTENSAO-PROTOTIPO.md` (se existir), `docs/EXTENSAO-PROTOTIPO-05.md`, `docs/ACEITE-PROMPT-05.md` e examine a implementação de `prototype/`. Consulte `docs/referencias/` apenas para manter a coerência de regras do produto. Não implemente requisitos da V1 por conta própria.

## Objetivo
Ampliar a apresentação visual do `dr_vistoria` com uma narrativa consistente sobre **quem contratou, qual imóvel será vistoriado, o histórico de atendimentos e como o cliente verá os documentos**. Continue sem backend e sem novas dependências externas.

## Implementação
1. Mantenha **seis áreas** no menu principal. Dentro de `Solicitações e agenda`, acrescente acesso claro à ficha de cliente/imóvel (aba, cartão ou painel). Não reestruture a navegação existente sem motivo.
2. Modele em `data.js` entidades demonstrativas separadas (`client`, `property`, `request`, `inspection`, `document` ou estruturas equivalentes) usando nomes e identificadores fictícios. Reuse `DEMO-001`, Apartamento Modelo 302, os dois serviços e as constatações A/B/C; evite duplicação e divergência de dados.
3. Crie ficha de cliente/imóvel com localização genérica, tipo do imóvel, relação com solicitação e vistoria, cartões de status e histórico cronológico. Os eventos históricos precisam ser claramente simulados; mantenha a lógica de agendamento dependente de confirmação pelo engenheiro.
4. Apresente uma relação de documentos: laudo HTML demonstrativo existente, referência à ART ainda não emitida e anexo complementar fictício. Cada item deve declarar seu estado textual (ex.: "Prévia", "Não emitido", "Exemplo não disponível"). Nenhum botão pode alegar baixar PDF real ou acessar ART real.
5. Acrescente um modo/painel **Prévia do acesso do cliente**, mostrando somente documentos fictícios da vistoria selecionada, com explicação de que autenticação, autorização e compartilhamento seguro serão implementados apenas na V1. O controle deve voltar claramente ao contexto administrativo.
6. Conecte a ficha à prévia do laudo existente por navegação visual. Preserve os avisos "EXEMPLO SEM VALIDADE TÉCNICA". Não converta o laudo em gerador dinâmico nem afirme que ele reflete edições de checklist.
7. Ajuste copy, espaçamentos e semântica conforme necessário, respeitando a folha `prototype/typography.css` e a cor `#FF2C23`. Não substituir arquivos ilustrativos já aprovados.

## Restrições inegociáveis
- Não criar backend, banco, autenticação, tokens ou links reais, operações de rede, upload, download, geração de PDF, assinatura ou ART.
- Não usar dados pessoais reais nem simular segurança efetiva.
- Não introduzir novas páginas de produção, integrações, infraestrutura ou dependências.
- Não alterar o funcionamento de modelos/checklists, foto anotada, filtros da planta e marcadores do Prompt 04.
- Não alterar `docs/referencias/` nem remover ressalvas de natureza demonstrativa.

## Verificação obrigatória
Siga integralmente `docs/ACEITE-PROMPT-05.md`. Teste em 1440×900 e 390×844 reais; fluxos novos, teclado, foco e regressão das seis áreas. Gere capturas em `artifacts/prompt-05/` e relatório `VERIFICACAO.md`. Atualize README. Se algum requisito falhar, corrija antes de encerrar; relate limitações honestamente.

## Entrega
Informe arquivos alterados, interações, testes realizados, capturas, riscos/limites e pontos a validar com o engenheiro. **Pare após o Prompt 05. Não implemente Prompt 06, não faça commit ou push.**
