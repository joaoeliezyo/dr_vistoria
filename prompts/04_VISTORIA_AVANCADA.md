# PROMPT 04 — Vistoria avançada (protótipo visual)

## Contexto e leitura obrigatória
Antes de modificar qualquer arquivo, leia integralmente `AGENTS.md`, `README.md`, `docs/ESCOPO-PROTOTIPO.md`, `docs/DESIGN-BRIEF.md`, `docs/CENARIO-DEMO.md`, `docs/CRITERIOS-ACEITE.md`, `docs/EXTENSAO-PROTOTIPO.md` e `docs/ACEITE-PROMPT-04.md`. Examine o código atual em `prototype/`, inclusive a folha tipográfica adicionada depois do Prompt 03. Respeite a implementação existente e o histórico das quatro etapas anteriores.

O objetivo é **ampliar a demonstração visual navegável**, não implementar a V1. Faça apenas a Etapa 04. Não avance para 05 ou 06, não faça commit nem push.

## Escopo obrigatório

### 1. Progresso por ambiente e da vistoria
- Na área **Vistoria mobile**, exiba estado e progresso de Sala, Cozinha e Banheiro com texto e indicadores acessíveis.
- Diferencie explicitamente `Não avaliado`, `Em andamento` e `Concluído` (estados ilustrativos). **Um item marcado não deve significar automaticamente conformidade técnica.** Se a interface atual só dispõe de checkbox, preserve seu significado como `item avaliado` e deixe isso claro; não invente diagnósticos.
- Progresso calculado apenas a partir do estado em memória da demonstração, reiniciando ao recarregar. Inclua uma maneira simples de restaurar o cenário original, se necessário.

### 2. Checklist configurável — simulação
- Crie uma configuração visual acessível por botão/aba dentro da Vistoria, sem acrescentar uma sétima área principal.
- Mostre modelos de checklist por serviço a partir de dados fictícios; um exemplo é `Vistoria de entrega de imóvel` e outro `Inspeção predial`.
- Permita demonstrar incluir ou desativar um item personalizado **apenas na sessão atual**; atualize a interface de forma coerente e exiba claramente que se trata de uma simulação.
- Preserve a distinção entre modelo de checklist (configuração) e respostas de vistoria (execução). Não misture itens de modelos de serviços diferentes sem contextualizar.

### 3. Anotação fotográfica ilustrativa
- Na constatação A do Banheiro, apresente controle acessível `Original / Anotada`.
- Utilize a imagem local existente `prototype/assets/infiltracao-ilustrativa.png` como base. Faça a anotação por sobreposição HTML/SVG responsiva, sem alterar ou destruir a fotografia original.
- A anotação pode destacar uma região com seta ou círculo e uma legenda curta. Não sugira que o destaque é diagnóstico ou medição real.
- Garanta que a anotação tenha descrição textual equivalente e que a imagem seja claramente fictícia.
- Sala e Cozinha podem continuar com placeholders, identificados de maneira honesta.

### 4. Planta aprimorada
- Preserve a planta SVG esquemática, sem escala, com marcadores A/B/C e lista textual alternativa.
- Melhore o vínculo visual entre ambiente, marcador, constatação e imagem; permita filtrar ou destacar marcadores por ambiente, mantendo a lista equivalente sincronizada.
- Para simular adição de marcador, ofereça preferencialmente um **marcador de demonstração temporário** com aviso explícito e ação de desfazer; não implemente desenho CAD, drag-and-drop obrigatório, coordenadas georreferenciadas ou persistência.
- A interação com o marcador deve funcionar por teclado e toque. Evite que filtros ocultem constatações sem aviso de estado.

## Regras de integridade visual e técnica
- Preserve as seis áreas, seus links, IDs de rota, formulário, agenda e prévia de laudo.
- Preserve `#FF2C23` e o refinamento tipográfico aprovado. Não volte a microtextos (9–12 px) em conteúdos essenciais.
- Centralize os dados base fictícios em `prototype/data.js`; mantenha o estado de edição exclusivamente em memória. Não introduza conteúdo real de engenheiros, imóveis, ART ou assinaturas.
- Mantenha ausência de backend, bibliotecas externas, armazenamento persistente, uploads, câmera, IA, sincronização e emissão de documentos.
- Não copie o SIAPP. As melhorias são soluções originais alinhadas ao projeto.
- Não altere o `AGENTS.md` original da V1 nem os documentos em `docs/referencias/`.
- Na prévia do laudo, **não apresente os itens novos editados como se o documento fosse atualizado dinamicamente**. Mantenha aviso de cenário ilustrativo fixo, ou ajuste sua explicação textual.

## Verificação obrigatória
1. Execute roteiro completo existente: landing → dashboard → solicitações → vistoria → planta → laudo.
2. Teste Sala, Cozinha e Banheiro, estados do checklist, progresso, inclusão e desativação de item, original/anotada, filtros e marcadores A/B/C, marcador temporário e desfazer.
3. Teste em viewport real 390×844 e desktop 1440×900; `document.documentElement.scrollWidth <= window.innerWidth`, sem controles recortados e sem overflow horizontal.
4. Verifique foco visível, labels, textos alternativos, teclado, áreas clicáveis >=44 px e preferência `prefers-reduced-motion` onde houver animação.
5. Verifique ausência de erros JavaScript e de chamadas de rede. Ao recarregar, alterações simuladas devem ser reiniciadas.
6. Salve capturas em `artifacts/prompt-04/`, preferencialmente com estados inicial e expandido de vistoria, anotação e planta em desktop e mobile.
7. Crie `artifacts/prompt-04/VERIFICACAO.md` informando o que foi efetivamente executado, resultados, limitações e possíveis regressões. Não declare testes que não executou.
8. Atualize `README.md` com novos recursos simulados e limitações correspondentes.

## Encerramento
Informe arquivos alterados, alterações por fluxo, verificações com resultados, capturas produzidas, limitações e pendências. **PARE** após o Prompt 04. Não faça commit nem push.
