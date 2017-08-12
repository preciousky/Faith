/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenNews12Component } from './green-news12.component';

describe('GreenNews12Component', () => {
  let component: GreenNews12Component;
  let fixture: ComponentFixture<GreenNews12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenNews12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenNews12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
