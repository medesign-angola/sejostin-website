import { TestBed } from '@angular/core/testing';

import { BannerContentService } from './banner-content.service';

describe('BannerContentService', () => {
  let service: BannerContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
