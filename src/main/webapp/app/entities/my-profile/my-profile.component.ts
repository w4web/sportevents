import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { MyProfileService } from './my-profile.service';
import { Athlete, IAthlete } from '../../shared/model/athlete.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'jhi-my-profile',
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent implements OnInit, OnDestroy {
  editForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  isSaving = false;

  constructor(
    private router: Router,
    public commonService: CommonService,
    public myProfileService: MyProfileService,
    protected activatedRoute: ActivatedRoute
  ) {
    this.myProfileService.getProfileFields().subscribe((fields: any) => {
      this.editForm = new FormGroup({});
      this.fields = fields;
    });
  }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(({ athlete }) => {
    //   this.updateForm(athlete);
    // });
    this.commonService.isBgWhite = true;
  }

  ngOnDestroy(): void {
    this.commonService.isBgWhite = false;
  }

  // updateForm(athlete: IAthlete): void {
  //   this.model = athlete;
  // }

  save(): void {
    // console.log('data', this.model);
    this.isSaving = true;
    const athlete = this.createFrom();
    this.subscribeToSaveResponse(this.myProfileService.create(athlete));
  }

  logout(): void {}

  private createFrom(): IAthlete {
    return this.model;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAthlete>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
