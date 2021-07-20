import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { TrainingService } from './training.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITraining } from '../../shared/model/training.model';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'jhi-training-update',
  templateUrl: './training-update.component.html',
})
export class TrainingUpdateComponent implements OnInit, OnDestroy {
  editForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  calcEditForm = new FormGroup({});
  calcModel: any = {};
  calcOptions: FormlyFormOptions = {};
  calcFields: FormlyFieldConfig[] = [];

  isSaving = false;
  isAdd = true;

  isShowCalculate = false;

  constructor(
    private router: Router,
    public commonService: CommonService,
    protected trainingService: TrainingService,
    protected activatedRoute: ActivatedRoute
  ) {
    this.trainingService.getTrainingFields().subscribe((fields: any) => {
      this.editForm = new FormGroup({});
      this.fields = fields;
    });

    this.trainingService.getCalcFields().subscribe((fields: any) => {
      this.calcEditForm = new FormGroup({});
      this.calcFields = fields;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ training }) => {
      this.updateForm(training);
      if (training.id > 0) {
        this.isAdd = false;
      }
    });

    this.commonService.isBgWhite = true;
  }

  ngOnDestroy(): void {
    this.commonService.isBgWhite = false;
  }

  updateForm(training: ITraining): void {
    this.model = training;
  }

  previousState(): void {
    window.history.back();
  }

  calculate(): void {
    this.isShowCalculate = !this.isShowCalculate;
  }

  save(): void {
    this.isSaving = true;
    const training = this.createFromForm();
    if (training.id !== undefined) {
      this.subscribeToSaveResponse(this.trainingService.update(training));
    } else {
      this.subscribeToSaveResponse(this.trainingService.create(training));
    }
  }

  private createFromForm(): ITraining {
    return this.model;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITraining>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
