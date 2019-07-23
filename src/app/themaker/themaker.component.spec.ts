import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemakerComponent } from './themaker.component';

describe('ThemakerComponent', () => {
  let component: ThemakerComponent;
  let fixture: ComponentFixture<ThemakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
