/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('index.html')

    const theRegex = new RegExp(`^${Cypress._.escapeRegExp('DBU.VR.1')}$`)

    cy.contains(theRegex).should('be.visible')
    cy.contains('[data-cy=table_aandachtspunten] tr a', theRegex).should('be.visible')
    cy.contains('[data-cy=table_aandachtspunten] tr', theRegex).should('be.visible')
  })
})
