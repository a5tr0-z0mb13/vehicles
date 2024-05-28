import { TestBed } from '@angular/core/testing';

import { Media } from '../models';
import { MediaSourcePipe } from './media-src.pipe';

describe('MediaSourcePipe', () => {
  let pipe: MediaSourcePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaSourcePipe],
    });

    pipe = TestBed.inject(MediaSourcePipe);
  });

  describe('injector', () => {
    it('should provide an instance of the pipe', () => {
      expect(pipe).toBeTruthy();
    });
  });

  describe('transform', () => {
    it("should extract the src to the vehicle's image", () => {
      const media: Media = {
        name: 'vehicle',
        url: '/images/16x9/aa_a1.jpg',
      };

      const src: string = 'assets/images/16x9/aa_a1.jpg';

      expect(pipe.transform(media)).toEqual(src);
    });
  });
});
