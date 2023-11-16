import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListsService } from 'src/app/services/lists.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  date: string;
  temperatureC: string;
  temperatureF: string;
  summary: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})

export class ListsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary'];
  dataSource = new MatTableDataSource<PeriodicElement>();
 

  constructor(private service: ListsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllData();
    
  }

  getAllData(searchQuery: string = '') {
    this.service.getAllData(searchQuery).subscribe(
      (res: any) => {
        this.dataSource.data = this.mappingTasks(res);
      },
      (error) => {
        // Handle error
      }
    );
  }

  mappingTasks(WeatherForecast: any[]): PeriodicElement[] {
    if (!WeatherForecast || !Array.isArray(WeatherForecast)) {
      console.error('Data is undefined or not an array.', WeatherForecast);
      return []; 
    }

    return WeatherForecast.map((item: any) => {
      return {
        date: item.date,
        temperatureC: item.temperatureC,
        temperatureF: item.temperatureF,
        summary: item.summary,

      };
    });
  }
  search(event:any){
    this.getAllData(event.target.value)
  }
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
  getvalidcertificate(){}
  getinvalidcertificate(){}
  getallcertificate(){

  }
}
