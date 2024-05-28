import { Meta, Vehicle, VehicleDetail } from '../../src/app/vehicles/models';

export const vehicle: Vehicle & VehicleDetail = {
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
