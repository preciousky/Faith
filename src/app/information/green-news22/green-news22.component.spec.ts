/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenNews22Component } from './green-news22.component';

describe('GreenNews22Component', () => {
  let component: GreenNews22Component;
  let fixture: ComponentFixture<GreenNews22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenNews22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenNews22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
