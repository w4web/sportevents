import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ProductService } from './product.service';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/model/product.model';
import { CommonService } from 'app/shared/services/common.service';
// import { ProductCategoryService } from '../product-category/product-category.service';
// import { IProductCategory } from 'app/shared/model/product-category.model';

@Component({
  selector: 'jhi-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductUpdateComponent implements OnInit, OnDestroy {
  editForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  isSaving = false;
  isAdd = true;
  // productCategories?: any[];

  constructor(
    private router: Router,
    public commonService: CommonService,
    // protected productCategoryService: ProductCategoryService,
    protected productService: ProductService,
    protected activatedRoute: ActivatedRoute
  ) {
    this.productService.getProductFields().subscribe((fields: any) => {
      this.editForm = new FormGroup({});
      this.fields = fields;
    });
  }

  ngOnInit(): void {
    // this.loadCategories();
    this.activatedRoute.data.subscribe(({ product }) => {
      this.updateForm(product);
      if (product.id > 0) {
        this.isAdd = false;
      }
    });

    this.commonService.isBgWhite = true;
  }

  ngOnDestroy(): void {
    this.commonService.isBgWhite = false;
  }

  // loadCategories(): void {
  //   this.productCategoryService.query().subscribe((res: HttpResponse<IProductCategory[]>) => {
  //     this.productCategories = res.body || [];
  //   });
  // }

  updateForm(product: IProduct): void {
    this.model = product;
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const product = this.createFromForm();
    if (product.id !== undefined) {
      this.subscribeToSaveResponse(this.productService.update(product));
    } else {
      this.subscribeToSaveResponse(this.productService.create(product));
    }
  }

  private createFromForm(): IProduct {
    return this.model;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProduct>>): void {
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
