import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NewGrowDialogComponent } from '../../dialogs/new-grow-dialog/new-grow-dialog.component';


@Component({
  selector: 'budley-grows-dash-disp',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    NewGrowDialogComponent
  ],
  templateUrl: './grows-dash-disp.component.html',
  styleUrl: './grows-dash-disp.component.scss',
})
export class GrowsDashDispComponent {

  constructor( public dialog: MatDialog ) {}

  openAddGrowDialog(){
    console.log("openAddGrowDialog");
    const dialogRef = this.dialog.open( NewGrowDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result from the dialog
    });
  }
}
