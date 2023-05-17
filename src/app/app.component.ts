import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
title: string = 'app';
}
