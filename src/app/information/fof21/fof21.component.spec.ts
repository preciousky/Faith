/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fof21Component } from './fof21.component';

describe('Fof21Component', () => {
  let component: Fof21Component;
  let fixture: ComponentFixture<Fof21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fof21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fof21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
