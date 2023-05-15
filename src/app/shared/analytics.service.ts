import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AnalyticsService {
  count: number = 0;
  registerClick(): Counter { //{ clicked: string , count: number } {
  this.count++;
    return { clicked: 'Clicked!', count: this.count };
  }
  getClick(): Counter {
    return { clicked: 'Clicked!', count: this.count };
  }
}

export interface Counter {
  clicked: string,
   count: number
  }