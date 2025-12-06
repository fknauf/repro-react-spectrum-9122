import React from 'react'
import Home from './page'

describe('<Home />', () => {
  it('can click on the plain button', () => {
    cy.mount(<Home />)

    cy.get('[data-cy="plain-btn"]').click();

    // just so we also get the leave events for the first button
    cy.get('[data-cy="clickable-area"]').click();
  });
})
