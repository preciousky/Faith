/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ppp12Component } from './ppp12.component';

describe('Ppp12Component', () => {
  let component: Ppp12Component;
  let fixture: ComponentFixture<Ppp12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppp12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
