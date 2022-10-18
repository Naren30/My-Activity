import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearComponent } from './sear.component';

describe('SearComponent', () => {
  let component: SearComponent;
  let fixture: ComponentFixture<SearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
