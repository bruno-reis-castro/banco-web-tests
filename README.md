# banco-web-tests

## Objetivo
Este projeto tem como objetivo demonstrar um exemplo prático de automação de testes end-to-end utilizando Cypress e JavaScript, aplicado ao fluxo de um sistema bancário web. O projeto serve como referência para organização de código, uso de custom commands e geração de relatórios automatizados.

## Componentes do Projeto
- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar a reutilização de código nos testes.
- **Mochawesome**: Geração de relatórios detalhados dos testes executados.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Testes automatizados (login, transferência, etc).
  - `cypress/fixtures/`: Dados de apoio para os testes (ex: credenciais).
  - `cypress/support/commands/`: Implementação dos custom commands.
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos
- Node.js instalado
- API do Banco e servidor do Banco WEB rodando localmente

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/bruno-reis-castro/banco-web-tests.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes
1. Certifique-se que a API do Banco e o servidor WEB estão rodando.
2. Execute os testes:
   - Modo padrão:
     ```bash
     npm test
     ```
   - Modo headed (com interface):
     ```bash
     npm run cy:headed
     ```
   - Ambiente de produção:
     ```bash
     npm run test-prod
     ```
3. Os relatórios serão gerados em `cypress/reports/html/index.html`.

## Documentação dos Testes
- **login.cy.js**: Testa o fluxo de login do usuário.
- **transferencia.cy.js**: Testa o fluxo de transferência bancária.

## Custom Commands
Os comandos personalizados estão em `cypress/support/commands/`:
- **common.js**: Comandos genéricos reutilizáveis.
- **login.js**: Comandos para automação do login.
- **transferencia.js**: Comandos para automação de transferência.

Exemplo de uso de custom command:
```js
cy.login('usuario', 'senha'); // Realiza login com credenciais
```

## Relatórios
Após a execução dos testes, acesse o relatório em:
```
cypress/reports/html/index.html
```

---

Para dúvidas ou sugestões, utilize o [GitHub Issues](https://github.com/bruno-reis-castro/banco-web-tests/issues).
