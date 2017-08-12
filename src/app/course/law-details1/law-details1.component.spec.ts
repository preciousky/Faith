/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LawDetails1Component } from './law-details1.component';

describe('LawDetails1Component', () => {
  let component: LawDetails1Component;
  let fixture: ComponentFixture<LawDetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawDetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
