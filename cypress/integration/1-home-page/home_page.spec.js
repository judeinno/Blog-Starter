/// <reference types="cypress" />

context('Test home page', () => {
  beforeEach(function () {
    cy.visit('')
    cy.fixture('home_page.json').then((data) => {
      this.siteData = data
    })
  })

  it('Test title', function () {
    cy.getElementByIndex('.container', 1).within(() => {
      cy.get('h1').first()
        .should('have.text', this.siteData.siteHeading)
      cy.get('h4').should('exist')
      cy.get('h4').first()
        .should('have.text', this.siteData.siteDesc)
      cy.get('h4').first().then(() => {
        cy.get('a').should('have.attr', 'href')
        .and('include', 'https://nextjs.org/')
      })
    })
  })

  it('Verify that all images have a src', () => {
    cy.get('img').should('have.attr', 'src').and('contain.value')
  })

  it('Verify that all paragraphs have text', () => {
    cy.get('p').should('contain.text')
  })

  it('Verify that all sub titles contain text have text', () => {
    cy.get('.text-lg').should('contain.text')
  })
  
})

// cy.url().should('include', 'posts/dynamic-routing')