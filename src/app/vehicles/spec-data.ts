import { Meta, Vehicle, VehicleDetail } from './models';

export const vehicles: Vehicle[] = [
  {
    id: 'aa',
    name: 'AA',
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
  },
  {
    id: 'ab',
    name: 'AB',
    modelYear: 'a1',
    apiUrl: '/api/vehicles/ab',
    media: [
      {
        name: 'vehicle',
        url: '/images/16x9/ab_a1.jpg',
      },
      {
        name: 'vehicle',
        url: '/images/1x1/ab_a1.jpg',
      },
    ],
  },
  {
    id: 'ac',
    name: 'AC',
    modelYear: 'a1',
    apiUrl: '/api/vehicles/ac',
    media: [
      {
        name: 'vehicle',
        url: '/images/16x9/ac_a1.jpg',
      },
      {
        name: 'vehicle',
        url: '/images/1x1/ac_a1.jpg',
      },
    ],
  },
];

export const vehicleDetails: Record<string, VehicleDetail> = {
  aa: {
    id: 'aa',
    description: 'Lorem ipsum dolor sit amet',
    price: '£99,999',
    meta: {} as Meta,
  },
  ab: {
    id: 'ab',
    description: 'Lorem ipsum dolor sit amet',
    price: '£99,999',
    meta: {} as Meta,
  },
  ac: {
    id: 'ac',
    description: 'Lorem ipsum dolor sit amet',
    price: '£99,999',
    meta: {} as Meta,
  },
};

export const expected = vehicles.map((vehicle: Vehicle) =>
  Object.assign({}, vehicle, vehicleDetails[vehicle.id])
);
