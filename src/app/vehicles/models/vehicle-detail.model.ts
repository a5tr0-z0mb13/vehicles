import { Meta } from './meta.model';

export interface VehicleDetail {
  id: string;
  description: string;
  price?: string;
  meta: Meta;
}
