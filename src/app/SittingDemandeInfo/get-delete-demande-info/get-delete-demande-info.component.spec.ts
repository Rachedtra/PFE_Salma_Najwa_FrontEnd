import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeleteDemandeInfoComponent } from './get-delete-demande-info.component';

describe('GetDeleteDemandeInfoComponent', () => {
  let component: GetDeleteDemandeInfoComponent;
  let fixture: ComponentFixture<GetDeleteDemandeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDeleteDemandeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeleteDemandeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
