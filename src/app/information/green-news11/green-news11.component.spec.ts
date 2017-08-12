/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenNews11Component } from './green-news11.component';

describe('GreenNews11Component', () => {
  let component: GreenNews11Component;
  let fixture: ComponentFixture<GreenNews11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenNews11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenNews11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
