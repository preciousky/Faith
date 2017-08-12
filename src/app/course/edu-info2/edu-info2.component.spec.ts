/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EduInfo2Component } from './edu-info2.component';

describe('EduInfo2Component', () => {
  let component: EduInfo2Component;
  let fixture: ComponentFixture<EduInfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduInfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
