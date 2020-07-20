describe('Titre de la suite de test', () => {
    
    it('valider les cookies', () => {
        cy.visit('/register')
        cy.get('.RNjMafdFXW-kA8xjO_G09').click() 
        cy.get('.email-signup').click()
    })
})