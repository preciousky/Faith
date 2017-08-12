/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WayComponent } from './way.component';

describe('WayComponent', () => {
  let component: WayComponent;
  let fixture: ComponentFixture<WayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
