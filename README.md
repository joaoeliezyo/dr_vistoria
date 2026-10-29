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
- `prompts/04_VISTORIA_AVANCADA.md`
- `prompts/05_GESTAO_E_CLIENTE.md`
- `prompts/06_REFINAMENTO_APRESENTACAO.md`
- `prompts/07_JORNADA_CLIENTE.md`

Passe ao Codex o conteúdo integral de **um** prompt por vez. Analise o resultado antes de seguir.

## Documentação
- `docs/ESCOPO-PROTOTIPO.md`: o que será e não será demonstrado
- `docs/DESIGN-BRIEF.md`: linguagem visual
- `docs/CENARIO-DEMO.md`: dados e roteiro da apresentação
- `docs/CRITERIOS-ACEITE.md`: checklist de revisão
- `docs/FORMULARIO-FEEDBACK.md`: formulário de retorno
- `docs/ROTEIRO-APRESENTACAO.md`: roteiro final de 8–12 minutos
- `docs/GUIA-VALIDACAO-ENGENHEIRO.md`: decisões do conceito e limites da validação
- `docs/referencias/`: material original, preservado para a futura V1

## Nota
Todo o conteúdo é fictício. Não inserir dados pessoais reais, documentos técnicos verdadeiros ou imagens que exponham clientes. O protótipo não gera laudos oficiais nem mantém registros de vistorias.

## Roteiro para apresentação (8–12 minutos)
Siga `docs/ROTEIRO-APRESENTACAO.md`: landing → pedido com dois serviços → confirmação pelo engenheiro → ficha/histórico → modelos e evidência → planta → conectividade simulada → laudo fixo → documentos e prévia do cliente. Registre as decisões no `docs/GUIA-VALIDACAO-ENGENHEIRO.md` e no formulário de feedback.

## Limitações da demonstração
Não há backend, autenticação, banco, armazenamento persistente, câmera, upload, envio de mensagem, sincronização, PDF, ART emitida ou assinatura real/digital. O modo offline é somente visual. As fotos foram geradas para demonstração; Sala e Cozinha usam placeholders de evidência. A planta não tem escala. Datas, nomes e registros são fictícios. O laudo reutiliza os registros fixos de `data.js`; marcar checklist ou editar observações não produz um documento.

Para reiniciar o cenário, recarregue a página. O protótipo funciona com arquivos locais e não requer internet. Capturas e relatório finais estão em `artifacts/prompt-06/VERIFICACAO.md`; evidências das etapas anteriores foram preservadas. A revisão final para apresentação depende do retorno do engenheiro em `docs/FORMULARIO-FEEDBACK.md`.

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

Capturas e relatório desta etapa: `artifacts/prompt-05/VERIFICACAO.md`. Validar com o engenheiro os campos da ficha, a leitura do histórico, os estados documentais e o conteúdo que faria sentido apresentar ao cliente. Esta etapa foi concluída antes do refinamento final do Prompt 06.

## Apresentação final — Prompt 06
Na Vistoria, o painel **Demonstração de conectividade** começa recolhido e em **Sem conexão (simulado)**. Abra **Explorar fila fictícia · 4 exemplos**. O seletor escolhe qualquer estado ilustrativo; o botão principal percorre sem conexão → quatro pendências → sincronizando → concluído. Em sincronizando, **Demonstrar falha na fotografia** mostra um erro e três pendências; **Tentar novamente (simulação)** retorna à sincronização visual. Cada transição exige um clique, sem detecção de rede ou temporizadores.

O aviso **SIMULAÇÃO — nenhum dado está sendo enviado** permanece visível, inclusive na conclusão. A fila usa quatro exemplos fixos, independentes dos itens avaliados e das observações digitadas. Não existe retenção offline, armazenamento, envio real ou atualização de laudo, ART ou documentos. Concluir a simulação não conclui a avaliação nem declara conformidade técnica.

**Restaurar conectividade simulada** reinicia somente o painel, sem apagar avaliações; **Restaurar cenário** reinicia toda a demonstração de campo e recolhe o painel. Recarregar reinicia todos os estados. O protótipo continua em HTML/CSS/JS local, sem build ou dependências de rede; abra `prototype/index.html` ou use o servidor estático opcional descrito acima.

A etapa final prepara a validação do conceito, sem iniciar a V1. Ainda é necessário colher o retorno do engenheiro e conferir a apresentação em aparelho físico e com leitor de tela. Não há backend, banco, autenticação, câmera, upload, PWA, sincronização, PDF, ART ou assinatura reais.

## Jornada demonstrativa — Prompt 07
Use o controle superior **Visão do cliente / Visão do engenheiro** para alternar a perspectiva, sem autenticação ou autorização real. Na visão do engenheiro, a sidebar continua com seis módulos. A visão do cliente tem **Início, Minha solicitação, Atendimento e Documentos**, sem ferramentas administrativas.

No Início, abra **Simular solicitação**. O exemplo mantém nome/imóvel fixos e usa os dois serviços **Vistoria de entrega de imóvel + Laudo técnico** para preservar DEMO-001 e o laudo fixo. Os seis serviços são apresentados; outros pares de serviços não geram novos cenários nesta demonstração. Escolha o período, confira **Visualizar resumo** e só então **Simular envio**. Essa ação produz um recibo visual local, não comprovante real; nada é enviado. O cenário pré-carregado é identificado até essa ação ocorrer. Repetir o envio reinicia apenas a narrativa/agenda de DEMO-001, sem criar outro pedido.

A preferência é compartilhada entre as perspectivas e nunca reserva data. Na visão do engenheiro, em **Solicitações e agenda**, a confirmação existente atualiza o acompanhamento do cliente. O painel **Controle do apresentador** permite **Simular etapa** de análise/negociação, execução e preparo documental; execução/preparo exigem agenda confirmada. São somente estados de narrativa, sem visita ou emissão real. Indicadores e histórico acompanham o mesmo estado local.

Checklist, modelos, marcadores e fila de conectividade não avançam o atendimento nem liberam documentos. Em Documentos do cliente, só há botão de leitura da prévia HTML fixa, aberta em diálogo com fechamento por botão/Escape e retorno de foco. ART permanece não emitida e anexo pendente, sem links. A prévia administrativa da Etapa 05 continua disponível.

**Restaurar cenário geral** reinicia as simulações de campo, conectividade, agenda e jornada, mantendo a perspectiva e abrindo o Início do cliente ou o módulo administrativo atual. **Restaurar cenário**, na Vistoria, também reinicia agenda/jornada para o exemplo pré-carregado, além do estado de campo. Restaurar apenas conectividade afeta só o painel. Recarregar reinicia a perspectiva do engenheiro e todos os estados. Alternar perspectivas sem restaurar mantém o contexto de cada lado e foca o conteúdo principal.

Os documentos da Etapa 06 foram preservados. Use os adendos `docs/ADENDO-ROTEIRO-CLIENTE.md` (5–7 minutos) e `docs/PERGUNTAS-VALIDACAO-CLIENTE.md`. Capturas e resultados: `artifacts/prompt-07/VERIFICACAO.md`. Continuam ausentes backend, login, autorização, storage, pagamentos, mensagens, compartilhamento, PDF, ART ou assinaturas reais.
