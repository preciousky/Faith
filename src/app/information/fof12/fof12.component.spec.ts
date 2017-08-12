/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fof12Component } from './fof12.component';

describe('Fof12Component', () => {
  let component: Fof12Component;
  let fixture: ComponentFixture<Fof12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fof12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fof12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
