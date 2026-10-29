# dr_vistoria — Protótipo de validação visual

Protótipo visual navegável para apresentação a um engenheiro, **não uma implementação da V1**. A finalidade é validar identidade visual, organização da navegação, fluxo de trabalho e apresentação de evidências técnicas.

## Telas previstas
1. Site institucional (landing page)
2. Dashboard administrativo
3. Solicitações e agenda (uma seção navegável)
4. Vistoria no celular: ambientes, checklist e constatações
5. Planta do imóvel com marcadores de ocorrências
6. Prévia de laudo técnico ilustrativo

## Executar
Abrir `prototype/index.html` em um navegador, sem build. Também é possível iniciar um servidor estático simples (ex.: `python3 -m http.server 8000` na raiz do projeto) e acessar `http://localhost:8000/prototype/`.

## Estado do protótipo
O Prompt 01 apresenta visualmente o site institucional, o dashboard e solicitações/agenda. O formulário, as abas e a confirmação pelo engenheiro são simulações locais; recarregar a página reinicia os estados. O Prompt 02 acrescenta ambientes, checklist, observações e constatações com evidências ilustrativas, além da planta esquemática com marcadores. Tudo permanece em memória. O Prompt 03 conclui a prévia HTML do laudo com capa, método, registros A/B/C, evidências e conclusão ilustrativa, além de áreas reservadas para ART e assinatura. O documento é fictício e sem validade técnica. A imagem da landing foi gerada para esta demonstração e não representa um imóvel real.

## Executar com Codex
Ler `AGENTS.md` e seguir, nesta ordem:
- `prompts/00_FUNDACAO.md`
- `prompts/01_SITE_E_PAINEL.md`
- `prompts/02_VISTORIA_E_PLANTA.md`
- `prompts/03_LAUDO_E_REVISAO.md`

Passe ao Codex o conteúdo integral de **um** prompt por vez. Analise o resultado antes de seguir.

## Documentação
- `docs/ESCOPO-PROTOTIPO.md`: o que será e não será demonstrado
- `docs/DESIGN-BRIEF.md`: linguagem visual
- `docs/CENARIO-DEMO.md`: dados e roteiro da apresentação
- `docs/CRITERIOS-ACEITE.md`: checklist de revisão
- `docs/FORMULARIO-FEEDBACK.md`: guia para colher retorno do engenheiro
- `docs/referencias/`: material original, preservado para a futura V1

## Nota
Todo o conteúdo é fictício. Não inserir dados pessoais reais, documentos técnicos verdadeiros ou imagens que exponham clientes. O protótipo não gera laudos oficiais nem mantém registros de vistorias.

## Roteiro para apresentação (5–8 minutos)
1. No site, conhecer os seis serviços e abrir **Simular solicitação**; visualizar o resumo local e fechar.
2. Pelo menu, abrir **Dashboard** e seguir para **Solicitações e agenda**.
3. Conferir os dois serviços, a preferência do cliente e a negociação representada. Simular a confirmação pelo engenheiro e abrir a aba da agenda.
4. Pelo menu, abrir **Vistoria mobile**, escolher Sala, Cozinha e Banheiro, marcar itens e abrir uma constatação. O botão de retorno leva à lista de ambientes.
5. Seguir para a planta e explorar os marcadores A/B/C ou os botões da lista textual.
6. Abrir a prévia do laudo pelo link ao fim da planta. Usar o índice para revisar capa, identificação e constatações.

## Limitações da demonstração
Não há backend, autenticação, banco, armazenamento persistente, câmera, upload, envio de mensagem, sincronização, PDF, ART emitida ou assinatura real/digital. O modo offline é somente visual. As fotos foram geradas para demonstração; Sala e Cozinha usam placeholders de evidência. A planta não tem escala. Datas, nomes e registros são fictícios. O laudo reutiliza os registros fixos de `data.js`; marcar checklist ou editar observações não produz um documento.

Para reiniciar o cenário, recarregue a página. O protótipo funciona com arquivos locais e não requer internet. Capturas e relatórios de revisão estão em `artifacts/prompt-03/`. A revisão final para apresentação depende do retorno do engenheiro em `docs/FORMULARIO-FEEDBACK.md`.
