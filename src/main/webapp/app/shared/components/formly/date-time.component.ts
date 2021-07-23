import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'dateTime',
  template: `
    <div class="form-group">
      <label>{{ to.label }}</label>
      <div class="input-group">
        <input
          class="form-control field-with-icon-right"
          (dateSelect)="onDateSelect($event)"
          [formControl]="formControl"
          [formlyAttributes]="field"
          placeholder="{{ to.placeholder }}"
          ngbDatepicker
          #d="ngbDatepicker"
        />
        <div class="input-group-append clickable" (click)="d.toggle()">
          <i class="input-group-text far fa-calendar-alt"></i>
        </div>
      </div>
      <div *ngIf="showTimeSlot" class="timeSlotWrap">
        <label>Available time slots</label>
        <div class="timeSlotInner">
          <button [class.active]="currentActive == 0" (click)="onTimeSelect(0)" type="button" class="btn btn-outline-secondary">
            09:00
          </button>
          <button [class.active]="currentActive == 1" (click)="onTimeSelect(1)" type="button" class="btn btn-outline-secondary">
            09:30
          </button>
          <button [class.active]="currentActive == 2" (click)="onTimeSelect(2)" type="button" class="btn btn-outline-secondary">
            10:00
          </button>
          <button [class.active]="currentActive == 3" (click)="onTimeSelect(3)" type="button" class="btn btn-outline-secondary">
            10:30
          </button>
          <button [class.active]="currentActive == 4" (click)="onTimeSelect(4)" type="button" class="btn btn-outline-secondary">
            11:00
          </button>
          <button [class.active]="currentActive == 5" (click)="onTimeSelect(5)" type="button" class="btn btn-outline-secondary">
            11:30
          </button>
          <button [class.active]="currentActive == 6" (click)="onTimeSelect(6)" type="button" class="btn btn-outline-secondary">
            12:00
          </button>
          <button [class.active]="currentActive == 7" (click)="onTimeSelect(7)" type="button" class="btn btn-outline-secondary">
            12:30
          </button>
        </div>
      </div>
    </div>
  `,
})
export class DateTimeComponent extends FieldType implements OnInit {
  formControl: any;
  showTimeSlot = false;
  currentActive: any;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onDateSelect(e: any): void {
    this.showTimeSlot = true;
  }

  onTimeSelect(num: any): void {
    this.currentActive = num;
  }
}
