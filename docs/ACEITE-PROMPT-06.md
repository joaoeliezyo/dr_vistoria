# Critérios de aceite — Prompt 06

## Funcionais demonstrativos
- [ ] Estado de conexão é explicitamente simulado, não detectado automaticamente.
- [ ] Estados conectividade / sem conexão / enviando / pendente ou erro / concluído são compreensíveis e não enganosos.
- [ ] Fila fictícia exibe nomes, estados e contagens consistentes; ações voluntárias permitem reproduzir sucesso e erro recuperável.
- [ ] Estado de avaliação de checklist não é confundido com estado de sincronização nem com conformidade técnica.
- [ ] Nada muda o laudo fixo, a ART ou os documentos em função das simulações.
- [ ] Recarregar reinicia o estado demonstrativo sem falsa promessa de persistência.
- [ ] Nenhuma requisição HTTP(S) externa, acesso a API, armazenamento real ou sincronização é introduzida.

## Regressão e apresentação
- [ ] Seis áreas globais permanecem disponíveis; preservadas navegação interna e telas dos Prompts 00–05.
- [ ] Pedido multi-serviço, negociação, agenda, ficha, histórico, documentos, cliente, vistoria, planta, anotação e laudo são revalidados.
- [ ] Tipografia aprovada e identidade visual preservadas.
- [ ] Testar 1440×900 e 390×844, inclusive estados intermediários e diálogo mobile; sem overflow horizontal.
- [ ] Verificar teclado, foco, semântica de botões, rótulos acessíveis, estado selecionado e preferência de redução de movimento.
- [ ] Conferir que datas, nomes, serviços, documentos, ambiente e constatações são coerentes.
- [ ] `docs/ROTEIRO-APRESENTACAO.md` orienta apresentação em 8–12 min e perguntas de validação.
- [ ] `docs/GUIA-VALIDACAO-ENGENHEIRO.md` separa decisões a confirmar de funcionalidades simuladas.
- [ ] `README.md` apresenta as etapas 04–06 e avisa sobre a inexistência de offline verdadeiro.
- [ ] Capturas finais e `artifacts/prompt-06/VERIFICACAO.md` fornecem evidências de testes e limitações.

## Entrega e disciplina
- [ ] Não alterar `docs/referencias/` nem introduzir bibliotecas/frameworks desnecessários.
- [ ] Relatar arquivos modificados, decisões, testes executados, limitações e pendências.
- [ ] Não realizar commit, push ou avançar à V1.
