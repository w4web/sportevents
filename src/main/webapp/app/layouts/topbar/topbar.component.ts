import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  public isNav = false;

  constructor(public commonService: CommonService, public translate: TranslateService) {
    translate.setDefaultLang('English');
  }

  ngOnInit(): void {}
}
