/// <reference types="cypress" />
describe('page', {
  defaultCommandTimeout: 100
}, () => {
  it('passes with cy.contains() and well-formed table', () => {
    cy.visit('valid-table.html')

    cy.contains('ul figcaption', 'hello')
    const theRegex = new RegExp(`${Cypress._.escapeRegExp('DBU.VR.1')}`)
    cy.contains('DBU.VR.1').should('be.visible') 
    cy.contains(theRegex).should('be.visible')
    cy.contains('a', theRegex).should('be.visible')
    cy.contains('[data-cy=table_aandachtspunten]', theRegex).should('be.visible')
    cy.contains('[data-cy=table_aandachtspunten] tr', theRegex).should('be.visible')
    cy.contains('[data-cy=table_aandachtspunten] tr a', theRegex).should('be.visible')
  })

  it('some will fail on a malformed table', () => {
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
  it('fails the same with cy.get()', () => {
    cy.visit('invalid-table.html')
    cy.get('[data-cy=table_aandachtspunten]').should('be.visible')
    cy.get('[data-cy=table_aandachtspunten] tr').should('be.visible') 
    cy.get('[data-cy=table_aandachtspunten] tr a').should('be.visible') 
  })
  it('passes with cy.get() on well-formed table', () => {
    cy.visit('valid-table.html')
    cy.get('[data-cy=table_aandachtspunten]').should('be.visible')
    cy.get('[data-cy=table_aandachtspunten] tr').should('be.visible') 
    cy.get('[data-cy=table_aandachtspunten] tr a').should('be.visible') 
  })
})
