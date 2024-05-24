import { Media } from './media.model';

export interface Vehicle {
  id: string;
  name: string;
  modelYear: string;
  apiUrl: string;
  media: Media[];
}
