import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProfileManagerComponent } from './data-profile-manager.component';

describe('DataProfileManagerComponent', () => {
  let component: DataProfileManagerComponent;
  let fixture: ComponentFixture<DataProfileManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProfileManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProfileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
