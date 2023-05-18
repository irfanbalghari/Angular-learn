import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from "./app.component"
import { RouterTestingModule } from '@angular/router/testing';

describe('App: Component', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, AppComponent],
        })
        .compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
       fixture.detectChanges();
    });

    it('should create app component',
    () => {
        expect(component).toBeTruthy();
    });

    it('app component should have tile app',
    () => {
        expect(component.title).toContain('app');
    });

    it('should render tile in h1 tag',
    () => {
        let compile = fixture.debugElement.nativeElement;
        expect(compile.querySelector('h1').textContent).toContain('app works!');
    });

});