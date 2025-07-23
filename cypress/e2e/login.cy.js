describe('Login', () => {
  beforeEach(()=>{
    cy.visit(Cypress.env('URL'))
  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //cy.visit('http://localhost:4000/')

    cy.fazerLoginComCredenciaisValidas()
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })


  it.only('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //cy.visit('http://localhost:4000/')
    cy.fazerLoginComCredenciaisInvalidas()
    cy.verificaMensagemToast('Erro no login. Tente novamente.')
  })

})