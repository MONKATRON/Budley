import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

export interface GrowData {
  id: number;
  name: string;
  strain: string;
  startDate: string;
  vegTime: number
  flowerTime: number;
  inout: string;
}

const ELEMENT_DATA: GrowData[] = [
  { id: 1, name: 'Sour Diesel', strain: 'Sativa', startDate: '2024-03-20', vegTime:35, flowerTime:84, inout:'Outdoor' },
  { id: 2, name: 'Blue Dream', strain: 'Hybrid', startDate: '2024-02-18', vegTime:35, flowerTime:77, inout:'Glasshouse' },
  { id: 3, name: 'Granddaddy Purple', strain: 'Indica', startDate: '2024-01-15', vegTime:35, flowerTime:70, inout:'Indoor' },
];


@Component({
  selector: 'budley-list-grows',
  standalone: true,
  imports: [
    CommonModule, 
    MaterialModule,
    RoundProgressModule
  ],
  templateUrl: './list-grows.component.html',
  styleUrl: './list-grows.component.scss',
})

export class ListGrowsComponent implements OnInit {

  // constructor();

  grows = ELEMENT_DATA; // This would be fetched from the backend or service


  ngOnInit(): void {
      
  }

  openGrow(grow: any): void {
    // Implement navigation to the Grow view
  }

  createGrow(): void {
    // Implement opening the Create Grow view
  }
  
  calcDaysUsed(startDate:any){


    let currentDate = new Date();
    let dateSent = new Date(startDate);


    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));

  }
}
