/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cal2Component } from './cal-2.component';

describe('Cal2Component', () => {
  let component: Cal2Component;
  let fixture: ComponentFixture<Cal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
