/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuistilistaService } from './muistilista.service';

describe('MuistilistaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuistilistaService]
    });
  });

  it('should ...', inject([MuistilistaService], (service: MuistilistaService) => {
    expect(service).toBeTruthy();
  }));
});
