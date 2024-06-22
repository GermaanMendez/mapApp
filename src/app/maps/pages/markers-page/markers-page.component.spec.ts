import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersPAgeComponent } from './markers-page.component';

describe('MarkersPAgeComponent', () => {
  let component: MarkersPAgeComponent;
  let fixture: ComponentFixture<MarkersPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkersPAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkersPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
