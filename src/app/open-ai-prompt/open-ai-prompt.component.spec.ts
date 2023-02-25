import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAiPromptComponent } from './open-ai-prompt.component';

describe('OpenAiPromptComponent', () => {
  let component: OpenAiPromptComponent;
  let fixture: ComponentFixture<OpenAiPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAiPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAiPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
