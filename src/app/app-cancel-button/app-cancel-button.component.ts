import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-cancel-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-cancel-button.component.html',
  styleUrls: ['./app-cancel-button.component.css']
})
export class AppCancelButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
