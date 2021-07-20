import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public footerData: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFooterData().subscribe((data: any) => {
      this.footerData = data;
    });
  }
}
