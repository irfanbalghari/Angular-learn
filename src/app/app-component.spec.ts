import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

    it('should create App component',
    () => {
        expect(component).toBeTruthy();
    });
});