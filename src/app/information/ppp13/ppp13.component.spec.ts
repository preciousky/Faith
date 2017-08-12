/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ppp13Component } from './ppp13.component';

describe('Ppp13Component', () => {
  let component: Ppp13Component;
  let fixture: ComponentFixture<Ppp13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppp13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
