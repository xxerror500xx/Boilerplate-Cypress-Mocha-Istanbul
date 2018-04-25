describe('Find local dev webserver',() => {
  it('Visits local server', () => {
    cy.visit('/')
  })
  it('Should contain specific text', () => {
    cy.contains('Hello, Cypress!')
  })
  it('Should have an interactive button', () => {
    cy.get('Button')
      .click()
    cy.get('.list')
      .contains('Clicked! 1')
    cy.get('Button')
      .click().click()
    cy.get('.list').children().should('have.length', 3)
      .contains('Clicked! 3')
  })
})
