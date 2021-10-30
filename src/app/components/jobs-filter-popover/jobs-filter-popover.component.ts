import { Component, Input, OnInit } from '@angular/core';
import { IonRadioGroup, PopoverController } from '@ionic/angular';
import { FilterJobsService } from 'src/app/emitters/filter-jobs.service';

@Component({
  selector: 'app-jobs-filter-popover',
  templateUrl: './jobs-filter-popover.component.html',
  styleUrls: ['./jobs-filter-popover.component.scss'],
})
export class JobsFilterPopoverComponent implements OnInit {
  @Input("filter") filter;
  // Initial Filter applied to each no page will be the newest filter.
  selection = null;
  filterFromJobsPage;
  constructor(
    private popoverController: PopoverController,
    private filterJobsService: FilterJobsService,
    ) { }

  ngOnInit() {
    this.selection = this.filter;
    return;
  }
  selectOption(e) {
    this.selection = e.detail.value;
    console.log(this.selection);
    this.dismiss();
    return;
  }
  dismiss() {
    this.filterJobsService.filterBehaviorSub.next(this.selection);
    return this.popoverController.dismiss({
      data: this.selection
    });
  }

}
