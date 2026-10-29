# AGENTS.md

## 1. Visão geral do projeto

Este repositório contém o sistema web `dr_vistoria`, uma aplicação voltada ao gerenciamento de vistorias e inspeções técnicas realizadas por um engenheiro.

O sistema será inicialmente utilizado por um engenheiro e seus clientes. A primeira versão não terá multitenancy nem suporte a equipes de engenheiros. A arquitetura deve ser modular para permitir futuras expansões.

O sistema deve contemplar:
- site público institucional;
- solicitação de serviços;
- seleção de múltiplos serviços em uma solicitação;
- clientes e imóveis;
- agenda;
- vistorias em campo;
- funcionamento offline;
- checklists configuráveis por ambiente;
- observações, fotos e vídeos;
- sincronização posterior;
- armazenamento privado de arquivos;
- geração de laudos em PDF;
- registro de ART;
- assinatura digital;
- acesso seguro do cliente aos documentos;
- autenticação, autorização e auditoria.

## 2. Princípios fundamentais

### Não implementar além do escopo

Não adicionar funcionalidades por iniciativa própria.

Quando algo não estiver especificado:
1. verificar a documentação;
2. verificar requisitos e regras de negócio;
3. avaliar os impactos;
4. solicitar orientação se houver dúvida estrutural relevante.

Evitar funcionalidades, integrações, tecnologias ou infraestrutura desnecessárias.

### Documentação é parte do sistema

A documentação em `docs/` representa a especificação funcional e técnica.

Para funcionalidades relevantes:
1. identificar documentos relacionados;
2. compreender requisitos;
3. avaliar impactos;
4. implementar;
5. testar;
6. atualizar a documentação quando necessário.

Código e documentação devem permanecer coerentes.

### Segurança por padrão

Aplicar, quando pertinente:
- autenticação;
- autorização no servidor;
- menor privilégio;
- validação de entrada;
- proteção contra SQL Injection, XSS e CSRF;
- rate limiting;
- sessões seguras;
- controle de acesso por recurso;
- validação de arquivos;
- armazenamento privado;
- URLs assinadas e temporárias;
- proteção de segredos;
- auditoria.

Nunca confiar exclusivamente em validações do frontend ou IDs difíceis de adivinhar.

## 3. Stack tecnológica

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- PWA
- IndexedDB

### Backend
- NestJS
- TypeScript
- Prisma

### Banco
- PostgreSQL

### Infraestrutura
- Docker
- Docker Compose

### Armazenamento

Arquivos de produção devem utilizar armazenamento de objetos privado, com uploads/downloads autorizados pelo backend e URLs temporárias assinadas quando apropriado.

Credenciais permanentes nunca devem chegar ao frontend.

### Testes
- testes unitários;
- testes de integração;
- testes de API;
- testes end-to-end;
- testes de fluxos offline.

Playwright deve ser utilizado nos principais fluxos E2E.

## 4. Arquitetura

Utilizar arquitetura de **monólito modular**.

Separar por domínio, evitando microsserviços sem necessidade real.

Domínios esperados:
- Auth
- Clients
- Properties
- Services
- Requests
- Scheduling
- Inspections
- Files
- Reports
- Configuration
- Notifications

A lista pode evoluir conforme os requisitos.

## 5. Fluxo conceitual

```text
                 ┌──────────────────┐
                 │   Site público   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │       PWA        │
                 │ Next.js / React  │
                 └────────┬─────────┘
                          │ HTTPS
                          ▼
                 ┌──────────────────┐
                 │      API         │
                 │ NestJS           │
                 └───────┬──────────┘
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
      ┌──────────────┐       ┌────────────────┐
      │ PostgreSQL   │       │ Object Storage │
      └──────────────┘       └────────────────┘
```

Durante uma vistoria offline, a PWA deve armazenar os dados localmente e sincronizá-los posteriormente.

## 6. Docker

O ambiente deve ser executável com Docker.

Não assumir Node.js, PostgreSQL ou outras dependências instaladas diretamente no host quando elas fizerem parte do ambiente do projeto.

