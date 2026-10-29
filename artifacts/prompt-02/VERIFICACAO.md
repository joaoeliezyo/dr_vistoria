# Verificação do Prompt 02

Executado no Chrome headless com emulação explícita de viewport pelo DevTools Protocol.

- 1440×900: scrollWidth 1440 na lista de ambientes e 1425 na planta, sempre <= innerWidth 1440.
- 390×844: scrollWidth 390 e innerWidth 390 em todas as seis áreas e nos estados de ambiente/constatação.
- Sala, Cozinha e Banheiro: seleção, checklist, observações e abertura de constatação aprovados.
- Marcadores A/B/C e botões da lista textual: seleção e painel correspondente aprovados.
- Evidência de infiltração: imagem local carregada.
- Regressão dos fluxos anteriores: modal, formulário, abas, confirmação demonstrativa, painel e menu mobile aprovados.
- Exceções JavaScript capturadas: zero.
- Revisão visual das capturas desktop/mobile e git diff --check sem problemas.

Capturas de página inteira: vistoria, banheiro com evidência e planta, nas duas viewports. A altura dos PNGs corresponde à página inteira.

A foto em prototype/assets/infiltracao-ilustrativa.png foi criada com a ferramenta integrada imagegen. Prompt final: “Create an original photorealistic landscape illustrative photograph of a fictional bathroom white wall with a small damp stain and peeling paint above gray tiles. Empty room, soft daylight, no text, logos or people. For a visual building inspection demonstration, not a real property.”

Limitações: modo offline é somente um estado visual; nenhuma foto é capturada ou enviada; estados e textos são reiniciados ao recarregar. Sala e cozinha usam espaços reservados identificados como imagens ilustrativas. A planta é um esquema sem escala. O laudo permanece reservado ao Prompt 03.
