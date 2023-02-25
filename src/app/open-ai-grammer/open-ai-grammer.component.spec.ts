import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAiGrammerComponent } from './open-ai-grammer.component';

describe('OpenAiGrammerComponent', () => {
  let component: OpenAiGrammerComponent;
  let fixture: ComponentFixture<OpenAiGrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAiGrammerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAiGrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
