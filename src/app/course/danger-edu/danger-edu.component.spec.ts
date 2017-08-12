/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DangerEduComponent } from './danger-edu.component';

describe('DangerEduComponent', () => {
  let component: DangerEduComponent;
  let fixture: ComponentFixture<DangerEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
