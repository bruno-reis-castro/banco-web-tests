Cypress.Commands.add('verificaMensagemToast', (msg) => {
    cy.get('.toast').should('be.visible').should('have.text',msg)
})

Cypress.Commands.add('selecionarOpcaoComboBox', (labelDoCampo, opcao) => {
        cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
        cy.get(`@campo-${labelDoCampo}`).click()
        cy.get(`@campo-${labelDoCampo}`).contains(opcao).click()
 })