import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'jhi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public TLData: any;
  public mainContent: any;

  constructor(public commonService: CommonService, public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTLData().subscribe((data: any) => {
      this.TLData = data;
    });

    this.dataService.getHomeContent().subscribe((data: any) => {
      this.mainContent = data;
    });
  }
}
