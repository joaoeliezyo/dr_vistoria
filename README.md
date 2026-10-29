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
O Prompt 01 apresenta visualmente o site institucional, o dashboard e solicitações/agenda. O formulário, as abas e a confirmação pelo engenheiro são simulações locais; recarregar a página reinicia os estados. Vistoria, planta e laudo seguem como áreas reservadas para etapas posteriores. A imagem da landing foi gerada para esta demonstração e não representa um imóvel real.

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
