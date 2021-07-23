import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { EventsService } from '../events.service';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'jhi-update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  editForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  isSaving = false;
  isAdd = true;

  constructor(private router: Router, protected eventsService: EventsService, protected activatedRoute: ActivatedRoute) {
    this.eventsService.getEventFields().subscribe((fields: any) => {
      this.editForm = new FormGroup({});
      this.fields = fields;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ event }) => {
      this.updateForm(event);
      if (event.id > 0) {
        this.isAdd = false;
      }
    });
  }

  updateForm(event: any): void {
    this.model = event;
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    // console.log("Form data", this.model);
    this.isSaving = true;
    const event = this.createFromForm();
    if (event.id !== undefined) {
      this.subscribeToSaveResponse(this.eventsService.update(event));
    } else {
      this.subscribeToSaveResponse(this.eventsService.create(event));
    }
  }

  private createFromForm(): any {
    return this.model;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<any>>): void {
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
