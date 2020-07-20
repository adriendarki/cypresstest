describe('Titre de la suite de test', () => {
    
    it('coonection au sire web', () => {
        
        cy.visit('/register')
        cy.get('#email-signup').type('test@yopmail.com')
        cy.get('#lastName-signup').type('Test123_')
        cy.get('#password-signup').type('Test123_')
        cy.get('#input-field-input').type('0612345678')
        cy.get('[data-test="input-field-input"]').click()
    })
})