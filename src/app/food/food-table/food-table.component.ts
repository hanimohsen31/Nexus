import { Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FoodDataService } from '../../store/food-data.service';
import { OperationsService } from '../../store/operations.service';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginator,
    MatSort,
  ],
})
export class FoodTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = [
    'name',
    'translation',
    'unit',
    'calories',
    'fats',
    'carbs',
    'protein',
    'menue',
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private foodDataService: FoodDataService,
    private operationsService: OperationsService
  ) {
    this.getFoodData();
  }

  getFoodData() {
    this.foodDataService.getFoodData().subscribe({
      next: (res) => {
        let array: any = Object.values(res);
        this.dataSource = new MatTableDataSource(array);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  // filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // handle add
  handleAdd(element: any) {
    this.operationsService.handleAdd(element);
  }
}
