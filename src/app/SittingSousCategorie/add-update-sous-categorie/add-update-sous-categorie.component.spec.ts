import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateSousCategorieComponent } from './add-update-sous-categorie.component';

describe('AddUpdateSousCategorieComponent', () => {
  let component: AddUpdateSousCategorieComponent;
  let fixture: ComponentFixture<AddUpdateSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
