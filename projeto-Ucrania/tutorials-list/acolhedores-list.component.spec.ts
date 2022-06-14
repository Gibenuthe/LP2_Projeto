import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcolhedoresListComponent } from './acolhedores-list.component';

describe('AcolhedoresListComponent', () => {
  let component: AcolhedoresListComponent;
  let fixture: ComponentFixture<AcolhedoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcolhedoresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcolhedoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
