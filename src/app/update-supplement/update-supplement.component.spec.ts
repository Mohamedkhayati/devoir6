import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupplementComponent } from './update-supplement.component';

describe('UpdateSupplementComponent', () => {
  let component: UpdateSupplementComponent;
  let fixture: ComponentFixture<UpdateSupplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSupplementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
