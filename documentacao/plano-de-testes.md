# Plano de Testes: OrangeHRM (demo público)

## 1. Objetivo

Validar, por meio de testes automatizados ponta a ponta (E2E), os fluxos principais do sistema OrangeHRM: login, dados pessoais, navegação, administração e cadastro de funcionários. Os testes reduzem o risco de regressões e documentam o comportamento esperado.

## 2. Sistema sob teste

- **Aplicação:** OrangeHRM (versão de demonstração pública)
- **URL:** https://opensource-demo.orangehrmlive.com
- **Usuário de teste:** Admin (credenciais públicas do demo)

## 3. Escopo

### Dentro do escopo

| Módulo | Funcionalidades cobertas |
|---|---|
| Login | Login válido, credenciais inválidas, campos vazios e logout |
| My Info | Atualização de dados pessoais, campo obrigatório e persistência dos dados |
| Navegação | Acesso aos módulos Admin, PIM, Leave, Time e Performance |
| Admin | Busca de usuário existente e inexistente |
| PIM | Cadastro e busca de funcionário |

### Fora do escopo

- Testes de API, desempenho, acessibilidade e segurança
- Execução em múltiplos navegadores e em dispositivos móveis
- Demais funcionalidades de cada módulo (por exemplo, pedidos de licença e recrutamento)

## 4. Tipos de teste

- Funcional, pela interface
- Ponta a ponta (E2E)
- Cenários positivos e negativos
- Regressão, com a suíte reexecutável a cada alteração

## 5. Ambiente e ferramentas

| Item | Detalhe |
|---|---|
| Automação | Cypress 16.2.0 |
| Linguagem | JavaScript |
| Padrão de projeto | Page Object Model |
| Dados de teste | Fixture (usuários) e biblioteca Chance (dados aleatórios) |
| Navegador | Electron, modo headless |
| Execução | Windows, Node.js v24.13.0 |
| Controle de versão | Git e GitHub |

## 6. Estratégia

- **Page Object Model:** seletores e ações de cada tela ficam em um só arquivo, o que facilita a manutenção e a consulta.
- **Comando `cy.login()` com `cy.session()`:** o login é feito uma vez e reaproveitado, tornando a suíte mais rápida.
- **`cy.intercept()`:** os testes esperam as requisições da aplicação em vez de usar pausas fixas.
- **Dados aleatórios:** cada execução gera dados novos através da biblioteca Chance, com o objetivo de evitar colisões.
- **Testes independentes:** cada teste cria o que precisa e não depende da ordem de execução.

## 7. Critérios de entrada e saída

**Entrada**
- O demo está acessível e o login do usuário Admin funciona.
- As dependências estão instaladas (`npm install`).

**Saída**
- Todos os casos de prioridade Alta passam.
- Toda falha foi investigada e classificada como defeito do sistema, instabilidade do ambiente ou defeito do teste.

## 8. Riscos

| Risco | Mitigação |
|---|---|
| O demo é público, compartilhado e reiniciado periodicamente, podendo ficar lento ou perder dados | Testes independentes que criam os próprios dados; tempos de espera ajustados onde há lentidão |
| Os seletores dependem do HTML do site, e uma atualização pode quebrar os testes | Seletores por texto e por label; Page Object concentra a manutenção |
| Erros JavaScript internos da aplicação podem reprovar testes (observado no logout) | Tratamento pontual da exceção, restrito ao teste afetado |
| Dados criados no cadastro de funcionários não são removidos | Aceitável no demo; em ambiente real, a limpeza seria feita via API |
| As credenciais do demo são públicas e outras pessoas podem alterá-las | Credenciais centralizadas em uma fixture, fáceis de atualizar |

## 9. Entregáveis

- Código de automação (`automacao-cypress/`)
- Casos de teste com rastreabilidade ([casos-de-teste.md](casos-de-teste.md))
- Este plano de testes