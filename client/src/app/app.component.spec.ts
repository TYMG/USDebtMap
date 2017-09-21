import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('Component: App', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;

  }));

  it('should create the appComponent', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should render p in the header`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement; //Use nativeElement to query the DOM
    console.log(compiled.querySelector('header.test p'));
    expect(compiled.querySelector('header.test p').textContent).toContain('Welcome to app!');
  }));

  it('should render p in the body', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; //Use nativeElement to query the DOM
    console.log(compiled.querySelector('body.app__main p'));
    expect(compiled.querySelector('body.app__main p').textContent).toContain('This is the body');
  }));
});
