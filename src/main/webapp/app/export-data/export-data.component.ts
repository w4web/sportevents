import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExportToCSV } from '@molteni/export-csv';
import { DataService } from 'app/shared/services/data.service';
import { ListData } from 'app/shared/model/listData.model';

@Component({
  selector: 'jhi-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExportDataComponent implements OnInit {
  public TLData!: ListData[];
  public closeResult!: string;
  public exporter = new ExportToCSV();
  public allKeys!: any[];
  public _allKeys!: any[];

  constructor(public dataService: DataService, protected modalService: NgbModal) {}

  ngOnInit(): void {
    this.dataService.getTLData().subscribe((data: any) => {
      this.TLData = data;
    });
  }

  getKeys(): void {
    this.allKeys = Object.keys(this.TLData[0]);
    this._allKeys = Object.keys(this.TLData[0]);
  }

  exportCsvModal(content: any): void {
    this.modalService.open(content, { windowClass: 'export-modal', centered: true });
    this.getKeys();
  }

  exportToCsv(): void {
    this.exporter.exportColumnsToCSV(this.TLData, 'all_data', this.allKeys);
  }

  checkToAdd(ev: any): void {
    const keyItem = ev.target.value;
    if (ev.target.checked) {
      if (!this.allKeys.includes(keyItem)) {
        this.allKeys.push(keyItem);
      }
    } else {
      if (this.allKeys.includes(keyItem)) {
        const index = this.allKeys.indexOf(keyItem);
        if (index > -1) {
          this.allKeys.splice(index, 1);
        }
      }
    }
  }
}
