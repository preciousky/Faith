/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ppp23Component } from './ppp23.component';

describe('Ppp23Component', () => {
  let component: Ppp23Component;
  let fixture: ComponentFixture<Ppp23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppp23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
