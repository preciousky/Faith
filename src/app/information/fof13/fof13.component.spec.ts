/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fof13Component } from './fof13.component';

describe('Fof13Component', () => {
  let component: Fof13Component;
  let fixture: ComponentFixture<Fof13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fof13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fof13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
