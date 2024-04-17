import { Component, OnInit, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { StrainDetailsComponent } from '../strain-details/strain-details.component';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { MatStepper } from '@angular/material/stepper';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { LightDetailsComponent } from '../light-details/light-details.component';
import { MediumDetailsComponent } from '../medium-details/medium-details.component';
import { VentDetailsComponent } from '../vent-details/vent-details.component';
import { FeedDetailsComponent } from '../feed-details/feed-details.component';

@Component({
  selector: 'budley-grow-wizzard',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BasicDetailsComponent,
    StrainDetailsComponent,
    RoomDetailsComponent,
    LightDetailsComponent,
    MediumDetailsComponent,
    VentDetailsComponent,
    FeedDetailsComponent
  ],
  templateUrl: './grow-wizzard.component.html',
  styleUrl: './grow-wizzard.component.scss',
})

export class GrowWizzardComponent implements OnInit {
  
  basicDetailsForm: FormGroup;
  strainDetailsForm: FormGroup;
  roomDetailsForm: FormGroup;
  lightDetailsForm: FormGroup;
  feedDetailsForm: FormGroup;
  soilDetailsForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) {}
  
  ngOnInit(): void {
        
    this.initForms();
  }
  
  private initForms(): void {
    this.basicDetailsForm = this.formBuilder.group({
      growName: ['', Validators.required],
      growStartDate: [new Date(), Validators.required],
      seedOrClone: ['Seed', Validators.required]
    });

    this.strainDetailsForm = this.formBuilder.group({
      seedbank: ['', Validators.required],
      strain: ['', Validators.required],
      flowerTime: [null, [Validators.required, Validators.min(5), Validators.max(20)]],
      species: ['Hybrid', Validators.required],
      flowering: ['Photoperiod', Validators.required],
      feminized: [false]
    });

    this.roomDetailsForm = this.formBuilder.group({
      roomType: ['', Validators.required],
      roomLength: [null, [Validators.required, Validators.min(1)]],
      roomWidth: [null, [Validators.required, Validators.min(1)]],
      roomHeight: [null, [Validators.required, Validators.min(1)]]
    });

    this.lightDetailsForm = this.formBuilder.group({
      lumens: [null, Validators.required],
      watts: [null, Validators.required],
      lightType: ['', Validators.required]
    });

    this.feedDetailsForm = this.formBuilder.group({
      feedType: ['', Validators.required]
    });

    this.soilDetailsForm = this.formBuilder.group({
      soilType: ['', Validators.required],
      pHLevel: [null, [Validators.required, Validators.min(1), Validators.max(14)]]
    });

  }
  
  goNext(stepper: MatStepper) {
    stepper.next();
  }
  
  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  submitAllForms() {
    if (this.basicDetailsForm.valid && this.strainDetailsForm.valid &&
        this.roomDetailsForm.valid && this.lightDetailsForm.valid &&
        this.feedDetailsForm.valid && this.soilDetailsForm.valid) {
      // Collect all form data into a single object
      const allData = {
        basic: this.basicDetailsForm.value,
        strain: this.strainDetailsForm.value,
        room: this.roomDetailsForm.value,
        light: this.lightDetailsForm.value,
        feed: this.feedDetailsForm.value,
        soil: this.soilDetailsForm.value
      };
      console.log(allData);
      // Here you might send this data to a server or handle it according to your application's needs
    } else {
      // Log an error or handle invalid form states
      console.error('Some forms are invalid');
    }
  }
}
