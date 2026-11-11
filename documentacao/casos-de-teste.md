# Casos de Teste: OrangeHRM

**Legenda:** Prioridade Alta = fluxo essencial · Média = importante · Baixa = secundário.
**Resultado:** ✅ Passou · ❌ Falhou · ⬜ Não executado.

## 1. Casos de teste

| ID | Módulo | Título | Tipo | Prioridade | Pré-condição | Passos | Resultado esperado |
|---|---|---|---|---|---|---|---|
| CT-001 | Login | Login com credenciais válidas | Positivo | Alta | Usuário Admin cadastrado | 1. Acessar a tela de login<br>2. Informar usuário e senha válidos<br>3. Clicar em Login | O usuário é direcionado ao dashboard e o painel é exibido |
| CT-002 | Login | Login com usuário e senha inexistentes | Negativo | Alta | Nenhuma | 1. Acessar a tela de login<br>2. Informar usuário e senha inexistentes (test / test)<br>3. Clicar em Login | O alerta "Invalid credentials" é exibido |
| CT-003 | Login | Login com senha incorreta | Negativo | Alta | Usuário Admin cadastrado | 1. Acessar a tela de login<br>2. Informar usuário válido e senha incorreta<br>3. Clicar em Login | O alerta "Invalid credentials" é exibido |
| CT-004 | Login | Login com campos vazios | Negativo | Média | Nenhuma | 1. Acessar a tela de login<br>2. Clicar em Login sem preencher nada | A mensagem "Required" é exibida nos dois campos |
| CT-005 | Login | Logout | Positivo | Alta | Usuário logado | 1. Abrir o menu do usuário<br>2. Clicar em Logout | O usuário é direcionado à tela de login |
| CT-006 | My Info | Atualizar dados pessoais | Positivo | Alta | Usuário logado, página My Info aberta | 1. Preencher primeiro nome, nome do meio e sobrenome<br>2. Preencher Employee Id, Other Id e License Number<br>3. Selecionar Nationality e Marital Status<br>4. Clicar em Save | O aviso "Successfully Updated" é exibido |
| CT-007 | My Info | Primeiro nome obrigatório | Negativo | Média | Usuário logado, página My Info aberta | 1. Apagar o primeiro nome<br>2. Clicar em Save | A mensagem "Required" é exibida |
| CT-008 | My Info | Dados persistem após recarregar | Positivo | Alta | Usuário logado, página My Info aberta | 1. Preencher os nomes<br>2. Clicar em Save<br>3. Recarregar a página | O primeiro nome informado continua exibido no campo |
| CT-009 | Navegação | Acessar o módulo Admin | Positivo | Média | Usuário logado | 1. Clicar em Admin no menu lateral | A URL contém /admin |
| CT-010 | Navegação | Acessar o módulo PIM | Positivo | Média | Usuário logado | 1. Clicar em PIM no menu lateral | A URL contém /pim |
| CT-011 | Navegação | Acessar o módulo Leave | Positivo | Média | Usuário logado | 1. Clicar em Leave no menu lateral | A URL contém /leave |
| CT-012 | Navegação | Acessar o módulo Time | Positivo | Média | Usuário logado | 1. Clicar em Time no menu lateral | A URL contém /time |
| CT-013 | Navegação | Acessar o módulo Performance | Positivo | Média | Usuário logado | 1. Clicar em Performance no menu lateral | A URL contém /performance |
| CT-014 | Admin | Buscar usuário existente | Positivo | Média | Usuário logado, página Admin aberta | 1. Digitar "Admin" no campo Username<br>2. Clicar em Search | A tabela exibe o usuário Admin |
| CT-015 | Admin | Buscar usuário inexistente | Negativo | Média | Usuário logado, página Admin aberta | 1. Digitar um texto inexistente no campo Username<br>2. Clicar em Search | O texto "No Records Found" é exibido |
| CT-016 | PIM | Cadastrar funcionário | Positivo | Alta | Usuário logado | 1. Acessar a tela Add Employee<br>2. Informar nome, sobrenome e Employee Id<br>3. Clicar em Save | O aviso "Successfully Saved" é exibido e o usuário é direcionado aos detalhes do funcionário |
| CT-017 | PIM | Buscar funcionário por Employee Id | Positivo | Média | Funcionário cadastrado (criado pelo próprio teste) | 1. Acessar a lista de funcionários<br>2. Informar o Employee Id no filtro<br>3. Clicar em Search | A lista exibe um único resultado, com o nome e o sobrenome do funcionário |

## 2. Rastreabilidade e execução

**Última execução:** AAAA-MM-DD, Cypress 16.2.0

| ID | Arquivo de automação | Título do teste no código | Resultado |
|---|---|---|---|
| CT-001 | [login.cy.js](../automacao-cypress/cypress/e2e/login.cy.js) | CT-001: login - success | ⬜ |
| CT-002 | [login.cy.js](../automacao-cypress/cypress/e2e/login.cy.js) | CT-002: login - fail | ⬜ |
| CT-003 | [login.cy.js](../automacao-cypress/cypress/e2e/login.cy.js) | CT-003: login - fail with wrong password | ⬜ |
| CT-004 | [login.cy.js](../automacao-cypress/cypress/e2e/login.cy.js) | CT-004: login - fail with empty fields | ⬜ |
| CT-005 | [login.cy.js](../automacao-cypress/cypress/e2e/login.cy.js) | CT-005: logout - success | ⬜ |
| CT-006 | [myInfo.cy.js](../automacao-cypress/cypress/e2e/myInfo.cy.js) | CT-006: User info update - success | ⬜ |
| CT-007 | [myInfo.cy.js](../automacao-cypress/cypress/e2e/myInfo.cy.js) | CT-007: User info update - first name required | ⬜ |
| CT-008 | [myInfo.cy.js](../automacao-cypress/cypress/e2e/myInfo.cy.js) | CT-008: User info update - data persists after reload | ⬜ |
| CT-009 | [navigation.cy.js](../automacao-cypress/cypress/e2e/navigation.cy.js) | CT-009: navigation - Admin | ⬜ |
| CT-010 | [navigation.cy.js](../automacao-cypress/cypress/e2e/navigation.cy.js) | CT-010: navigation - PIM | ⬜ |
| CT-011 | [navigation.cy.js](../automacao-cypress/cypress/e2e/navigation.cy.js) | CT-011: navigation - Leave | ⬜ |
| CT-012 | [navigation.cy.js](../automacao-cypress/cypress/e2e/navigation.cy.js) | CT-012: navigation - Time | ⬜ |
| CT-013 | [navigation.cy.js](../automacao-cypress/cypress/e2e/navigation.cy.js) | CT-013: navigation - Performance | ⬜ |
| CT-014 | [admin.cy.js](../automacao-cypress/cypress/e2e/admin.cy.js) | CT-014: admin - search existing user | ⬜ |
| CT-015 | [admin.cy.js](../automacao-cypress/cypress/e2e/admin.cy.js) | CT-015: admin - search non-existent user | ⬜ |
| CT-016 | [pim.cy.js](../automacao-cypress/cypress/e2e/pim.cy.js) | CT-016: pim - add employee | ⬜ |
| CT-017 | [pim.cy.js](../automacao-cypress/cypress/e2e/pim.cy.js) | CT-017: pim - search employee by id | ⬜ |