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

  it('should render p in the body', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; //Use nativeElement to query the DOM
    console.log(compiled.querySelector('div.app__main p'));
    expect(compiled.querySelector('div.app__main p').textContent).toContain('This is the body');
  }));

  it('should render p in the footer', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; //Use nativeElement to query the DOM
    console.log(compiled.querySelector('footer__text'));
    expect(compiled.querySelector('.footer__text').textContent).toContain('Place sticky footer content here.'); 
  }));
});
