/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForDangerComponent } from './for-danger.component';

describe('ForDangerComponent', () => {
  let component: ForDangerComponent;
  let fixture: ComponentFixture<ForDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
