/// <reference types="cypress" />
describe('page', () => {
  it('will pass', () => {
    cy.visit('valid-table.html')

    const theRegex = new RegExp(`${Cypress._.escapeRegExp('DBU.VR.1')}`)
    cy.contains('DBU.VR.1').should('be.visible') // passes 
    cy.contains(theRegex).should('be.visible') // passes
    cy.contains('a', theRegex).should('be.visible') // passes
    cy.contains('[data-cy=table_aandachtspunten]', theRegex).should('be.visible') // passes
    cy.contains('[data-cy=table_aandachtspunten] tr', theRegex).should('be.visible') // fails
    cy.contains('[data-cy=table_aandachtspunten] tr a', theRegex).should('be.visible') // fails
  })

  it('some will fail', () => {
    cy.visit('invalid-table.html')

    const theRegex = new RegExp(`${Cypress._.escapeRegExp('DBU.VR.1')}`)
    cy.contains('DBU.VR.1').should('be.visible') 
    cy.contains(theRegex).should('be.visible')
    cy.contains('a', theRegex).should('be.visible') 
    cy.contains('[data-cy=table_aandachtspunten]', theRegex).should('be.visible')
    cy.contains('[data-cy=table_aandachtspunten] tr', theRegex).should('be.visible') 
    cy.contains('[data-cy=table_aandachtspunten] tr a', theRegex).should('be.visible') 
  })

  it('fails the same without regex', () => {
    cy.visit('invalid-table.html')

    const theString = 'DBU.VR.1'
    cy.contains(theString).should('be.visible') 
    cy.contains(theString).should('be.visible')
    cy.contains('a', theString).should('be.visible') 
    cy.contains('[data-cy=table_aandachtspunten]', theString).should('be.visible')
    cy.contains('[data-cy=table_aandachtspunten] tr', theString).should('be.visible') 
    cy.contains('[data-cy=table_aandachtspunten] tr a', theString).should('be.visible') 
  })
})
