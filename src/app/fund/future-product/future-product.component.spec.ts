/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FutureProductComponent } from './future-product.component';

describe('FutureProductComponent', () => {
  let component: FutureProductComponent;
  let fixture: ComponentFixture<FutureProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