O projeto deve possuir:
- Dockerfiles quando necessários;
- `docker-compose.yml`;
- configurações de desenvolvimento quando necessárias;
- volumes persistentes;
- `.env.example`.

Não adicionar Redis, MinIO, Nginx, Traefik ou outros serviços sem necessidade real.

## 7. Variáveis de ambiente e segredos

Nunca versionar:
- `.env`;
- `.env.local`;
- senhas;
- tokens;
- API keys;
- certificados privados;
- chaves privadas;
- credenciais de banco;
- credenciais de armazenamento.

Deve existir `.env.example` contendo apenas os nomes das variáveis e valores de exemplo seguros.

## 8. Autenticação

A autenticação do engenheiro deve utilizar sessões seguras.

Senhas devem ser armazenadas com Argon2id.

Não armazenar senhas em texto puro.

Evitar tokens de autenticação em `localStorage`.

Cookies de sessão devem utilizar, quando aplicável:
- `HttpOnly`;
- `Secure`;
- `SameSite`.

Proteger login contra tentativas abusivas.

## 9. Autorização

Toda operação sobre recursos privados deve verificar autorização no servidor.

UUID ou ULID podem ser usados para identificadores, mas não substituem autorização.

## 10. Arquivos

Arquivos enviados são conteúdo não confiável.

Validar, conforme o caso:
- tamanho;
- MIME type;
- extensão;
- magic bytes;
- dimensões de imagem;
- conteúdo permitido;
- nome original;
- checksum.

A chave física do objeto deve ser gerada pelo servidor.

Arquivos privados não devem possuir URLs públicas permanentes.

## 11. Vistorias offline

O offline é requisito central.

Podem ser armazenados localmente:
- dados da vistoria;
- ambientes;
- checklist;
- respostas;
- observações;
- fotografias;
- vídeos;
- metadados de sincronização.

A aplicação deve sobreviver a:
- fechamento do navegador;
- reinicialização do dispositivo;
- perda de conexão;
- falha de sincronização.

A fila de sincronização deve ser persistente.

Estados possíveis:
```text
PENDING
UPLOADING
COMPLETED
FAILED
RETRY
```

Operações devem ser idempotentes sempre que possível.

Não considerar a vistoria completamente sincronizada enquanto existirem dados ou arquivos pendentes.

A interface deve informar:
- conexão;
- sincronização;
- itens pendentes;
- erros.

## 12. Checklists

A vistoria deve permitir ambientes configuráveis.

Exemplo:

```text
Sala
 ├── Estrutura
 ├── Elétrica
 ├── Hidráulica
 ├── Observações
 ├── Fotografias
 └── Vídeos

Cozinha
 ├── Estrutura
 ├── Elétrica
 ├── Hidráulica
 ├── Observações
 ├── Fotografias
 └── Vídeos
```

O engenheiro deve poder adicionar itens personalizados.

O modelo deve permitir evolução para diferentes tipos de inspeção.

## 13. Solicitação de serviços

Uma solicitação pode conter múltiplos serviços.

Utilizar entidade intermediária equivalente a:

```text
SOLICITACAO
      │
      ▼
SOLICITACAO_SERVICO
      │
      ▼
SERVICO
```

O cliente pode informar:
- dados pessoais;
- WhatsApp;
- dados do imóvel;
- serviços desejados;
- data/período de preferência;
- observações;
- planta do imóvel e documentos pertinentes.

O engenheiro avalia a solicitação e negocia com o cliente via WhatsApp.

A V1 não deve depender de integração oficial com a API do WhatsApp.

Após o acordo, o engenheiro registra a data e horário combinados.

## 14. Relatórios

O sistema deve gerar laudos em PDF.

Estrutura inicial:
- Capa;
- Identificação;
- Objetivo;
- Metodologia;
- Caracterização do imóvel;
- Checklist / Constatações;
- Registro fotográfico;
- Observações;
- Conclusão;
- Responsabilidade técnica;
- ART;
- Assinatura;
- Anexos.

O modelo pode evoluir conforme as necessidades do engenheiro.

Documentos devem possuir controle de versão quando regenerados.

## 15. Identidade visual

