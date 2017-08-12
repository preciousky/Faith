/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenNews21Component } from './green-news21.component';

describe('GreenNews21Component', () => {
  let component: GreenNews21Component;
  let fixture: ComponentFixture<GreenNews21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenNews21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenNews21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
