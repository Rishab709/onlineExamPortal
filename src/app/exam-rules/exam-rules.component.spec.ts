import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRulesComponent } from './exam-rules.component';

describe('ExamRulesComponent', () => {
  let component: ExamRulesComponent;
  let fixture: ComponentFixture<ExamRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
