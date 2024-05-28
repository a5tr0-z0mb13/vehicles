export class VehiclesPage {
  public getVehiclesContainer(): Cypress.Chainable {
    return cy.get('.vehicles-container');
  }

  public getVehicles(): Cypress.Chainable {
    return cy.get('.vehicle');
  }

  public getVehicleImages(index: number): Cypress.Chainable {
    return this.getVehicles().eq(index).find('.vehicle__image');
  }

  public getVehicleName(index: number): Cypress.Chainable {
    return this.getVehicles().eq(index).find('.vehicle__content .vehicle__name');
  }

  public getVehiclePrice(index: number): Cypress.Chainable {
    return this.getVehicles().eq(index).find('.vehicle__content .vehicle__price');
  }

  public getVehicleDescription(index: number): Cypress.Chainable {
    return this.getVehicles().eq(index).find('.vehicle__content .vehicle__description');
  }
}
