/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cal3Component } from './cal-3.component';

describe('Cal3Component', () => {
  let component: Cal3Component;
  let fixture: ComponentFixture<Cal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
