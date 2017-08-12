/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cal1Component } from './cal-1.component';

describe('Cal1Component', () => {
  let component: Cal1Component;
  let fixture: ComponentFixture<Cal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
