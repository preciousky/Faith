/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EduInfo3Component } from './edu-info3.component';

describe('EduInfo3Component', () => {
  let component: EduInfo3Component;
  let fixture: ComponentFixture<EduInfo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduInfo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
