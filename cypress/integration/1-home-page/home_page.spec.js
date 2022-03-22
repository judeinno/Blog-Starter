/// <reference types="cypress" />

describe('Test home page', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Blog desc text', () => {
    cy.get('.container').eq(1).within(() => {
      cy.get('h4').should('exist')
      cy.get('h4').first().should('have.text', 'A statically generated blog example using Next.js and Markdown.')
    })
  })

})
