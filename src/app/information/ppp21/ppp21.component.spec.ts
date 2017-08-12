/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ppp21Component } from './ppp21.component';

describe('Ppp21Component', () => {
  let component: Ppp21Component;
  let fixture: ComponentFixture<Ppp21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppp21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppp21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
