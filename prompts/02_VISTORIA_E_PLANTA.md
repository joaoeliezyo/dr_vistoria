# PROMPT 02 — Vistoria mobile e planta ilustrativa

Leia `AGENTS.md`, documentos do protótipo e implemente as telas **4 Vistoria no celular** e **5 Planta/constatações** sobre o código existente, sem reescrever telas anteriores desnecessariamente.

A interface mobile de vistoria é a prioridade: lista de ambientes Sala/Cozinha/Banheiro, checklist por Estrutura/Elétrica/Hidráulica, estados exemplificativos, observações e constatações com fotos meramente demonstrativas. Fazer interações visuais simples e coerentes (selecionar ambiente, marcar item, abrir constatação), sem salvar dados persistentemente. Destacar `Offline (simulado)`, sem afirmar conexão real ou sync real.

Para planta, criar **SVG original e esquemático** de um apartamento ilustrativo, com 2–3 marcadores clicáveis de constatações do `docs/CENARIO-DEMO.md`, painel com detalhes e uma lista textual alternativa acessível. Não utilizar imagens protegidas ou a identidade SIAPP. Pode usar imagens ilustrativas locais apropriadas; se não houver, usar placeholders visuais bem resolvidos com legenda `Imagem ilustrativa`, sem depender de URL externa.

Garantir boa UX em 390x844, áreas de toque >=44px, foco teclado e comportamento claro para retornar à lista de ambientes. Testar navegação e marcadores. Não implementar câmera real, upload, IndexedDB ou sincronização. Não fazer commit/push. Reportar resultado e PARE.
