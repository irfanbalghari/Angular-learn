import { Component } from '@angular/core';

import { AnalyticsService, Counter } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}
result: Counter | undefined;
count: number = 0;
  onClick() {
    this.result = this.analyticsService.registerClick();
    console.log(this.result);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.result = this.analyticsService.getClick();
  }
}
