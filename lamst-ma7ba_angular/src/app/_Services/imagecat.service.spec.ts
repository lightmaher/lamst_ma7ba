/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImagecatService } from './imagecat.service';

describe('Service: Imagecat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagecatService]
    });
  });

  it('should ...', inject([ImagecatService], (service: ImagecatService) => {
    expect(service).toBeTruthy();
  }));
});
