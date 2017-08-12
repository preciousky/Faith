/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ppp11Component } from './ppp11.component';

describe('Ppp11Component', () => {
  let component: Ppp11Component;
  let fixture: ComponentFixture<Ppp11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppp11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
