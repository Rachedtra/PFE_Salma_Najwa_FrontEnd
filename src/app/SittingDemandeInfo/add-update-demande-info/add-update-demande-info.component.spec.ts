import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDemandeInfoComponent } from './add-update-demande-info.component';

describe('AddUpdateDemandeInfoComponent', () => {
  let component: AddUpdateDemandeInfoComponent;
  let fixture: ComponentFixture<AddUpdateDemandeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDemandeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDemandeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
