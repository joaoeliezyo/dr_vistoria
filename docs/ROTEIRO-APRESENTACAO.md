# Roteiro de apresentação — dr_vistoria

Duração prevista: **10 minutos**, ajustável entre **8 e 12 minutos**. Esta é uma validação de conceito visual, com dados fictícios. Nenhum atendimento, envio, retenção offline ou documento técnico real ocorre. Use `GUIA-VALIDACAO-ENGENHEIRO.md` para registrar as decisões.

## Preparar (antes da reunião)

1. Abra `prototype/index.html` em Chrome ou outro navegador moderno. Não há build ou dependência de internet. Opcional: `python3 -m http.server 8000` na raiz e `http://localhost:8000/prototype/`.
2. Recarregue para reiniciar. Use desktop e, no fluxo de campo, viewport 390×844 ou aparelho físico para colher feedback de ergonomia. No mobile, use Menu para alternar áreas.
3. Informe: “Vamos avaliar organização, termos e navegação. O protótipo usa um apartamento e uma cliente fictícios; as fotos são ilustrativas. Segurança, retenção offline, sincronização e emissão documental não estão implementadas.”
4. Reserve o registro de retorno para o final. Não peça dados pessoais reais ou documentos com identificação de clientes.

## Sequência de 10 minutos

| Tempo | Ação exata | Fala recomendada / o que observar | Pergunta de validação |
|---|---|---|---|
| 0:00–1:00 | Site: percorrer serviços, abrir **Simular solicitação**, manter os dois serviços de exemplo, **Visualizar resumo** e fechar. | “O cliente pode manifestar interesse em vários serviços e informar preferência. O resumo é local; nada foi enviado.” | Os seis serviços e os campos iniciais estão claros? |
| 1:00–2:00 | Menu → **Dashboard** → **Ver solicitações**. Conferir dois serviços, preferência e negociação representada. **Simular confirmação pelo engenheiro**, depois **Agenda ilustrativa**. | “O período informado não reserva horário. Aqui a confirmação é uma ação do engenheiro depois do alinhamento. Datas são demonstrativas.” | A separação entre interesse, negociação e confirmação corresponde à sua rotina? |
| 2:00–3:00 | **Clientes e imóveis** → **Ficha**, depois **Histórico**. | “Cliente, imóvel, solicitação e vistoria são registros distintos. DEMO-H01 é um atendimento anterior fictício, separado do atual DEMO-001. O histórico reflete a confirmação visual.” | A ficha identifica as relações e o histórico sem confundir atendimento anterior com o atual? |
| 3:00–5:00 | Menu → **Vistoria mobile** → **Restaurar cenário**. **Configurar checklist**: alternar para Inspeção predial, voltar a Entrega, incluir item de exemplo e desativá-lo. Fechar configuração. Abrir Banheiro, marcar um item, digitar uma observação fictícia, abrir constatação A e alternar **Original / Anotada**. | “Modelos e respostas ficam separados por serviço. Item avaliado não significa conformidade. A anotação é uma sobreposição à foto original e não é medição ou diagnóstico.” | Modelos, estados de progresso, descrição e evidência são legíveis e suficientes para discutir a vistoria? |
| 5:00–6:00 | **Localizar na planta**. Selecionar A/B/C por marcador ou lista; filtrar um ambiente. **Adicionar marcador temporário**, conferir D na Sala e **Desfazer**. | “Este esquema não tem escala. O filtro sincroniza planta, lista e painel; D é um ponto temporário e não entra no laudo.” | A relação ambiente → constatação → evidência ajuda a leitura? |
| 6:00–8:00 | Menu → **Vistoria mobile**. Abrir **Explorar fila fictícia · 4 exemplos** e seguir os passos de conectividade abaixo. | “A avaliação continua separada da fila. Nenhuma condição da rede real é consultada e nenhum dado é enviado ou retido.” | As diferenças entre avaliar, aguardar envio e resultado de simulação estão claras? |
| 8:00–9:00 | Menu → **Prévia do laudo**. Usar índice para identificação e constatações; apontar conclusão, ART e assinatura reservadas. | “Este é um cenário HTML fixo A/B/C, sem validade técnica. Não reflete edições do checklist ou a simulação de envio; não há ART, assinatura ou PDF emitidos.” | As seções e a apresentação seriam úteis para discutir um futuro documento, após validação técnica adequada? |
| 9:00–10:00 | **Voltar à ficha · Documentos**. Mostrar os três estados. Abrir **Prévia do acesso do cliente** → **Ver prévia HTML** → **Voltar à prévia do cliente** → **Voltar à visão administrativa**. Registrar retorno. | “Só o laudo tem leitura HTML. ART não foi emitida e o anexo está indisponível. Não existe portal público, login ou compartilhamento seguro implementado.” | O cliente entenderia quais documentos estão em prévia, pendentes ou não emitidos? Quais três ajustes priorizar? |

## Sequência reproduzível da conectividade (2 minutos)

1. No seletor, escolher **Sem conexão (simulado)**. Há 4 exemplos fora da fila; 0 pendentes. O aviso de simulação deve permanecer visível.
2. **Mostrar 4 pendências fictícias**: 4 pendentes, sem envio.
3. **Simular reconexão e sincronização**: 4 itens em simulação. Esperar não altera nada; cada transição depende do apresentador.
4. **Concluir simulação**: 4 concluídos somente na interface, sem envio real. Mostrar que o progresso de avaliação não mudou.
5. **Repetir roteiro sem conexão**, avançar novamente até Sincronizando e escolher **Demonstrar falha na fotografia**: 1 erro na foto + 3 pendentes.
6. **Tentar novamente (simulação)**: 4 itens em simulação; **Concluir simulação**: 4 concluídos visualmente.
7. **Restaurar conectividade simulada** reinicia só o painel. **Restaurar cenário** reinicia avaliação/configuração/observações/filtros/marcador e conectividade; recarregar apaga os estados locais.

## Pontos de atenção e encerramento

- Se o tempo for de 8 minutos, reduza a exploração de modelos e da planta; preserve a explicação da simulação e a distinção entre prévia e documento real. Se houver 12 minutos, reserve os dois adicionais para perguntas.
- Nenhuma etapa representa conclusão de diagnóstico, confiabilidade offline, entrega segura ou conformidade normativa. Esses assuntos exigem especificação e avaliação próprias de uma futura implementação.
- Registre por tópico **Aprovado pelo engenheiro / Ajuste solicitado / Ainda não avaliado**, com observação concreta. Não preencha aprovação automaticamente.
- Encerre perguntando: “O que está claro? O que pode confundir o cliente? Quais três mudanças devemos validar primeiro?” O retorno não autoriza iniciar V1 ou adicionar funcionalidades de produção.
