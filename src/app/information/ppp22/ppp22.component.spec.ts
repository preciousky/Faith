/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ppp22Component } from './ppp22.component';

describe('Ppp22Component', () => {
  let component: Ppp22Component;
  let fixture: ComponentFixture<Ppp22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppp22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppp22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
