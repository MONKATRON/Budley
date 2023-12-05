import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'budley-new-grow-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './new-grow-dialog.component.html',
  styleUrl: './new-grow-dialog.component.scss',
})
export class NewGrowDialogComponent {
  addGrowForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addGrowForm = this.formBuilder.group({
      growName: ['', Validators.required],
      passphrase: ['', Validators.required]
    });
  }

  
  onCreateGrow() {
    if (this.addGrowForm.valid) {
      // Logic to create the grow and close dialog
    }
  }

  onCancel() {
    // Logic to close the dialog
  }
}
