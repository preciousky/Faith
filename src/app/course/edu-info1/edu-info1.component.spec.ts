/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EduInfo1Component } from './edu-info1.component';

describe('EduInfo1Component', () => {
  let component: EduInfo1Component;
  let fixture: ComponentFixture<EduInfo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduInfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
