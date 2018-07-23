/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuistilistaComponent } from './muistilista.component';

describe('MuistilistaComponent', () => {
  let component: MuistilistaComponent;
  let fixture: ComponentFixture<MuistilistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuistilistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuistilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
