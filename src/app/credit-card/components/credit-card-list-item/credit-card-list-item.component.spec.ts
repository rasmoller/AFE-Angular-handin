import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardListItemComponent } from './credit-card-list-item.component';

describe('CreditCardListItemComponent', () => {
  let component: CreditCardListItemComponent;
  let fixture: ComponentFixture<CreditCardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
