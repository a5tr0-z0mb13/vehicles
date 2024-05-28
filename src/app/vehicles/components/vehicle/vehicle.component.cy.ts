import { Meta, Vehicle, VehicleDetail } from '../../models';
import { VehicleComponent } from './vehicle.component';

describe('VehicleComponent', () => {
  const vehicle: Vehicle & VehicleDetail = {
    id: 'aa',
    name: 'AA',
    description: 'Lorem ipsum dolor sit amet',
    modelYear: 'a1',
    apiUrl: '/api/vehicles/aa',
    media: [
      {
        name: 'vehicle',
        url: '/images/16x9/aa_a1.jpg',
      },
      {
        name: 'vehicle',
        url: '/images/1x1/aa_a1.jpg',
      },
    ],
    price: '£99,999',
    meta: {} as Meta,
  };

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
