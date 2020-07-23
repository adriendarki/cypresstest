describe('Titre de la suite de test', () => {
    
    it('coonection au sire web', () => {
        
        cy.visit('/register')
        cy.get('#email-signin').should('have.value', 'test@yopmail.com')
        cy.get('#password-signin').should('have.value', 'Test123_')
        cy.get('#_36HxYAE3lm-VAy2DCDaFyV').click()
    })
})