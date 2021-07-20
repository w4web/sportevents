import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import Util from '../../helper/util';

@Component({
  selector: 'number-select',
  template: `
    <div class="form-group">
      <label
        >{{ to.label }} <span *ngIf="showInfoIcon" (click)="openModal()" class="info-icon"><i class="fa fa-question"></i></span
      ></label>
      <div class="selector-wrap">
        <span class="select-left">
          <select class="form-control" [formControl]="formControl" [formlyAttributes]="field">
            <ng-container *ngFor="let item of selectValues">
              <option [value]="item.value">{{ item.label }}</option>
            </ng-container>
          </select>
        </span>
        <span class="end-slot">
          {{ to.unit }}
        </span>
      </div>

      <div class="appModalWrap" [class.show]="showModal" (click)="closeModal()"></div>
      <div class="appModal" [class.show]="showModal">
        <div class="modal-content">
          <div class="modal-content-inner" [innerHtml]="to.helpInfo"></div>
        </div>
        <div class="modal-footer text-right">
          <button class="btn btn-primary" (click)="closeModal()">Close</button>
        </div>
      </div>
    </div>
  `,
})
export class NumberSelectComponent extends FieldType implements OnInit {
  formControl: any;
  selectValues!: any[];

  showInfoIcon = true;
  showModal = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    const startValue = this.to.selectOptions.startValue;
    const endValue = this.to.selectOptions.endValue;
    const step = this.to.selectOptions.step;
    this.selectValues = Util.createOptions(startValue, endValue, step);

    if (this.to.helpInfo === '' || this.to.helpInfo === undefined) {
      this.showInfoIcon = false;
    }
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
