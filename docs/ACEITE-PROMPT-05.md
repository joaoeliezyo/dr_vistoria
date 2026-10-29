# Critérios de aceite — Prompt 05

## Funcional
- [ ] As seis áreas principais continuam acessíveis, sem regressões.
- [ ] A seção Solicitações e agenda permite acessar cliente/imóvel fictícios.
- [ ] A ficha distingue cliente, imóvel, solicitação, vistoria e documentos.
- [ ] O histórico apresenta pelo menos três eventos cronológicos coerentes, claramente fictícios.
- [ ] A relação de documentos indica com clareza quais são prévias, pendentes ou não emitidos.
- [ ] Existe prévia do acesso do cliente, com conteúdo limitado ao cenário fictício.
- [ ] O usuário consegue navegar da ficha ao laudo e retornar sem perder a orientação.
- [ ] Nada é transmitido, armazenado ou disponibilizado ao público.

## Visual, UX e acessibilidade
- [ ] Tipografia aprovada preservada (`typography.css`), corpo legível no celular.
- [ ] Nenhum conteúdo essencial usa microtexto; foco visível e controles >=44px nas interfaces mobile.
- [ ] Abas, botões e modais operáveis por teclado; foco gerido ao abrir/fechar diálogo.
- [ ] Os estados documentais são comunicados por texto, não apenas cor.
- [ ] Desktop 1440×900 e mobile 390×844 sem overflow horizontal.
- [ ] Texto deixa claro: "Demonstração visual", dados fictícios e ausência de entrega real.

## Qualidade e evidências
- [ ] Testar roteiro completo dos Prompts 00–05 em desktop e mobile.
- [ ] Testar aba/ficha, histórico, prévia do cliente, navegação ao laudo e retorno.
- [ ] Registrar console.error/exceções e chamadas HTTP(S) externas.
- [ ] Criar `artifacts/prompt-05/VERIFICACAO.md` com resultados efetivamente executados.
- [ ] Criar capturas desktop/mobile de ficha, histórico, documentos e prévia do cliente.
- [ ] Atualizar README com funcionalidades e limitações desta etapa.
- [ ] Não executar Prompt 06, não fazer commit/push.
