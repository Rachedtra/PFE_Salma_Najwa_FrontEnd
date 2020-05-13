import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeleteSousCategorieComponent } from './get-delete-sous-categorie.component';

describe('GetDeleteSousCategorieComponent', () => {
  let component: GetDeleteSousCategorieComponent;
  let fixture: ComponentFixture<GetDeleteSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDeleteSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeleteSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
