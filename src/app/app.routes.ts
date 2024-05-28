import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'vehicles',
    loadComponent: async () => {
      const module = await import('./vehicles/components/vehicles-container/vehicles-container.component');
      return module.VehiclesContainerComponent;
    },
  },
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full',
  },
];
