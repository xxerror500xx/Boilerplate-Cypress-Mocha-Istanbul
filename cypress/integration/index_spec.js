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
      .contains('1[...] |')
    cy.get('Button')
      .click().click()
    cy.get('.list').children().should('have.length', 3)
      .contains('3[fizz] | Add: 3 + 3 = 6 | Sub: 3 - 3 = 0 | Mul: 3 * 3 = 9 | Div: 3 / 3 = 1 |')
  })
})
