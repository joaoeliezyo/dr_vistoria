# AGENTS.md — dr_vistoria / protótipo visual

## Objetivo atual
Construir somente um protótipo visual navegável para validação com um engenheiro. NÃO construir a aplicação V1 nem tratar a demonstração como software de produção.

## Leitura obrigatória
Antes de alterar código, ler `README.md`, `docs/ESCOPO-PROTOTIPO.md`, `docs/DESIGN-BRIEF.md` e `docs/CRITERIOS-ACEITE.md`. Para detalhes da futura V1, apenas consultar `docs/referencias/AGENTS-V1-original.md` e `docs/referencias/projeto-tecnico-sistema-vistorias.html`; os requisitos de produção não autorizam sua implementação agora.

## Prioridades
1. Fidelidade ao conceito e qualidade UX/UI.
2. Navegação clara nas seis telas, dados fictícios consistentes.
3. Mobile-first no fluxo de vistoria; desktop bem acabado no site e painel.
4. Semântica HTML, contraste, teclado, estados visuais e responsividade.
5. Código simples, organizado e de fácil descarte/reaproveitamento.

## Escopo técnico
- Usar HTML, CSS e JavaScript puro, sem dependências obrigatórias.
- Arquivos principais em `prototype/`: `index.html`, `styles.css`, `app.js`, `data.js`.
- Simular a navegação e interações visuais; NÃO usar backend, banco, API externa, autenticação, pagamentos, PWA offline, uploads persistentes, sincronização ou geração de PDF real.
- Não acrescentar tecnologias ou funcionalidades fora do escopo sem autorização.
- Não usar `localStorage` como se fosse sincronização real. Preferir estado apenas em memória, reinicializado ao recarregar.
- Nada de dados reais, CPF verdadeiro, endereço real, ART real, assinatura real ou logomarca inventada apresentada como oficial.
- Não copiar o conteúdo, marca ou interface do SIAPP nem da imagem de referência; usá-los só como inspiração conceitual.
- Usar `assets/references/site-engenheiro.webp` como guia visual. Se criar logotipo temporário, identificá-lo como placeholder.
- Evitar bibliotecas de ícones remotas e recursos que dependam de conectividade; usar SVGs locais ou ícones simples.

## Fluxo de trabalho
- Executar um prompt por vez na ordem em `prompts/`.
- Não executar etapas posteriores sem revisão humana dos resultados.
- Após cada etapa, informar arquivos alterados, decisões tomadas, como visualizar e pendências.
- Fazer revisão em desktop 1440x900 e mobile 390x844; sem overflow horizontal.
- Não realizar commit/push sem solicitação explícita.
- Não alterar os originais em `docs/referencias/`.

## Regra de honestidade da demonstração
Exibir discretamente `Demonstração visual • dados fictícios`. Qualquer foto, laudo, envio, confirmação, marcador, solicitação ou status deve ser claramente simulado. Não anunciar funcionalidades como implementadas.
