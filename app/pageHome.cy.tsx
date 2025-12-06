import React from 'react'
import Home from './page'

describe('<Home />', () => {
  it('can click on the plain button', () => {
    cy.mount(<Home />)

    cy.get('[data-cy="plain-btn"]').click(); // this works
  });

  it('can click on the spectrum button', () => {
    cy.mount(<Home />)

    cy.get('[data-cy="spectrum-btn"]').click(); // this errors in firefox
  });

  it('can clickon both buttons', () => {
    cy.mount(<Home />)

    cy.get('[data-cy="plain-btn"]').click(); // this works
    cy.get('[data-cy="spectrum-btn"]').click(); // this errors in firefox
  });
})
