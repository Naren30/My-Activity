import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdelhiComponent } from './newdelhi.component';

describe('NewdelhiComponent', () => {
  let component: NewdelhiComponent;
  let fixture: ComponentFixture<NewdelhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdelhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdelhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