A área pública deve possuir aparência profissional relacionada à engenharia:
- institucional;
- espaço em branco;
- tipografia legível;
- fotografias de engenharia e imóveis;
- cartões e seções bem delimitadas;
- responsividade;
- animações discretas.

Cor de destaque:

```text
RGB: 255 44 35
HEX: #FF2C23
```

O logotipo oficial deve ser utilizado quando estiver disponível como arquivo no projeto.

Referências visuais devem servir como inspiração, não como conteúdo a ser copiado literalmente.

## 16. Responsividade

Prioridade:
1. smartphone;
2. tablet;
3. desktop.

A interface de vistoria deve ser especialmente otimizada para celulares.

Não depender exclusivamente de mouse ou teclado.

## 17. Banco de dados

PostgreSQL é o banco principal.

Utilizar:
- migrations versionadas;
- integridade referencial;
- índices justificados;
- constraints;
- timestamps consistentes;
- auditoria quando necessária.

Alterações de schema devem ocorrer por migrations.

## 18. Testes

Toda funcionalidade relevante deve possuir testes adequados.

Regras de negócio, endpoints críticos, autorização, offline e sincronização devem ser testados.

Fluxos críticos:
- login;
- solicitação de vistoria;
- seleção de múltiplos serviços;
- agendamento;
- criação de vistoria;
- execução offline;
- registro de fotografias;
- sincronização;
- geração de laudo;
- acesso do cliente aos documentos.

Código compilando não significa funcionalidade concluída.

## 19. Git

Versionar somente arquivos relevantes ao desenvolvimento e manutenção.

Não versionar:
- dependências;
- builds;
- caches;
- logs;
- temporários;
- bancos locais;
- uploads locais;
- secrets;
- ambientes reais;
- arquivos específicos da máquina;
- artefatos gerados automaticamente.

Não realizar commits contendo:
- senhas;
- tokens;
- chaves privadas;
- dados reais de clientes;
- fotografias reais;
- documentos reais;
- ARTs reais.

Dados de testes devem ser fictícios.

O `.gitignore` deve ser mantido atualizado.

## 20. Privacidade

Durante desenvolvimento, utilizar dados fictícios.

Não utilizar dados reais de clientes, CPF, endereços, fotografias, documentos ou ARTs nos testes ou no repositório.

## 21. Desenvolvimento orientado por documentação

Para tarefas significativas:

```text
1. Entender o requisito
2. Localizar a documentação relacionada
3. Identificar impactos
4. Criar plano quando necessário
5. Implementar
6. Executar testes
7. Revisar segurança
8. Atualizar documentação
```

Tarefas complexas devem utilizar `plans/`.

Planos podem conter:
- objetivo;
- contexto;
- estado atual;
- arquivos envolvidos;
- alterações de banco;
- API;
- frontend;
- testes;
- critérios de aceitação;
- riscos;
- rollback.

## 22. Critérios de qualidade

Uma implementação adequada:
- atende ao requisito;
- respeita a arquitetura;
- evita dependências desnecessárias;
- trata erros;
- possui testes;
- não introduz vulnerabilidades conhecidas;
- não expõe dados privados;
- é responsiva quando aplicável;
- funciona offline quando exigido;
- mantém a documentação atualizada;
- funciona conforme o ambiente Docker documentado.

## 23. Antes de implementar

Verificar:

```text
[ ] Requisito claro?
[ ] Documentação relacionada?
[ ] Impacto no banco?
[ ] Impacto na API?
[ ] Impacto no frontend?
[ ] Impacto no offline?
[ ] Impacto na segurança?
[ ] Impacto em arquivos/armazenamento?
[ ] Necessidade de migration?
[ ] Necessidade de testes E2E?
[ ] Documentação precisa ser atualizada?
```

Se uma decisão arquitetural importante não estiver definida, não assumir silenciosamente uma solução irreversível.

## 24. Regra principal

O objetivo é construir um sistema:
- seguro;
- modular;
- testável;
- documentado;
- responsivo;
- offline-first quando necessário;
- executável em Docker;
- preparado para evolução;
- simples o suficiente para manutenção por um desenvolvedor solo auxiliado por IA.

Priorizar soluções tecnicamente sustentáveis, evitando complexidade prematura.
