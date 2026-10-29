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

## Extensão demonstrativa — Prompt 04
Na Vistoria, **Configurar checklist** permite alternar entre os modelos de entrega de imóvel e inspeção predial, incluir um item personalizado e ativar/desativar itens apenas na sessão. As respostas e observações ficam separadas por modelo. O modelo predial é um exemplo de configuração; não altera os serviços do pedido fictício.

O progresso geral e por ambiente considera somente itens ativos e avaliados. **Não avaliado**, **Em andamento** e **Concluído** indicam preenchimento, nunca conformidade técnica. Desativar um item retira-o do cálculo; reativar recupera sua resposta na sessão. **Restaurar cenário** reinicia modelos, respostas, observações, filtros, anotação e marcador temporário.

Na constatação A, **Original / Anotada** alterna uma sobreposição ilustrativa com descrição textual, preservando o arquivo da fotografia. Na planta, o filtro por ambiente mantém marcadores e lista textual equivalentes. O botão de marcador temporário inclui um único ponto D na Sala e oferece desfazer; adicioná-lo seleciona a Sala para deixá-lo visível. Nada disso modifica o laudo HTML: ele continua representando o cenário fixo A/B/C.

Não há editor de imagens, diagnóstico, captura, upload, armazenamento ou sincronização. Recarregar apaga as alterações. Capturas e verificações desta etapa estão em `artifacts/prompt-04/`; histórico, portal de cliente e novos estados de sincronização ficam fora desta etapa.

## Extensão demonstrativa — Prompt 05
Em **Solicitações e agenda → Clientes e imóveis**, a ficha distingue cliente, imóvel, solicitação, vistoria e documentos. Os botões **Ficha / Histórico / Documentos** alternam visualizações locais. O histórico usa datas fictícias: um atendimento anterior DEMO-H01 aparece separado do cenário atual DEMO-001; a proposta de agenda acompanha a confirmação visual pelo engenheiro.

A relação documental mostra **Prévia disponível** (laudo HTML fixo), **Não emitida** (referência à ART) e **Pendente · exemplo não disponível** (anexo complementar fictício). Somente a prévia HTML pode ser aberta; não existem downloads ou arquivos de ART/anexo. O laudo oferece retorno direto à ficha na seção Documentos.

**Prévia do acesso do cliente**, disponível na ficha/documentos e no laudo, abre um diálogo limitado ao Apartamento Modelo 302 e à Vistoria DEMO-001. **Voltar à visão administrativa** ou Escape fecha o diálogo e devolve o foco ao controle de origem. É possível abrir o laudo a partir dessa prévia e retornar à prévia ou à ficha.

Não há login, autorização, link público, token, envio, compartilhamento seguro, upload, download, documento real ou persistência. A prévia não representa segurança implementada. Todas as entidades e relações vêm de `data.js`; a confirmação e as seções são estados locais, reiniciados ao recarregar. Os modelos de checklist, anotação fotográfica, filtros e marcador temporário do Prompt 04 permanecem demonstrativos; o laudo não acompanha suas edições.

Capturas e relatório desta etapa: `artifacts/prompt-05/VERIFICACAO.md`. Validar com o engenheiro os campos da ficha, a leitura do histórico, os estados documentais e o conteúdo que faria sentido apresentar ao cliente. O Prompt 06 não faz parte desta entrega.
