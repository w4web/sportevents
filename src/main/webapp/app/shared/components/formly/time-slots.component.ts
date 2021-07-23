import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'timeSlots',
  template: `
    <div class="form-group">
      <div class="timeSlotWrap">
        <label>Available time slots</label>
        <input hidden class="form-control" [formControl]="formControl" [formlyAttributes]="field" />
        <div class="timeSlotInner">
          <button [class.active]="currentActive == '09:00'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            09:00
          </button>
          <button [class.active]="currentActive == '09:30'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            09:30
          </button>
          <button [class.active]="currentActive == '10:00'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            10:00
          </button>
          <button [class.active]="currentActive == '10:30'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            10:30
          </button>
          <button [class.active]="currentActive == '11:00'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            11:00
          </button>
          <button [class.active]="currentActive == '11:30'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            11:30
          </button>
          <button [class.active]="currentActive == '12:00'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            12:00
          </button>
          <button [class.active]="currentActive == '12:30'" (click)="onTimeSelect($event)" type="button" class="btn btn-outline-secondary">
            12:30
          </button>
        </div>
      </div>
    </div>
  `,
})
export class TimeSlotsComponent extends FieldType implements OnInit {
  formControl: any;
  currentActive: any;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onTimeSelect(e: any): void {
    this.currentActive = e.target.innerText;
    this.formControl.setValue(e.target.innerText);
  }
}
