import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class FilterJobsService {
  filterBehaviorSub = new BehaviorSubject('newest');

  constructor() { }

  filterJobs(selection) {
    console.log('Emitting from FilterJobs Emitter...');
    this.filterBehaviorSub.next(selection);
  }
}
