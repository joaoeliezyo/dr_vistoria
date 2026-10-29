# Adendo — jornada cliente → engenheiro → cliente

Duração: **6 minutos**, ajustável entre **5 e 7**. Complementa `ROTEIRO-APRESENTACAO.md` sem substituí-lo. Dados fictícios, apenas DEMO-001. Alternância de perspectiva não representa autenticação ou autorização.

## Preparar

Abrir `prototype/index.html`, recarregar e usar **Restaurar cenário geral**. O seletor superior está disponível nas duas perspectivas. No mobile, a navegação do cliente é contextual, sem sidebar. Na visão do engenheiro, usar Menu para as seis áreas.

## Passos reproduzíveis

| Tempo | Ação | O que explicar |
|---|---|---|
| 0:00–1:00 | **Visão do cliente** → Início. Mostrar seis serviços e abrir Minha solicitação antes de enviar. | “Este é o cenário pré-carregado. Ainda não há recibo de envio simulado nesta sessão.” |
| 1:00–2:00 | Voltar a Início → **Simular solicitação**. Conferir os campos fictícios fixos, selecionar Entrega + Laudo e preferência Tarde. **Visualizar resumo** → **Simular envio**. | “O resumo e o recibo DEMO-001 são locais. Não há orçamento monetário, mensagem ou envio real. A preferência não reserva horário.” |
| 2:00–3:00 | Cliente → Atendimento, conferir **Aguardando confirmação**. Alternar **Visão do engenheiro**, abrir Solicitações e agenda e conferir o mesmo período. Usar **Simular etapa** de análise/negociação, depois a ação existente de confirmação pelo engenheiro. | “Um único estado em memória alimenta as perspectivas. Apenas o engenheiro representa a confirmação da agenda.” |
| 3:00–4:00 | Voltar à Visão do cliente: confirmar que Atendimento mostra data/horário ilustrativos. Retornar ao engenheiro, **Simular etapa** de execução e de preparo documental. | “São etapas da narrativa escolhidas pelo apresentador. Não provam visita, emissão ou entrega e não são deduzidas dos checklists.” |
| 4:00–5:00 | Cliente → Documentos → **Ver prévia HTML**. Mostrar ressalva de invalidade técnica e fechar com Escape. Apontar ART não emitida/anexo pendente. | “A prévia é fixa A/B/C, igual ao cenário administrativo. Não há download, documento emitido, acesso público ou segurança implementada.” |
| 5:00–6:00 | Alternar perspectivas para conferir preservação do contexto. **Restaurar cenário geral** e mostrar o exemplo pré-carregado novamente; se útil, recarregar. Colher perguntas do adendo de validação. | “A restauração reinicia a narrativa, agenda e campo. A recarga perde todos os estados. Não existe persistência.” |

## Limites que devem ser ditos

- A identidade, o imóvel e o par de serviços são limitados ao cenário aprovado. Outros nomes, imóveis ou combinações não geram atendimentos. DEMO-H01 é um histórico anterior distinto.
- Repetir Simular envio substitui a simulação de DEMO-001 e reinicia confirmação/etapa, com aviso no formulário. Não cria vários pedidos.
- Concluir checklist ou a fila offline não muda a etapa do cliente. A prévia fixa continua disponível independentemente de preparo documental; isso não é liberação/entrega real.
- Restaurar campo também restaura jornada/agenda; restaurar somente conectividade não afeta atendimento. Nenhuma das ações armazena ou envia dados.
- Os documentos originais da Etapa 06 continuam válidos como registro daquela apresentação; este adendo cobre apenas a extensão 07. Não há autorização para V1.
