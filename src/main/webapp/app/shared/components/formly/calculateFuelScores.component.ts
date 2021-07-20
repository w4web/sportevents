import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'CalculateFuelScores',
  template: `
    <div class="form-group">
      <div class="row">
        <div class="col-sm-10">
          <div class="card">
            <div class="card-header">
              Your Fuel scores during this training session.
              <span (click)="openModal()" class="info-icon"><i class="fa fa-question"></i></span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <label>Your Sweat rate</label>
                  <div class="input-wrap">
                    <span class="input-left">
                      <input
                        type="text"
                        class="form-control"
                        [disabled]="true"
                        readonly
                        [formControl]="formControl"
                        [formlyAttributes]="field"
                      />
                    </span>
                    <span class="end-slot"> l/uur </span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <label>Your Fuel Score</label>
                  <div class="input-wrap">
                    <span class="input-left">
                      <input
                        type="text"
                        class="form-control"
                        [disabled]="true"
                        readonly
                        [formControl]="formControl"
                        [formlyAttributes]="field"
                      />
                    </span>
                    <span class="end-slot"> % </span>
                  </div>
                </div>
              </div>

              <div class="form-btns mt-4">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
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
      </div>
    </div>
  `,
})
export class CalculateFuelScoresComponent extends FieldType implements OnInit {
  formControl: any;
  showModal = false;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
