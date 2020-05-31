import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateleadsComponent } from './createleads.component';

describe('CreateleadsComponent', () => {
  let component: CreateleadsComponent;
  let fixture: ComponentFixture<CreateleadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateleadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
