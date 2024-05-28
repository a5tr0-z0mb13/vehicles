import { TestBed } from '@angular/core/testing';

import { MediaClassPipe } from './media-class.pipe';
import { Media } from '../models';

describe('MediaClassPipe', () => {
  let pipe: MediaClassPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaClassPipe],
    });

    pipe = TestBed.inject(MediaClassPipe);
  });

  describe('injector', () => {
    it('should provide an instance of the pipe', () => {
      expect(pipe).toBeTruthy();
    });
  });

  describe('transform', () => {
    it('should generate an appropriate class for the vehicle image', () => {
      const specData: { media: Media; expected: string }[] = [
        {
          media: {
            name: 'vehicle',
            url: '/images/16x9/aa_a1.jpg',
          },
          expected: 'vehicle__image--16x9',
        },
        {
          media: {
            name: 'vehicle',
            url: '/images/1x1/aa_a1.jpg',
          },
          expected: 'vehicle__image--1x1',
        },
      ];

      specData.forEach(({ media, expected }) => {
        expect(pipe.transform(media)).toEqual(expected);
      });
    });
  });
});
