import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDefaultComponent } from './angular-default.component';

describe('AngularDefaultComponent', () => {
  let component: AngularDefaultComponent;
  let fixture: ComponentFixture<AngularDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'api-ui'`, () => {
    const fixture = TestBed.createComponent(AngularDefaultComponent);
    const ang = fixture.componentInstance;
    expect(ang.title).toEqual('api-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularDefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('api-ui app is running!');
  });
});
