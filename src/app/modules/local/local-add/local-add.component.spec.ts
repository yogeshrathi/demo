import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAddComponent } from './local-add.component';

describe('LocalAddComponent', () => {
  let component: LocalAddComponent;
  let fixture: ComponentFixture<LocalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
