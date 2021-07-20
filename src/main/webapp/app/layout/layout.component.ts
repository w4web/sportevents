import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class SingleLayoutComponent implements OnInit {
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {}
}
