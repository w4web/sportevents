import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'valueSelect',
  template: `
    <div class="form-group">
      <label
        >{{ to.label }} <span *ngIf="showInfoIcon" (click)="openModal()" class="info-icon"><i class="fa fa-question"></i></span
      ></label>
      <div class="selector-wrap">
        <span class="select-left">
          <select class="form-control" [formControl]="formControl" [formlyAttributes]="field">
            <ng-container *ngFor="let item of to.selectOptions.options">
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
export class ValueSelectComponent extends FieldType implements OnInit {
  formControl: any;

  showInfoIcon = true;
  showModal = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
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
