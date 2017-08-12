/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WayForRightComponent } from './way-for-right.component';

describe('WayForRightComponent', () => {
  let component: WayForRightComponent;
  let fixture: ComponentFixture<WayForRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayForRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayForRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
