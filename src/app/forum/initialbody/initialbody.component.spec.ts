/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InitialbodyComponent } from './initialbody.component';

describe('InitialbodyComponent', () => {
  let component: InitialbodyComponent;
  let fixture: ComponentFixture<InitialbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
