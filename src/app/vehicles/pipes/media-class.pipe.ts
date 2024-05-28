import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../models';

/**
 * Generates an appropriate class for the vehicle image.
 */
@Pipe({
  name: 'mediaClass',
  standalone: true,
})
export class MediaClassPipe implements PipeTransform {
  transform(media: Media): string {
    return `vehicle__image--${media.url.split('/').splice(2, 1)[0]}`;
  }
}
