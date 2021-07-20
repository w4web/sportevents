import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerData: any;
  public show_mobile_menu: Boolean = false;
  public show_search: Boolean = false;
  public selectedItem: any = '';

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHeaderData().subscribe((data: any) => {
      this.headerData = data;
    });
  }

  onToggle(value: any): void {
    if (this.selectedItem === value) {
      this.selectedItem = '';
    } else {
      this.selectedItem = value;
    }
  }
}
