import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../models';

/**
 * Extracts the src to the vehicle's image.
 */
@Pipe({
  name: 'mediaSrc',
  standalone: true,
})
export class MediaSourcePipe implements PipeTransform {
  transform(media: Media): string {
    return `assets${media.url}`;
  }
}
