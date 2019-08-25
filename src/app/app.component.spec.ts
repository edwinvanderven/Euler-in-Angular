import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'euler-in-angular'`, () => {
    expect(app.title).toEqual('euler-in-angular');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to euler-in-angular!');
  });

  it('should set the showAnswersLookup to true for the provided number', () => {
    expect(app.shouldShowAnswer(3)).toBeFalsy();
    app.onHiddenTextClick(3);
    expect(app.shouldShowAnswer(3)).toBeTruthy();
  });
});
