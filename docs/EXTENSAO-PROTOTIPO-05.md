# Extensão do protótipo — Etapa 05: clientes, imóveis e entrega

## Natureza
Extensão **exclusivamente demonstrativa** do `dr_vistoria`. Não é V1, não autoriza backend, cadastro ou compartilhamento reais.

## Objetivo
Demonstrar, com dados fictícios, como o engenheiro consulta o histórico de um imóvel e como o cliente poderá receber os documentos de uma vistoria. Preservar a navegação principal em seis áreas, a interface de vistoria já aprovada e `prototype/typography.css`.

## Escopo autorizado
1. **Visão do cliente e imóvel** dentro de Solicitações e agenda, preferencialmente por uma aba "Clientes e imóveis" ou painel secundário, sem sétimo item obrigatório na navegação global.
2. **Ficha do imóvel** com identificação genérica, cliente vinculado, serviços e histórico cronológico ilustrativo de solicitações/vistorias.
3. **Histórico** com estados expressivos e datas claramente fictícias; distinguir solicitação, agendamento, vistoria e documento.
4. **Gestão documental ilustrativa**: laudo demonstrativo, ART não emitida e documento complementar fictício; distinguir disponível, pendente e não emitido.
5. **Visão do cliente** como modo de pré-visualização de entrega a partir do laudo/documentos; identificação explícita "prévia do acesso do cliente". O cliente visualiza somente o imóvel/vistoria fictícios do cenário.
6. **Navegação coerente** entre solicitação, ficha do imóvel, histórico, laudo e prévia do cliente. Modais ou abas são suficientes.

## Regras de domínio preservadas
- Cliente, imóvel, solicitação e vistoria são conceitos distintos.
- Uma solicitação pode conter vários serviços.
- Cliente sugere período; somente o engenheiro confirma o agendamento depois da negociação.
- A existência de ART/anexo não implica emissão, registro ou assinatura.
- O laudo existente é fixo e não responde a mudanças do checklist na sessão.

## Regras de dados e apresentação
- Dados fictícios centralizados em `prototype/data.js`; não inserir CPF, CREA, ART, endereços ou assinaturas reais.
- Reutilizar a solicitação DEMO-001 e o imóvel Apartamento Modelo 302. Acrescentar registros históricos fictícios apenas se identificados como demonstração, sem introduzir contradições com a agenda e o laudo.
- Não incluir botões que aparentem criar URLs seguras ou enviar arquivos. Ações podem alternar uma visualização, exibindo aviso "simulado; nada foi enviado".
- Documentos indisponíveis devem aparecer sem link de download funcional. Não simular autorização real.
- Preservar fotos originais; não copiar marca/visual do SIAPP.

## Fora do escopo
Login, links públicos reais, tokens, autorização real, integração WhatsApp, e-mail, upload/download, PDF exportável, edição da ART, assinatura digital, notificações, banco, IndexedDB, persistência e sincronização.

## Dependências
Somente os arquivos estáticos já existentes. Não adicionar frameworks, CDN ou bibliotecas remotas.
