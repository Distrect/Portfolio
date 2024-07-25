import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionheadingComponent } from './sectionheading.component';

describe('SectionheadingComponent', () => {
  let component: SectionheadingComponent;
  let fixture: ComponentFixture<SectionheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionheadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
