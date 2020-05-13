import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeleteCategorieComponent } from './get-delete-categorie.component';

describe('GetDeleteCategorieComponent', () => {
  let component: GetDeleteCategorieComponent;
  let fixture: ComponentFixture<GetDeleteCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDeleteCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeleteCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
