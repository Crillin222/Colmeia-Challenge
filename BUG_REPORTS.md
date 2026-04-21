### ///// BUG REPORTS ////// ###
This file will be used to document all bugs found while testing the colmeia website.

### Error feedback on successfull login
- **Severity:** Medium
- **Observed Behavior:** Valid credentials trigger an "Incorrect credentials" error message, even though the system allows the user to proceed to the dashboard.
- **Expected Behavior:** No error message should be displayed for valid credentials.

### Database states are not saved
- **Severity:** Highest
- **Observed Behavior:** Databases are not saved on the server. Any database created will not be present on future logins. Also, archiving the database also deletes it.
- **Expected Behavior:** All database functions should be correctly saved on server.

### Colmeia Forms button leads to a blank page
- **Severity:** High
- **Observed Behavior:** Navigation to the "Colmeia Forms" section leads to a blank page with no UI elements.
- **Expected Behavior:** The page should display its corresponding forms or a "No data found" state.

### Non-functional candidate button
- **Severity:** Medium
- **Observed Behavior:** Clicking the "Candidate" button in the header does not trigger any navigation or action.
- **Expected Behavior:** The button should lead to the candidate's profile or settings page.

### Forgot you password button not clickable
- **Severity:** High
- **Observed Behavior:** Clicking the "forgot your password" button does not lead you to any recovery account page.
- **Expected Behavior:** Click the button should guide you through the steps on the recover of credentials.

---

### ///// RELATORIO DE BUGS ////// ###
Este arquivo sera usado para documentar todos os bugs encontrados durante os testes no site da Colmeia.

### Feedback de erro no login com sucesso
- **Severidade:** Media
- **Comportamento Observado:** Credenciais validas disparam uma mensagem de erro "Credenciais incorretas", embora o sistema permita que o usuario prossiga para o dashboard.
- **Comportamento Esperado:** Nenhuma mensagem de erro deve ser exibida para credenciais validas.

### Estados do banco de dados nao sao salvos
- **Severidade:** Altissima
- **Comportamento Observado:** Os bancos de dados nao sao salvos no servidor. Qualquer banco criado nao estara presente em logins futuros. Alem disso, arquivar o banco de dados tambem o exclui.
- **Comportamento Esperado:** Todas as funcoes de banco de dados devem ser salvas corretamente no servidor.

### Botao Colmeia Forms leva a uma pagina em branco
- **Severidade:** Alta
- **Comportamento Observado:** A navegacao para a secao "Colmeia Forms" leva a uma pagina em branco sem elementos de interface.
- **Comportamento Esperado:** A pagina deve exibir seus formularios correspondentes ou um estado de "Nenhum dado encontrado".

### Botao de candidato nao funcional
- **Severidade:** Media
- **Comportamento Observado:** Clicar no botao "Candidato" no cabecalho nao dispara nenhuma navegacao ou acao.
- **Comportamento Esperado:** O botao deve levar a pagina de perfil ou configuracoes do candidato.

### Botao de esqueci minha senha nao clicavel
- **Severidade:** Alta
- **Comportamento Observado:** Clicar no botao "esqueci minha senha" nao leva a nenhuma pagina de recuperacao de conta.
- **Comportamento Esperado:** Clicar no botao deve guiar o usuario atraves dos passos de recuperacao de credenciais.
