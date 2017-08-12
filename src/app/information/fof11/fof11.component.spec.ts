/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fof11Component } from './fof11.component';

describe('Fof11Component', () => {
  let component: Fof11Component;
  let fixture: ComponentFixture<Fof11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fof11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fof11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
