# Escopo aprovado para o protótipo visual

## Finalidade
Apresentar conceito visual e navegação do `dr_vistoria` ao engenheiro para validar UX/UI e organização das informações. **Não é MVP, V1 ou produto para uso real**.

## Telas
1. **Site institucional**: cabeçalho, hero, apresentação do profissional (sem identidade real), serviços, processo de trabalho, CTA e rodapé. Cores e composição inspiradas em `assets/references/site-engenheiro.webp`, sem copiar marca, textos ou design literalmente.
2. **Dashboard**: visão administrativa com indicadores fictícios, próximas vistorias, últimas solicitações e navegação.
3. **Solicitações e agenda**: solicitação com dois serviços selecionados; registro de preferência do cliente; negociação via WhatsApp apenas representada; agendamento confirmado pelo engenheiro, não reservado automaticamente pelo cliente. Calendário ilustrativo.
4. **Execução da vistoria**: experiência mobile-first; ambientes do imóvel, checklist por categorias (estrutura/elétrica/hidráulica), observações e constatação com foto fictícia. Sinalização visível `Offline (simulado)` quando pertinente.
5. **Planta e constatações**: planta ilustrativa com 2–3 marcadores e painel mostrando localização, descrição, categoria e evidência. Marcadores podem ser interativos, sem integração real com arquivos.
6. **Prévia do laudo**: documento visual timbrado fictício, identificação, objetivos, metodologia, constatações, fotografias, conclusão ilustrativa, espaços para ART e assinatura (ambos placeholders).

## Interações mínimas
- Menu e botões navegam entre as telas.
- Tabs, filtros ou cartões podem alternar estados visuais de demonstração.
- Marcadores da planta exibem um painel/modal ilustrativo.
- CTA de solicitação abre formulário ilustrativo, sem enviar nada.
- Prévia do laudo é somente renderização HTML, sem PDF oficial.
- Recarregar a página pode reiniciar o cenário.

## Fora do escopo
Backend, NestJS, Prisma, PostgreSQL, autenticação real, cadastro persistente, pagamentos, envio de mensagens, integração WhatsApp, registro e upload efetivo de fotos, sincronização real, IndexedDB, armazenamento privado, geração de PDF, ART emitida, assinatura digital, PWA instalável, mapas reais, IA, painel multiengenheiro e testes de regras de negócio de produção.

## Decisões herdadas da conversa
- Um único engenheiro e seus clientes; não é SaaS multitenant.
- A solicitação pode incluir múltiplos serviços.
- O cliente manifesta interesse; engenheiro negocia e só então confirma a agenda.
- Cadastro de cliente, imóvel, solicitação e vistoria são conceitos distintos.
- Na futura V1 a operação offline é requisito central; nesta demo é apenas ilustrada.
- O benchmark SIAPP é inspiração para planta, evidências e constatações, NÃO fonte para copiar interfaces.

## Critério de corte
Não expandir o escopo para impressionar: seis telas visualmente coesas são mais valiosas que dezenas de páginas incompletas.
