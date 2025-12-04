import React from 'react'
import Home from './page'

describe('<Home />', () => {
  it('can accept a button click', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)

    cy.get('[data-cy="plain-btn"]').click(); // this works
    cy.get('[data-cy="spectrum-btn"]').click(); // this errors in firefox
  })
})
