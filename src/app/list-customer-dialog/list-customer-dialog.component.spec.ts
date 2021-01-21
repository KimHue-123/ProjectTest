import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerDialogComponent } from './list-customer-dialog.component';

describe('ListCustomerDialogComponent', () => {
  let component: ListCustomerDialogComponent;
  let fixture: ComponentFixture<ListCustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
