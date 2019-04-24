import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcredsComponent } from './listcreds.component';

describe('ListcredsComponent', () => {
  let component: ListcredsComponent;
  let fixture: ComponentFixture<ListcredsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcredsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
