describe('Transferencias', () => {
    beforeEach(()=>{
        cy.visit(Cypress.env('URL'))
        cy.fazerLoginComCredenciaisValidas()
        //cy.contains('button','Entrar').click()
           
    })
    it('Deve transferir quando informo dados e valor válido', () => {
        //cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        //cy.get('@campo-conta-origem').click()
        //cy.get('@campo-conta-origem').contains('João').click()
        cy.selecionarOpcaoComboBox('conta-origem','João')
        
        //cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        //cy.get('@campo-conta-destino').click()
        //cy.get('@campo-conta-destino').contains('Maria').click()
        cy.selecionarOpcaoComboBox('conta-destino','Maria')

        cy.get('#valor').click().type('11')

        cy.contains('button','Transferir').click()

        cy.verificaMensagemToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando valor da transferencia for maior que R$5000 e não tiver token', () => {
        //cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        //cy.get('@campo-conta-origem').click()
        //cy.get('@campo-conta-origem').contains('João').click()
        cy.selecionarOpcaoComboBox('conta-origem','João')
        
        //cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        //cy.get('@campo-conta-destino').click()
        //cy.get('@campo-conta-destino').contains('Maria').click()
        cy.selecionarOpcaoComboBox('conta-destino','Maria')

        cy.get('#valor').click().type('5000')

        cy.contains('button','Transferir').click()

        cy.verificaMensagemToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })


})