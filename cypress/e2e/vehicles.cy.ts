import { VehiclesPage } from '../pages/vehicles.page';

describe('vehicles', () => {
  const page: VehiclesPage = new VehiclesPage();

  beforeEach(() => {
    cy.visit('/vehicles');
  });

  it('should display the vehicles container', () => {
    page.getVehiclesContainer().should('be.visible');
  });

  it('should display the vehicles', () => {
    page.getVehicles().should('have.length', 5);
  });

  it('should display the appropriate vehicle image', () => {
    page.getVehicleImages(0).find('img').should('have.length', 2);

    // By default the viewport will be 1000px by 660px for end-to-end testing, so the 16x9 image should be visible
    page
      .getVehicleImages(0)
      .find('img')
      .eq(0)
      .should('have.class', 'vehicle__image--16x9')
      .should('be.visible');

    // ...and the 1x1 image should not be visible
    page
      .getVehicleImages(1)
      .find('img')
      .eq(1)
      .should('have.class', 'vehicle__image--1x1')
      .should('not.be.visible');
  });

  it('should display the vehicle name', () => {
    page.getVehicleName(0).should('have.text', 'xe');
  });

  it('should display the vehicle price', () => {
    page.getVehiclePrice(0).should('have.text', 'From £30,000');
  });

  it('should display the vehicle description', () => {
    page
      .getVehicleDescription(0)
      .should(
        'have.text',
        'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
      );
  });
});
