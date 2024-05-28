import { vehicle } from '../../../../../cypress/fixtures';

import { VehicleComponent } from './vehicle.component';

describe('VehicleComponent', () => {
  it('should display the vehicle name, price and description and an appropriate image, depending on the viewport', () => {
    cy.mount(VehicleComponent, {
      imports: [VehicleComponent],
      componentProperties: {
        vehicle: vehicle
      }
    });

    // By default the viewport will be 500px by 500px for component testing, so the 16x9 image should not be visible
    cy.get('.vehicle__image')
      .find('img')
      .eq(0)
      .should('have.class', 'vehicle__image--16x9')
      .should('not.be.visible');

    // ...and the 1x1 image should be visible
    cy.get('.vehicle__image')
      .find('img')
      .eq(1)
      .should('have.class', 'vehicle__image--1x1')
      .should('be.visible');

    cy.get('.vehicle__content .vehicle__name').should('have.text', 'AA');
    cy.get('.vehicle__content .vehicle__price').should('have.text', 'From £99,999');
    cy.get('.vehicle__content .vehicle__description').should('have.text', 'Lorem ipsum dolor sit amet');
  });
});
