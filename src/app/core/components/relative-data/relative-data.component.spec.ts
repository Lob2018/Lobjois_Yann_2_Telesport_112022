import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeDataComponent } from './relative-data.component';

describe('RelativeDataComponent', () => {
  let component: RelativeDataComponent;
  let fixture: ComponentFixture<RelativeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelativeDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
