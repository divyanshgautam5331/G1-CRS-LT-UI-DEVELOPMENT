import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratereportcardComponent } from './generatereportcard.component';

describe('GeneratereportcardComponent', () => {
  let component: GeneratereportcardComponent;
  let fixture: ComponentFixture<GeneratereportcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratereportcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratereportcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
